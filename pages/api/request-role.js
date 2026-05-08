export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false })
  }

  const { name, email, image } = req.body

  const webhook = process.env.DISCORD_WEBHOOK_URL

  if (!webhook) {
    return res.status(500).json({
      success: false,
      message: "Discord webhook not configured",
    })
  }

  await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "ANGEL A.C — Pedido de Cargo",
          color: 0xd4af37,
          thumbnail: image ? { url: image } : undefined,
          fields: [
            {
              name: "Nome",
              value: name || "Não informado",
              inline: true,
            },
            {
              name: "Discord / Email",
              value: email || "Não informado",
              inline: true,
            },
            {
              name: "Cargo solicitado",
              value: "Acesso ao Scanner ANGEL A.C",
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  })

  return res.status(200).json({ success: true })
}
