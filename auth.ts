import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";

const config: NextAuthConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findFirst({
          where: { email: credentials.email as string },
        });

        if (user?.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password,
          );

          if (isMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    session({ session, user, trigger, token }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      session.user.id = token.sub;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      session.user.role = token.role;
      session.user.name = token.name;

      if (trigger === "update") {
        session.user.name = user.name;
      }

      return session;
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  async jwt({ token, user }) {
    if (user) {
      token.sub = user.id;
      token.role = user.role;

      if (user.name === "NO_NAME") {
        token.name = user.email!.split("@")[0];
      }
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        name: token.name,
      },
    });

    return token;
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
