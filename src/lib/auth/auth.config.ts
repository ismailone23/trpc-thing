import Discord from "next-auth/providers/discord";
import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

export default {
    providers: [
        Discord,
        Github,
    ],
} satisfies NextAuthConfig