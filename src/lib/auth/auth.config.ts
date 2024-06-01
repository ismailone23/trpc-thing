import Discord from "next-auth/providers/discord";
import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import { env } from "@/env";

export default {
    providers: [
        Discord({
            allowDangerousEmailAccountLinking: true,
            // clientId: env.AUTH_DISCORD_ID,
            // clientSecret: env.AUTH_DISCORD_SECRET
        }),
        Github({
            allowDangerousEmailAccountLinking: true
            // clientId: env.AUTH_GITHUB_ID,
            // clientSecret: env.AUTH_GITHUB_SECRET,
        }),
    ],
} satisfies NextAuthConfig