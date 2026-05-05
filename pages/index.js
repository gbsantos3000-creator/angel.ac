import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at center, #0f172a, #000)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <h1 style={{fontSize: "60px"}}>ANGEL A.C</h1>
      <p style={{opacity: 0.6}}>Advanced Anti-Cheat for FiveM</p>

      {!session ? (
        <button onClick={() => signIn("discord")} style={btn}>
          Login com Discord
        </button>
      ) : (
        <>
          <p>{session.user.email}</p>
          <p>Role: {session.user.role}</p>

          <a href="/api/download">
            <button style={btn}>
              Download Scanner
            </button>
          </a>

          {session.user.role === "owner" && (
            <a href="/admin">
              <button style={btn}>
                Painel Admin
              </button>
            </a>
          )}

          <button onClick={() => signOut()} style={btn}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

const btn = {
  marginTop: 20,
  padding: "12px 30px",
  background: "#2563eb",
  border: "none",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer"
};
