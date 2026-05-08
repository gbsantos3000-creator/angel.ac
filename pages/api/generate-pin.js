const pins = global.angelPins || new Map()
global.angelPins = pins

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false })
  }

  const pin = Math.floor(100000 + Math.random() * 900000).toString()

  pins.set(pin, {
    used: false,
    createdAt: Date.now(),
  })

  return res.status(200).json({
    success: true,
    pin,
  })
}
