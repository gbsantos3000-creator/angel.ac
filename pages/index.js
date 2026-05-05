import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Carregando...</p>
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "#0a0a0a",
      color: "white"
    }}>
      <h1>ANGEL A.C</h1>

      {!session ? (
        <button onClick={() => signIn("discord")}>
          Login com Discord
        </button>
      ) : (
        <>
          <p>Logado como {session.user.email}</p>

          <a href="/api/download">
            <button>Download Scanner</button>
          </a>

          <button onClick={() => signOut()}>
            Sair
          </button>
        </>
      )}
    </div>
  )
}
