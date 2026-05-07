import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token }) {

      session.user.id = token.sub

      // PLANOS

      session.user.plan = "Lifetime"

      session.user.expire = "Never expires"

      return session
    },
  },
}

export default NextAuth(authOptions)
