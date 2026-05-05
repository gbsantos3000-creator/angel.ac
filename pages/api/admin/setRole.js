import { getServerSession } from "next-auth"

export default async function handler(req, res) {
  const session = await getServerSession(req, res)

  if (!session || session.user.role !== "owner") {
    return res.status(403).json({ error: "Sem permissão" })
  }

  const { userId, role } = req.body

  // 🔥 aqui depois você conecta banco
  console.log("Alterar:", userId, role)

  res.json({ success: true })
}
