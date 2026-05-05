export default function Home() {
  return (
    <div style={{
      background: "#0a0a0a",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
        ANGEL A.C
      </h1>

      <p style={{ opacity: 0.7 }}>
        Advanced Anti-Cheat Platform
      </p>

      <button style={{
        marginTop: 30,
        padding: "14px 28px",
        background: "#2563eb",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Download Scanner
      </button>
    </div>
  );
}
