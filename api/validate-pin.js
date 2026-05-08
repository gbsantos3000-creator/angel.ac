const pins = global.pins || new Map()
global.pins = pins

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { pin } = req.body

  if (!pin) {
    return res.status(400).json({
      success: false,
      message: "PIN missing",
    })
  }

  const record = pins.get(pin)

  if (!record) {
    return res.status(401).json({
      success: false,
      message: "Invalid PIN",
    })
  }

  if (record.used) {
    return res.status(401).json({
      success: false,
      message: "PIN already used",
    })
  }

  const expired = Date.now() - record.createdAt > 1000 * 60 * 10

  if (expired) {
    pins.delete(pin)

    return res.status(401).json({
      success: false,
      message: "PIN expired",
    })
  }

  record.used = true
  pins.set(pin, record)

  return res.status(200).json({
    success: true,
    message: "PIN accepted",
  })
}
