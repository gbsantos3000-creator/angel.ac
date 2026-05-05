import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub

      if (session.user.email === "SEU_EMAIL_AQUI") {
        session.user.role = "owner"
      } else {
        session.user.role = "scan"
      }

      return session
    },
  },
}

export default NextAuth(authOptions)
