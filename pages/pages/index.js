export default function Home() {
  return (
    <div style={{
      height: "100vh",
      margin: 0,
      background: "radial-gradient(circle at top, #111 0%, #000 80%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      overflow: "hidden"
    }}>

      {/* glow background */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "rgba(37,99,235,0.3)",
        filter: "blur(120px)",
        borderRadius: "50%",
        top: "-100px",
        animation: "pulse 6s infinite alternate"
      }} />

      {/* título */}
      <h1 style={{
        fontSize: "64px",
        letterSpacing: "2px",
        marginBottom: "10px",
        zIndex: 2
      }}>
        ANGEL A.C
      </h1>

      {/* subtítulo */}
      <p style={{
        opacity: 0.6,
        fontSize: "18px",
        zIndex: 2
      }}>
        Advanced Anti-Cheat System
      </p>

      {/* botão */}
      <button style={{
        marginTop: "40px",
        padding: "16px 40px",
        fontSize: "16px",
        background: "linear-gradient(90deg, #2563eb, #1e40af)",
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 2,
        transition: "0.3s",
        boxShadow: "0 0 20px rgba(37,99,235,0.6)"
      }}
      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.target.style.transform = "scale(1)"}
      >
        Download Scanner
      </button>

      {/* animação */}
      <style jsx>{`
        @keyframes pulse {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
