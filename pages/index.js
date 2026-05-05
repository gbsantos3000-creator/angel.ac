export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #111 0%, #000 80%)",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* NAVBAR */}
      <div style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        zIndex: 10
      }}>
        <h2>ANGEL A.C</h2>
        <button style={{
          background: "transparent",
          border: "1px solid #2563eb",
          padding: "8px 16px",
          borderRadius: "6px",
          color: "#fff",
          cursor: "pointer"
        }}>
          Login
        </button>
      </div>

      {/* HERO */}
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>

        {/* GLOW */}
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(37,99,235,0.25)",
          filter: "blur(150px)",
          borderRadius: "50%",
          animation: "pulse 6s infinite alternate"
        }} />

        <h1 style={{
          fontSize: "64px",
          zIndex: 2
        }}>
          ANGEL A.C
        </h1>

        <p style={{
          opacity: 0.6,
          marginTop: 10,
          zIndex: 2
        }}>
          Advanced Anti-Cheat Platform
        </p>

        {/* BOTÃO */}
        <button style={{
          marginTop: 40,
          padding: "16px 40px",
          fontSize: "16px",
          background: "linear-gradient(90deg, #2563eb, #1e40af)",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          cursor: "pointer",
          zIndex: 2,
          boxShadow: "0 0 40px rgba(37,99,235,0.5)",
          transition: "0.3s"
        }}
        onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"}
        >
          Download Scanner
        </button>

      </div>

      {/* ANIMAÇÃO */}
      <style jsx>{`
        @keyframes pulse {
          from { transform: scale(1); }
          to { transform: scale(1.3); }
        }
      `}</style>

    </div>
  );
}
