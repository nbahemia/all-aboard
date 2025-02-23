import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig, type JWT } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string; // Extend the JWT interface to include id
  }
}

/**
 * NextAuth configuration
 */
export const authConfig = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt", // Use JWT sessions instead of database sessions
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error", // Custom error page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user ID in token
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id; // Ensure type safety
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development", // Enable debugging in development
} satisfies NextAuthConfig;
