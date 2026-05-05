import { getServerSession } from "next-auth"

export default async function handler(req, res) {
  const session = await getServerSession(req, res)

  if (!session || session.user.role !== "owner") {
    return res.status(403).json({ error: "Sem permissão" })
  }

  res.json({
    users: [
      { id: "1", name: "User1", role: "scan" },
      { id: "2", name: "User2", role: "admin" },
    ],
  })
}
