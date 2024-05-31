/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */


import { getServerAuthSession } from "@/server/auth/auth";
import { type NextRequest } from "next/server";

const createTRPCContext = async (opts: { headers: Headers }) => {
    const sesstion = await getServerAuthSession()
    return {
        sesstion,
        ...opts,
    };
};

export const createContext = async (req: NextRequest) => createTRPCContext({ headers: req.headers })

export type Context = typeof createTRPCContext