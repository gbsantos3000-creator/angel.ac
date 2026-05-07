export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const body = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
  });

  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const tokenData = await tokenRes.json();

  const userRes = await fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  const user = await userRes.json();

  res.redirect(`/dashboard?username=${user.username}`);
}
