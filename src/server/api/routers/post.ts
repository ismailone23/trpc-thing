import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const userProcedure = publicProcedure.input(z.object({ userId: z.string() }))
let user: { name: string, userId: string }[] = [{ userId: "1ku-3jdsj", name: "ismail" }];
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: `Hello world from tprc hello`,
      };
    }),
  get: publicProcedure.query(() => {
    return {
      res: user
    }
  }),
  update: userProcedure.input(z.object({ name: z.string() })).mutation(req => {
    user.push({ name: req.input.name, userId: req.input.userId })
    console.log(req.ctx);
    return user
  }),
  // secretData: protectedProcedure.query(({ ctx }) => {
  //   console.log(ctx.user);
  //   return { token: "this is a secrect token" }
  // })

});
