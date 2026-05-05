import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: "Não logado" })
  }

  if (!["owner", "admin", "scan"].includes(session.user.role)) {
    return res.status(403).json({ error: "Sem acesso" })
  }

  res.redirect("https://seu-link-do-scanner.com/scanner.exe")
}
