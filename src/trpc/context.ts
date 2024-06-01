import { auth } from "@/lib/auth/auth";
import { type NextRequest } from "next/server";

const createTRPCContext = async (opts: { headers: Headers }) => {
    const sesstion = await auth();
    return {
        sesstion,
        ...opts,
    };
};

export const createContext = async (req: NextRequest) => createTRPCContext({ headers: req.headers })

export type Context = typeof createTRPCContext