import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.discordId = profile.id
        token.username = profile.username
        token.globalName = profile.global_name
      }

      return token
    },

    async session({ session, token }) {
      session.user.id = token.discordId
      session.user.username = token.username
      session.user.globalName = token.globalName

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
})
