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

      // 🔥 AQUI VOCÊ DEFINE O PLANO (simples por enquanto)
      // depois pode vir de banco

      const plan = "mensal" // muda aqui depois

      let days = 30

      if (plan === "trimestral") days = 90
      if (plan === "anual") days = 365
      if (plan === "lifetime") days = null

      const now = Date.now()

      session.user.plan = plan
      session.user.expiresAt = days
        ? now + days * 24 * 60 * 60 * 1000
        : null

      return session
    },
  },
}

export default NextAuth(authOptions)
