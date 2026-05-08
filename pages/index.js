import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const downloadScanner = () => {
    window.location.href = "/downloads/angel-scanner.exe"
  }

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

          <button onClick={() => router.push("/scan")}>
            ⌕ Scan
          </button>

          <button onClick={() => router.push("/logs")}>
            ▤ Logs
          </button>

          <button onClick={() => router.push("/quarantine")}>
            🛡 Quarantine
          </button>

          <button onClick={() => router.push("/settings")}>
            ⚙ Settings
          </button>

          <button onClick={() => router.push("/about")}>
            ⓘ About
          </button>
        </div>

        <div className="protectionBox">
          <h3>PROTECTION</h3>
          <span>ACTIVE</span>
          <p>Real-time protection enabled</p>
        </div>
      </aside>

      <main className="mainContent">

        <section className="hero">
          <div className="heroText">
            <h1>ANGEL A.C</h1>
            <p>ADVANCED ANTI-CHEAT SCANNER</p>
            <span>POWERFUL · FAST · SECURE</span>
          </div>

          <button className="logout" onClick={() => signOut()}>
            Logout
          </button>
        </section>

        <div className="cards">

          <div className="card">
            <h3>STATUS</h3>
            <h2>PROTECTED</h2>
            <p>Your system is secure</p>
          </div>

          <div className="card">
            <h3>LAST SCAN</h3>
            <h2>2 MIN AGO</h2>
            <p>No threats found</p>
          </div>

          <div className="card">
            <h3>THREATS BLOCKED</h3>
            <h2>0</h2>
            <p>Total blocked</p>
          </div>

          <div className="card">
            <h3>SYSTEM UPTIME</h3>
            <h2>01:24:57</h2>
            <p>Scanning in real-time</p>
          </div>

        </div>

        <div className="bottomGrid">

          <div className="scanBox">
            <h2>QUICK SCAN</h2>

            <p>
              Scans critical areas of your system for threats.
            </p>

            <div className="scanTop">
              <span></span>
              <strong>100%</strong>
            </div>

            <div className="progressBar">
              <div className="progress"></div>
            </div>

            <div className="completed">
              <div className="check">✓</div>

              <div>
                <h1>SCAN COMPLETED</h1>
                <p>
                  No threats detected. Your system is clean.
                </p>
              </div>
            </div>

            <div className="buttons">

              <button
                className="goldBtn"
                onClick={downloadScanner}
              >
                ⌕ DOWNLOAD SCANNER
              </button>

              <button
                className="darkBtn"
                onClick={downloadScanner}
              >
                🛡 FULL SCAN
              </button>

            </div>
          </div>

          <div className="infoBox">

            <h2>SYSTEM INFORMATION</h2>

            <div className="infoRow">
              <span>USER</span>
              <strong>
                {session.user?.name || "Discord User"}
              </strong>
            </div>

            <div className="infoRow">
              <span>OS</span>
              <strong>Windows 11 Pro</strong>
            </div>

            <div className="infoRow">
              <span>CPU</span>
              <strong>Intel Core i5-10400F</strong>
            </div>

            <div className="infoRow">
              <span>GPU</span>
              <strong>NVIDIA GTX 1650</strong>
            </div>

            <div className="infoRow">
              <span>RAM</span>
              <strong>16 GB</strong>
            </div>

            <div className="infoRow">
              <span>VERSION</span>
              <strong>1.0.0</strong>
            </div>

          </div>

        </div>

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
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .sideLogo h1 {
          color: #d4af37;
          font-size: 32px;
        }

        .sideLogo p {
          color: #d4af37;
          letter-spacing: 5px;
          font-size: 12px;
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
          font-size: 16px;
        }

        .menu button:hover,
        .active {
          background: rgba(212,175,55,0.2);
        }

        .protectionBox {
          padding: 20px;
          border-radius: 18px;
          background: #111;
          border: 1px solid rgba(212,175,55,0.2);
        }

        .protectionBox h3 {
          color: #b99038;
        }

        .protectionBox span {
          color: #d4af37;
          font-size: 24px;
          font-weight: bold;
        }

        .mainContent {
          flex: 1;
          padding: 28px;
        }

        .hero {
          width: 100%;
          height: 320px;
          border-radius: 30px;
          border: 1px solid rgba(212,175,55,0.18);
          background: #070707;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 30px;
        }

        .heroText {
          text-align: center;
        }

        .heroText h1 {
          color: #f3d27b;
          font-size: 86px;
          letter-spacing: 8px;
        }

        .heroText p {
          color: #eee;
          letter-spacing: 7px;
        }

        .heroText span {
          display: block;
          color: #d4af37;
          margin-top: 20px;
        }

        .logout {
          position: absolute;
          top: 22px;
          right: 22px;
          background: transparent;
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.35);
          border-radius: 12px;
          padding: 10px 18px;
          cursor: pointer;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .card,
        .scanBox,
        .infoBox {
          background: #0b0b0b;
          border: 1px solid rgba(212,175,55,0.16);
          border-radius: 22px;
          padding: 25px;
        }

        .card h3 {
          color: #8f7440;
          margin-bottom: 15px;
        }

        .card p {
          color: #d4af37;
          font-size: 13px;
        }

        .bottomGrid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 25px;
        }

        .scanBox h2,
        .infoBox h2 {
          color: #d4af37;
          margin-bottom: 15px;
        }

        .scanTop {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .progressBar {
          width: 100%;
          height: 12px;
          border-radius: 20px;
          background: #111;
          margin: 10px 0 35px;
          overflow: hidden;
        }

        .progress {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #8f641d, #f7d77e, #d4af37);
        }

        .completed {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .check {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid #d4af37;
          color: #d4af37;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 48px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .goldBtn,
        .darkBtn {
          flex: 1;
          height: 60px;
          border-radius: 16px;
          font-size: 17px;
          font-weight: bold;
          cursor: pointer;
        }

        .goldBtn {
          background: linear-gradient(135deg, #d4af37, #705018);
          color: white;
          border: none;
        }

        .darkBtn {
          background: #111;
          color: white;
          border: 1px solid rgba(212,175,55,0.18);
        }

        .infoRow {
          display: flex;
          justify-content: space-between;
          margin-top: 25px;
        }
      `}</style>
    </div>
  )
}
