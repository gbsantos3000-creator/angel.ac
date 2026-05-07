import { useSession, signIn, signOut } from "next-auth/react"

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
          <div className="sideLogo">
            <div className="miniHalo"></div>
            <div className="miniWings"></div>
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

        <div className="protectionBox">
          <h3>PROTECTION</h3>
          <span>ACTIVE</span>
          <p>Real-time protection enabled</p>
        </div>
      </aside>

      <main className="mainContent">
        <section className="hero">
          <div className="angelBehind">
            <div className="bigHalo"></div>
            <div className="bigWing left"></div>
            <div className="bigWing right"></div>
            <div className="angelBody"></div>
          </div>

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
            <p>Scans critical areas of your system for threats.</p>

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
                <p>No threats detected. Your system is clean.</p>
              </div>
            </div>

            <div className="buttons">
              <button className="goldBtn">⌕ NEW SCAN</button>
              <button className="darkBtn">🛡 FULL SCAN</button>
            </div>
          </div>

          <div className="infoBox">
            <h2>SYSTEM INFORMATION</h2>

            <div className="infoRow">
              <span>USER</span>
              <strong>{session.user?.name || "Discord User"}</strong>
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

        <footer>
          <strong>ANGEL A.C SCANNER</strong>
          <span>ADVANCED PROTECTION</span>
          <b>SIGNATURES UPDATED</b>
          <span>Just now</span>
          <strong>☁ CONNECTED TO ANGEL A.C CLOUD</strong>
        </footer>
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

        .sideLogo {
          position: relative;
          text-align: center;
          padding-top: 35px;
        }

        .sideLogo h1 {
          color: #d4af37;
          font-size: 32px;
          letter-spacing: 2px;
          position: relative;
          z-index: 2;
        }

        .sideLogo p {
          color: #d4af37;
          letter-spacing: 6px;
          font-size: 12px;
          margin-top: 8px;
          position: relative;
          z-index: 2;
        }

        .miniHalo {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 60px;
          height: 14px;
          border: 3px solid #d4af37;
          border-radius: 50%;
          box-shadow: 0 0 18px rgba(212,175,55,0.9);
        }

        .miniWings {
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          width: 160px;
          height: 70px;
          background: radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%);
          filter: blur(3px);
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
          transition: 0.3s;
          font-size: 16px;
          text-align: left;
          padding-left: 22px;
        }

        .menu button:hover,
        .active {
          background: linear-gradient(135deg, rgba(212,175,55,0.75), rgba(60,40,10,0.85)) !important;
          box-shadow: 0 0 25px rgba(212,175,55,0.4);
        }

        .protectionBox {
          padding: 20px;
          border-radius: 18px;
          background: #111;
          border: 1px solid rgba(212,175,55,0.2);
        }

        .protectionBox h3 {
          color: #b99038;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .protectionBox span {
          color: #d4af37;
          font-size: 24px;
          font-weight: bold;
        }

        .protectionBox p {
          color: #aaa;
          margin-top: 10px;
          font-size: 13px;
        }

        .mainContent {
          flex: 1;
          padding: 28px;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 340px;
          border-radius: 30px;
          border: 1px solid rgba(212,175,55,0.18);
          background:
            radial-gradient(circle at center, rgba(212,175,55,0.2), transparent 42%),
            radial-gradient(circle at right, rgba(212,175,55,0.14), transparent 30%),
            #070707;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          box-shadow: inset 0 0 80px rgba(212,175,55,0.06);
        }

        .angelBehind {
          position: absolute;
          width: 850px;
          height: 320px;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.75;
        }

        .bigHalo {
          position: absolute;
          left: 50%;
          top: 25px;
          transform: translateX(-50%);
          width: 120px;
          height: 28px;
          border: 5px solid #f2c766;
          border-radius: 50%;
          box-shadow: 0 0 28px rgba(242,199,102,0.95);
        }

        .angelBody {
          position: absolute;
          left: 50%;
          top: 75px;
          transform: translateX(-50%);
          width: 110px;
          height: 150px;
          background: radial-gradient(circle at 50% 20%, #f3c76a, #191006 45%, transparent 75%);
          border-radius: 50%;
          filter: drop-shadow(0 0 30px rgba(212,175,55,0.9));
          z-index: 2;
        }

        .bigWing {
          position: absolute;
          top: 65px;
          width: 360px;
          height: 170px;
          background: repeating-linear-gradient(
            155deg,
            rgba(246,200,96,0.9) 0px,
            rgba(246,200,96,0.9) 5px,
            rgba(65,39,9,0.7) 9px,
            transparent 18px
          );
          filter: drop-shadow(0 0 25px rgba(212,175,55,0.7));
        }

        .bigWing.left {
          left: 45px;
          clip-path: polygon(100% 35%, 65% 0, 30% 8%, 0 25%, 40% 38%, 5% 54%, 45% 65%, 10% 82%, 58% 85%, 100% 62%);
        }

        .bigWing.right {
          right: 45px;
          clip-path: polygon(0 35%, 35% 0, 70% 8%, 100% 25%, 60% 38%, 95% 54%, 55% 65%, 90% 82%, 42% 85%, 0 62%);
        }

        .heroText {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-top: 50px;
        }

        .heroText h1 {
          color: #f3d27b;
          font-size: 86px;
          letter-spacing: 8px;
          text-shadow: 0 0 18px rgba(212,175,55,0.8), 0 0 45px rgba(212,175,55,0.35);
        }

        .heroText p {
          color: #eee;
          letter-spacing: 7px;
          font-size: 15px;
          margin-top: 8px;
        }

        .heroText span {
          display: block;
          color: #d4af37;
          letter-spacing: 9px;
          font-size: 13px;
          margin-top: 24px;
          font-weight: bold;
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

        .card h3,
        .infoRow span {
          color: #8f7440;
          margin-bottom: 15px;
          font-size: 13px;
        }

        .card h2 {
          color: white;
          margin-bottom: 10px;
          font-size: 20px;
        }

        .card p,
        .scanBox p {
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
          border: 1px solid rgba(212,175,55,0.25);
        }

        .progress {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #8f641d, #f7d77e, #d4af37);
          box-shadow: 0 0 25px rgba(212,175,55,0.8);
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
          box-shadow: 0 0 25px rgba(212,175,55,0.5);
        }

        .completed h1 {
          color: white;
          font-size: 22px;
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
          border: 1px solid rgba(255,255,255,0.18);
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
          font-size: 14px;
        }

        .infoRow strong {
          color: white;
          font-size: 14px;
        }

        footer {
          margin-top: 25px;
          height: 70px;
          border-radius: 18px;
          border: 1px solid rgba(212,175,55,0.13);
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #080808;
          color: #d4af37;
          font-size: 13px;
          letter-spacing: 1px;
        }

        footer span {
          color: #aaa;
        }

        @media (max-width: 1100px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .bottomGrid {
            grid-template-columns: 1fr;
          }

          .heroText h1 {
            font-size: 55px;
          }

          .sidebar {
            width: 230px;
          }
        }
      `}</style>
    </div>
  )
}
