import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const baseUrl =
  "https://angel-ac-zocv.vercel.app";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId:
        process.env.DISCORD_CLIENT_ID,

      clientSecret:
        process.env
          .DISCORD_CLIENT_SECRET,

      authorization: {
        params: {
          scope: "identify email",

          redirect_uri: `${baseUrl}/api/auth/callback/discord`,
        },
      },
    }),
  ],

  secret:
    process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
    error: "/",
  },

  callbacks: {
    async jwt({
      token,
      profile,
    }) {
      if (profile) {
        token.username =
          profile.username;
      }

      return token;
    },

    async session({
      session,
      token,
    }) {
      if (session.user) {
        session.user.id =
          token.sub;

        session.user.name =
          token.username ||
          session.user.name;

        session.user.plan =
          "OWNER";

        session.user.license =
          "LIFETIME";
      }

      return session;
    },

    async redirect() {
      return `${baseUrl}/dashboard`;
    },
  },
});
