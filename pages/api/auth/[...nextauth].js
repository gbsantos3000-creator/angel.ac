import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const baseUrl = "https://angel-ac-zocv.vercel.app";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          scope: "identify email",
          redirect_uri: `${baseUrl}/api/auth/callback/discord`,
        },
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
    error: "/",
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.id;
        token.username = profile.username;
        token.avatar = profile.avatar;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id || token.sub;
        session.user.name = token.username || session.user.name;
        session.user.plan = "OWNER";
        session.user.license = "LIFETIME";
      }

      return session;
    },

    async redirect({ url, baseUrl }) {
      return "/dashboard";
    },
  },
});
