import { useSession, signIn } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

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
            background: radial-gradient(circle, rgba(212,175,55,0.18), transparent);
            filter: blur(20px);
          }

          .loginBox {
            position: relative;
            z-index: 2;
            width: 420px;
            padding: 50px;
            border-radius: 24px;
            background: rgba(15,15,15,0.95);
            border: 1px solid rgba(212,175,55,0.2);
            box-shadow: 0 0 40px rgba(212,175,55,0.08);
            text-align: center;
          }

          .loginBox h1 {
            color: #d4af37;
            font-size: 42px;
            margin-bottom: 10px;
            letter-spacing: 4px;
          }

          .loginBox p {
            color: #999;
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

          .loginBox button:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px rgba(212,175,55,0.45);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <h1 className="logo">ANGEL A.C</h1>
          <p className="scanner">SCANNER</p>
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
        <h1>Dashboard</h1>
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

        .logo {
          color: #d4af37;
          font-size: 34px;
          text-align: center;
        }

        .scanner {
          color: #d4af37;
          letter-spacing: 6px;
          font-size: 12px;
          text-align: center;
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
          padding: 40px;
        }
      `}</style>
    </div>
  )
}
