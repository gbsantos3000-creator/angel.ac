import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const baseUrl = "https://angel-ac-zocv.vercel.app";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "identify email",
          redirect_uri: `${baseUrl}/api/auth/callback/discord`,
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
