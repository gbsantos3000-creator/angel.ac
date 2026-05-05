import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  const angels = Array.from({ length: 20 })

  if (status === "loading") {
    return <p style={{ color: "white" }}>Carregando...</p>
  }

  // 🔥 FUNÇÕES DE PLANO
  function getPlanLabel(plan) {
    if (plan === "mensal") return "Plan: Mensal"
    if (plan === "trimestral") return "Plan: Trimestral"
    if (plan === "anual") return "Plan: Anual"
    if (plan === "lifetime") return "Plan: Lifetime"
    return "Free"
  }

  function getExpiration(timestamp) {
    if (!timestamp) return "Não expira"

    const date = new Date(timestamp)
    return "Expira em: " + date.toLocaleDateString()
  }

  return (
    <div style={{
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      background: "radial-gradient(circle at center, #0b1a3a, #05070f)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "white"
    }}>

      {/* 👼 ANJOS */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}>
        {angels.map((_, i) => (
          <img
            key={i}
            src="https://cdn-icons-png.flaticon.com/512/3523/3523063.png"
            style={{
              position: "absolute",
              left: Math.random() * 100 + "%",
              width: 20 + Math.random() * 25 + "px",
              opacity: 0.5,
              filter: "drop-shadow(0 0 6px #3b82f6)",
              animation: `float ${10 + Math.random() * 20}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* 👤 TOPO USUÁRIO */}
      {session && (
        <div style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(10,15,30,0.7)",
            padding: "10px 16px",
            borderRadius: "14px",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(59,130,246,0.3)",
            boxShadow: "0 0 20px rgba(59,130,246,0.2)"
          }}>

            <img
              src={session.user.image}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "2px solid #3b82f6",
                boxShadow: "0 0 10px #3b82f6",
                animation: "pulseGlow 2s infinite"
              }}
            />

            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: "14px" }}>
                Logged with <b>{session.user.name}</b>
              </div>

              <div style={{
                fontSize: "12px",
                color: "#60a5fa"
              }}>
                {getPlanLabel(session.user.plan)}
              </div>

              <div style={{
                fontSize: "11px",
                opacity: 0.7
              }}>
                {getExpiration(session.user.expiresAt)}
              </div>
            </div>

            <button onClick={() => signOut()} style={{
              marginLeft: "10px",
              background: "transparent",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              borderRadius: "6px",
              padding: "4px 8px",
              cursor: "pointer"
            }}>
              Sair
            </button>

          </div>
        </div>
      )}

      {/* 🎯 CONTEÚDO */}
      <div style={{ zIndex: 1, textAlign: "center" }}>
        <h1 style={{ fontSize: "60px", letterSpacing: "2px" }}>ANGEL A.C</h1>
        <p style={{ opacity: 0.6 }}>Advanced Anti-Cheat for FiveM</p>

        {!session ? (
          <button
            onClick={() => signIn("discord")}
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              background: "#2563eb",
              border: "none",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 0 20px #2563eb",
              transition: "0.3s"
            }}
          >
            Login com Discord
          </button>
        ) : (
          <>
            <a href="/api/download">
              <button
                style={{
                  marginTop: "20px",
                  padding: "14px 28px",
                  background: "#2563eb",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 0 20px #2563eb"
                }}
              >
                Download Scanner
              </button>
            </a>
          </>
        )}
      </div>

      {/* ✨ ANIMAÇÕES */}
      <style jsx global>{`
        @keyframes float {
          from {
            transform: translateY(100vh) translateX(0);
          }
          to {
            transform: translateY(-10vh) translateX(50px);
          }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 5px #3b82f6 }
          50% { box-shadow: 0 0 20px #3b82f6 }
          100% { box-shadow: 0 0 5px #3b82f6 }
        }
      `}</style>
    </div>
  )
}
