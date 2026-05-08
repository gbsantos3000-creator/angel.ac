import { useSession, signIn, signOut } from "next-auth/react"
import ScannerDashboard from "../src/components/ScannerDashboard"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="loading">
        <h1>ANGEL A.C</h1>
        <p>Loading...</p>

        <style jsx>{`
          .loading {
            width: 100%;
            height: 100vh;
            background: #050505;
            color: #d4af37;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-family: Arial;
          }
        `}</style>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="loginPage">
        <div className="goldGlow"></div>

        <div className="loginBox">
          <h1>ANGEL A.C</h1>
          <p>Advanced Anti-Cheat Platform</p>

          <button onClick={() => signIn("discord")}>
            Login with Discord
          </button>
        </div>

        <style jsx>{`
          .loginPage {
            width: 100%;
            height: 100vh;
            background: #050505;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            font-family: Arial;
          }

          .goldGlow {
            position: absolute;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(212,175,55,0.2), transparent 65%);
            filter: blur(20px);
          }

          .loginBox {
            position: relative;
            z-index: 2;
            width: 420px;
            padding: 50px;
            border-radius: 24px;
            background: rgba(15,15,15,0.95);
            border: 1px solid rgba(212,175,55,0.25);
            box-shadow: 0 0 45px rgba(212,175,55,0.15);
            text-align: center;
          }

          .loginBox h1 {
            color: #d4af37;
            font-size: 42px;
            margin-bottom: 10px;
            letter-spacing: 4px;
          }

          .loginBox p {
            color: #aaa;
            margin-bottom: 35px;
            font-size: 15px;
          }

          .loginBox button {
            width: 100%;
            height: 55px;
            border: none;
            border-radius: 14px;
            background: #d4af37;
            color: #000;
            font-size: 17px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <div>
          <div className="sideLogo">
            <h1>ANGEL A.C</h1>
            <p>SCANNER</p>
          </div>
        </div>

        <div className="menu">
          <button className="active">▦ Dashboard</button>
          <button>⌕ Scan</button>
          <button>▤ Logs</button>
          <button>🛡 Quarantine</button>
          <button>⚙ Settings</button>
          <button>ⓘ About</button>
        </div>
      </aside>

      <main className="mainContent">

        <section className="hero">
          <div className="heroText">
            <h1>ANGEL A.C</h1>
            <p>ADVANCED ANTI-CHEAT SCANNER</p>
          </div>

          <button className="logout" onClick={() => signOut()}>
            Logout
          </button>
        </section>

        <div className="cards">
          <div className="card">
            <h3>STATUS</h3>
            <h2>PROTECTED</h2>
          </div>

          <div className="card">
            <h3>LAST SCAN</h3>
            <h2>2 MIN AGO</h2>
          </div>

          <div className="card">
            <h3>THREATS BLOCKED</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>SYSTEM UPTIME</h3>
            <h2>01:24:57</h2>
          </div>
        </div>

        {/* SCANNER */}
        <ScannerDashboard />

      </main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial;
        }

        .dashboard {
          width: 100%;
          min-height: 100vh;
          background: #050505;
          display: flex;
          color: white;
        }

        .sidebar {
          width: 280px;
          background: #080808;
          border-right: 1px solid rgba(212,175,55,0.18);
          padding: 35px 25px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 45px;
        }

        .menu button {
          height: 58px;
          border-radius: 14px;
          border: 1px solid rgba(212,175,55,0.15);
          background: #111;
          color: white;
          cursor: pointer;
        }

        .mainContent {
          flex: 1;
          padding: 28px;
        }

        .hero {
          width: 100%;
          height: 260px;
          border-radius: 30px;
          background: #070707;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 30px;
          border: 1px solid rgba(212,175,55,0.18);
        }

        .heroText h1 {
          color: #f3d27b;
          font-size: 72px;
        }

        .heroText p {
          text-align: center;
          color: #d4af37;
          margin-top: 10px;
        }

        .logout {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.35);
          color: #d4af37;
          padding: 10px 18px;
          border-radius: 12px;
          cursor: pointer;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: #0b0b0b;
          border: 1px solid rgba(212,175,55,0.16);
          border-radius: 22px;
          padding: 25px;
        }

        .card h3 {
          color: #8f7440;
          margin-bottom: 15px;
        }

        .card h2 {
          color: white;
        }
      `}</style>
    </div>
  )
}
