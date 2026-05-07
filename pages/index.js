import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="loginPage">
        <div className="goldGlow"></div>

        <div className="loginBox">
          <h1>ANGEL A.C</h1>

          <p>Advanced Anti-Cheat Platform</p>

          <a href="/api/auth/discord">
            <button>Login with Discord</button>
          </a>
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
          <div className="sideAngel">
            <div className="miniHalo"></div>
            <div className="miniHead"></div>
            <div className="miniWing left"></div>
            <div className="miniWing right"></div>
          </div>

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

        <div className="protectionBox">
          <h3>PROTECTION</h3>
          <span>ACTIVE</span>
          <p>Real-time protection enabled</p>
        </div>
      </aside>

      <main className="mainContent">
        <section className="hero">
          <div className="angelArt">
            <div className="halo"></div>
            <div className="angelBody"></div>
            <div className="wing wingLeft"></div>
            <div className="wing wingRight"></div>
          </div>

          <div className="heroText">
            <h1>ANGEL A.C</h1>
            <p>ADVANCED ANTI-CHEAT SCANNER</p>
            <span>POWERFUL · FAST · SECURE</span>
          </div>
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
              <span>ARCHITECTURE</span>
              <strong>64-bit</strong>
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

        .sideAngel {
          position: relative;
          height: 75px;
          margin-bottom: 10px;
        }

        .miniHalo {
          position: absolute;
          left: 100px;
          top: 0;
          width: 55px;
          height: 13px;
          border: 3px solid #d4af37;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(212,175,55,0.8);
        }

        .miniHead {
          position: absolute;
          left: 115px;
          top: 22px;
          width: 26px;
          height: 38px;
          background: radial-gradient(circle, #d4af37, #1a1204 70%);
          border-radius: 50%;
        }

        .miniWing {
          position: absolute;
          top: 18px;
          width: 95px;
          height: 45px;
          background: linear-gradient(135deg, transparent, rgba(212,175,55,0.95));
          filter: drop-shadow(0 0 8px rgba(212,175,55,0.7));
        }

        .miniWing.left {
          left: 25px;
          clip-path: polygon(100% 30%, 0 0, 18% 28%, 0 45%, 22% 55%, 4% 78%, 100% 60%);
        }

        .miniWing.right {
          right: 25px;
          clip-path: polygon(0 30%, 100% 0, 82% 28%, 100% 45%, 78% 55%, 96% 78%, 0 60%);
        }

        .logo {
          color: #d4af37;
          font-size: 34px;
          text-align: center;
          margin-bottom: 5px;
          letter-spacing: 2px;
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
          transition: 0.3s;
          font-size: 16px;
          text-align: left;
          padding-left: 22px;
        }

        .menu button:hover,
        .active {
          background: linear-gradient(135deg, rgba(212,175,55,0.75), rgba(60,40,10,0.85)) !important;
          color: white !important;
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
            radial-gradient(circle at center, rgba(212,175,55,0.16), transparent 38%),
            radial-gradient(circle at right, rgba(212,175,55,0.14), transparent 30%),
            #070707;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          box-shadow: inset 0 0 80px rgba(212,175,55,0.06);
        }

        .hero:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(25deg, transparent 35%, rgba(212,175,55,0.12), transparent 60%),
            repeating-linear-gradient(165deg, transparent 0 35px, rgba(212,175,55,0.06) 36px, transparent 38px);
          opacity: 0.7;
        }

        .angelArt {
          position: absolute;
          width: 900px;
          height: 310px;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.95;
        }

        .halo {
          position: absolute;
          left: 50%;
          top: 28px;
          transform: translateX(-50%);
          width: 90px;
          height: 22px;
          border: 4px solid #f2c766;
          border-radius: 50%;
          box-shadow:
            0 0 22px rgba(242,199,102,0.9),
            inset 0 0 12px rgba(242,199,102,0.6);
        }

        .angelBody {
          position: absolute;
          left: 50%;
          top: 65px;
          transform: translateX(-50%);
          width: 95px;
          height: 135px;
          background:
            radial-gradient(circle at 50% 20%, #f3c76a, #191006 42%, #050505 75%);
          border-radius: 50% 50% 45% 45%;
          filter: drop-shadow(0 0 28px rgba(212,175,55,0.9));
          z-index: 3;
        }

        .wing {
          position: absolute;
          top: 30px;
          width: 430px;
          height: 190px;
          background:
            repeating-linear-gradient(
              160deg,
              rgba(246,200,96,0.95) 0px,
              rgba(246,200,96,0.95) 6px,
              rgba(65,39,9,0.9) 9px,
              transparent 18px
            );
          filter:
            drop-shadow(0 0 20px rgba(212,175,55,0.8))
            drop-shadow(0 0 45px rgba(212,175,55,0.35));
          opacity: 0.95;
        }

        .wingLeft {
          left: 20px;
          clip-path: polygon(100% 35%, 62% 0, 28% 8%, 0 24%, 38% 37%, 2% 52%, 45% 62%, 8% 78%, 55% 82%, 100% 60%);
        }

        .wingRight {
          right: 20px;
          clip-path: polygon(0 35%, 38% 0, 72% 8%, 100% 24%, 62% 37%, 98% 52%, 55% 62%, 92% 78%, 45% 82%, 0 60%);
        }

        .heroText {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-top: 95px;
        }

        .heroText h1 {
          color: #f3d27b;
          font-size: 86px;
          letter-spacing: 8px;
          text-shadow:
            0 0 18px rgba(212,175,55,0.8),
            0 0 45px rgba(212,175,55,0.35);
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

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .card {
          background: #0d0d0d;
          border: 1px solid rgba(212,175,55,0.16);
          border-radius: 22px;
          padding: 25px;
          box-shadow: inset 0 0 35px rgba(212,175,55,0.03);
        }

        .card h3 {
          color: #8f7440;
          margin-bottom: 15px;
          font-size: 13px;
        }

        .card h2 {
          color: white;
          margin-bottom: 10px;
          font-size: 20px;
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

        .scanBox,
        .infoBox {
          background: #0b0b0b;
          border-radius: 24px;
          border: 1px solid rgba(212,175,55,0.16);
          padding: 30px;
        }

        .scanBox h2,
        .infoBox h2 {
          color: #d4af37;
          margin-bottom: 15px;
        }

        .scanBox p {
          color: #aaa;
        }

        .scanTop {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .scanTop strong {
          color: white;
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
          margin-bottom: 10px;
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
          transition: 0.3s;
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

        .goldBtn:hover,
        .darkBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(212,175,55,0.25);
        }

        .infoRow {
          display: flex;
          justify-content: space-between;
          margin-top: 25px;
          color: #d4af37;
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
