import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

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
        backdropFilter: "blur(10px)"
      }}>
        <h2>ANGEL A.C</h2>

        {!session ? (
          <button onClick={() => signIn("discord")} style={btn}>
            Login Discord
          </button>
        ) : (
          <div>
            <span>{session.user.email} ({session.user.role})</span>

            <button onClick={() => signOut()} style={btn}>
              Logout
            </button>
          </div>
        )}
      </div>

      {/* HERO */}
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>

        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(37,99,235,0.25)",
          filter: "blur(150px)",
          borderRadius: "50%",
          animation: "pulse 6s infinite alternate"
        }} />

        <h1 style={{ fontSize: "64px" }}>ANGEL A.C</h1>

        <p style={{ opacity: 0.6 }}>
          Advanced Anti Cheat for FiveM
        </p>

        {session && (
          <a href="/api/download">
            <button style={mainBtn}>
              Download Scanner
            </button>
          </a>
        )}

      </div>

      <style jsx>{`
        @keyframes pulse {
          from { transform: scale(1); }
          to { transform: scale(1.3); }
        }
      `}</style>

    </div>
  );
}

const btn = {
  marginLeft: "10px",
  padding: "8px 16px",
  border: "1px solid #2563eb",
  background: "transparent",
  color: "#fff",
  cursor: "pointer"
};

const mainBtn = {
  marginTop: 40,
  padding: "16px 40px",
  background: "#2563eb",
  border: "none",
  color: "#fff",
  borderRadius: "10px",
  cursor: "pointer"
};
