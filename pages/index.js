# pages/index.js

```jsx
import { useSession } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

  // =========================
  // LOGIN
  // =========================
  if (!session) {
    return (
      <div className="loginPage">

        <div className="goldGlow"></div>

        <div className="loginBox">

          <h1>ANGEL A.C</h1>

          <p>
            Advanced Anti-Cheat Platform
          </p>

          <a href="/api/auth/discord">
            <button>
              Login with Discord
            </button>
          </a>

        </div>

        <style jsx>{`

          .loginPage{
            width:100%;
            height:100vh;
            background:#050505;
            display:flex;
            justify-content:center;
            align-items:center;
            overflow:hidden;
            position:relative;
            font-family:Arial;
          }

          .goldGlow{
            position:absolute;
            width:700px;
            height:700px;
            background:
              radial-gradient(circle,
              rgba(212,175,55,0.18),
              transparent);

            filter:blur(20px);
          }

          .loginBox{
            position:relative;
            z-index:2;
            width:420px;
            padding:50px;
            border-radius:24px;
            background:rgba(15,15,15,0.95);
            border:1px solid rgba(212,175,55,0.2);
            box-shadow:
              0 0 40px rgba(212,175,55,0.08);
            text-align:center;
          }

          .loginBox h1{
            color:#D4AF37;
            font-size:42px;
            margin-bottom:10px;
            letter-spacing:4px;
          }

          .loginBox p{
            color:#999;
            margin-bottom:35px;
            font-size:15px;
          }

          .loginBox button{
            width:100%;
            height:55px;
            border:none;
            border-radius:14px;
            background:#D4AF37;
            color:#000;
            font-size:17px;
            font-weight:bold;
            cursor:pointer;
            transition:0.3s;
          }

          .loginBox button:hover{
            transform:translateY(-2px);
            box-shadow:
              0 0 25px rgba(212,175,55,0.45);
          }

        `}</style>

      </div>
    )
  }

  // =========================
  // DASHBOARD
  // =========================
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div>
          <h1 className="logo">ANGEL A.C</h1>
          <p className="scanner">SCANNER</p>
        </div>

        <div className="menu">
          <button className="active">Dashboard</button>
          <button>Scan</button>
          <button>Logs</button>
          <button>Quarantine</button>
          <button>Settings</button>
          <button>About</button>
        </div>

        <div className="protectionBox">
          <h3>PROTECTION</h3>
          <span>ACTIVE</span>
          <p>Real-time protection enabled</p>
        </div>

      </aside>

      <main className="mainContent">

        <div className="hero">
          <h1>ANGEL A.C</h1>
          <p>ADVANCED ANTI-CHEAT SCANNER</p>
        </div>

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

            <div className="progressBar">
              <div className="progress"></div>
            </div>

            <div className="completed">
              <h1>SCAN COMPLETED</h1>
              <p>No threats detected. Your system is clean.</p>
            </div>

            <div className="buttons">
              <button className="goldBtn">NEW SCAN</button>
              <button className="darkBtn">FULL SCAN</button>
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
              <strong>Intel Core i5</strong>
            </div>

            <div className="infoRow">
              <span>GPU</span>
              <strong>NVIDIA GTX</strong>
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

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        .dashboard{
          width:100%;
          min-height:100vh;
          background:#050505;
          display:flex;
          color:white;
        }

        .sidebar{
          width:280px;
          background:#080808;
          border-right:1px solid rgba(212,175,55,0.15);
          padding:35px 25px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .logo{
          color:#D4AF37;
          font-size:42px;
          margin-bottom:5px;
        }

        .scanner{
          color:#777;
          letter-spacing:5px;
          font-size:12px;
        }

        .menu{
          display:flex;
          flex-direction:column;
          gap:15px;
          margin-top:50px;
        }

        .menu button{
          height:55px;
          border-radius:14px;
          border:1px solid rgba(212,175,55,0.1);
          background:#111;
          color:white;
          cursor:pointer;
          transition:0.3s;
          font-size:16px;
        }

        .menu button:hover,
        .active{
          background:#D4AF37 !important;
          color:black !important;
          box-shadow:0 0 25px rgba(212,175,55,0.4);
        }

        .protectionBox{
          padding:20px;
          border-radius:18px;
          background:#111;
          border:1px solid rgba(212,175,55,0.15);
        }

        .protectionBox h3{
          color:#777;
          margin-bottom:10px;
        }

        .protectionBox span{
          color:#D4AF37;
          font-size:24px;
          font-weight:bold;
        }

        .protectionBox p{
          color:#888;
          margin-top:10px;
        }

        .mainContent{
          flex:1;
          padding:40px;
        }

        .hero{
          width:100%;
          height:260px;
          border-radius:30px;
          border:1px solid rgba(212,175,55,0.12);
          background:
            radial-gradient(circle at center,
            rgba(212,175,55,0.12),
            #090909 70%);

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          margin-bottom:35px;
        }

        .hero h1{
          color:#D4AF37;
          font-size:90px;
          letter-spacing:6px;
        }

        .hero p{
          color:#ddd;
          letter-spacing:6px;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
          margin-bottom:30px;
        }

        .card{
          background:#0d0d0d;
          border:1px solid rgba(212,175,55,0.12);
          border-radius:22px;
          padding:25px;
        }

        .card h3{
          color:#777;
          margin-bottom:15px;
        }

        .card h2{
          color:#D4AF37;
          margin-bottom:10px;
        }

        .card p{
          color:#888;
        }

        .bottomGrid{
          display:grid;
          grid-template-columns:2fr 1fr;
          gap:25px;
        }

        .scanBox,
        .infoBox{
          background:#0b0b0b;
          border-radius:24px;
          border:1px solid rgba(212,175,55,0.12);
          padding:30px;
        }

        .scanBox h2,
        .infoBox h2{
          color:#D4AF37;
          margin-bottom:15px;
        }

        .scanBox p{
          color:#888;
        }

        .progressBar{
          width:100%;
          height:12px;
          border-radius:20px;
          background:#111;
          margin:30px 0;
          overflow:hidden;
        }

        .progress{
          width:100%;
          height:100%;
          background:#D4AF37;
          box-shadow:0 0 20px rgba(212,175,55,0.5);
        }

        .completed h1{
          color:#D4AF37;
          margin-bottom:10px;
        }

        .buttons{
          display:flex;
          gap:20px;
          margin-top:30px;
        }

        .goldBtn,
        .darkBtn{
          flex:1;
          height:60px;
          border:none;
          border-radius:16px;
          font-size:17px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .goldBtn{
          background:#D4AF37;
          color:black;
        }

        .darkBtn{
          background:#111;
          color:white;
          border:1px solid rgba(212,175,55,0.12);
        }

        .goldBtn:hover,
        .darkBtn:hover{
          transform:translateY(-2px);
        }

        .infoRow{
          display:flex;
          justify-content:space-between;
          margin-top:25px;
          color:#aaa;
        }

        .infoRow strong{
          color:white;
        }

      `}</style>

    </div>
  )
}
```
