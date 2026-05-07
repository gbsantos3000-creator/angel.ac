// ===============================
// pages/index.js
// ===============================

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="container">

      {/* FUNDO PREMIUM */}
      <div className="backgroundGlow"></div>

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>
          <h1 className="logo">
            ANGEL A.C
          </h1>

          <p className="logoSub">
            SCANNER
          </p>
        </div>

        <div className="menu">

          <button className="menuItem active">
            Dashboard
          </button>

          <button className="menuItem">
            Scan
          </button>

          <button className="menuItem">
            Logs
          </button>

          <button className="menuItem">
            Quarantine
          </button>

          <button className="menuItem">
            Settings
          </button>

        </div>

        {session && (
          <div className="userCard">

            <img
              src={session.user.image}
              className="avatar"
            />

            <div>
              <h3>{session.user.name}</h3>

              <p>
                {session.user.plan || "Lifetime"}
              </p>

              <span>
                {session.user.expire || "Never expires"}
              </span>
            </div>

          </div>
        )}

      </div>

      {/* CONTEÚDO */}
      <div className="content">

        {/* TOPO */}
        <div className="topBar">

          <div>
            <h1 className="mainTitle">
              ANGEL A.C
            </h1>

            <p className="welcome">
              WELCOME BACK
            </p>

            <h2 className="username">
              {session?.user?.name || "Operator"}
            </h2>

            <div className="license">
              {session?.user?.plan || "Lifetime License"}
            </div>
          </div>

          {/* PERFIL */}
          {session && (
            <div className="profileBox">

              <img
                src={session.user.image}
                className="profilePic"
              />

              <div>
                <p className="logged">
                  Logged with Discord
                </p>

                <span className="discordName">
                  @{session.user.name}
                </span>
              </div>

            </div>
          )}

        </div>

        {/* LOGIN */}
        {!session && (
          <div className="loginBox">

            <button
              className="discordBtn"
              onClick={() => signIn("discord")}
            >
              Login with Discord
            </button>

          </div>
        )}

        {/* DASHBOARD */}
        {session && (
          <>

            <div className="cards">

              <div className="card">
                <h3>Status</h3>
                <p>Protected</p>
              </div>

              <div className="card">
                <h3>Threats Blocked</h3>
                <p>0</p>
              </div>

              <div className="card">
                <h3>Plan</h3>
                <p>{session.user.plan}</p>
              </div>

              <div className="card">
                <h3>Expires</h3>
                <p>{session.user.expire}</p>
              </div>

            </div>

            {/* SCANNER */}
            <div className="scannerBox">

              <h2>
                Advanced Anti-Cheat Scanner
              </h2>

              <p>
                Real-time protection enabled
              </p>

              <div className="scanBar">
                <div className="scanProgress"></div>
              </div>

              <button className="scanButton">
                START SCAN
              </button>

            </div>

          </>
        )}

      </div>

      {/* CSS */}
      <style jsx>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        body{
          background:black;
        }

        .container{
          width:100%;
          min-height:100vh;
          display:flex;
          background:#050505;
          color:white;
          overflow:hidden;
        }

        .backgroundGlow{
          position:fixed;
          width:900px;
          height:900px;
          background:radial-gradient(circle, rgba(212,175,55,0.12), transparent);
          top:-300px;
          right:-300px;
          z-index:0;
        }

        .sidebar{
          width:260px;
          background:#090909;
          border-right:1px solid rgba(212,175,55,0.1);
          padding:30px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          z-index:2;
        }

        .logo{
          color:#d4af37;
          font-size:42px;
          font-weight:900;
        }

        .logoSub{
          color:#777;
          letter-spacing:5px;
          margin-top:10px;
        }

        .menu{
          display:flex;
          flex-direction:column;
          gap:14px;
          margin-top:50px;
        }

        .menuItem{
          background:transparent;
          border:none;
          color:#999;
          text-align:left;
          padding:16px;
          border-radius:14px;
          cursor:pointer;
          font-size:16px;
          transition:0.3s;
        }

        .menuItem:hover{
          background:rgba(212,175,55,0.08);
          color:#d4af37;
        }

        .active{
          background:rgba(212,175,55,0.1);
          color:#d4af37;
          border:1px solid rgba(212,175,55,0.2);
        }

        .content{
          flex:1;
          padding:40px;
          position:relative;
          z-index:2;
        }

        .topBar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:40px;
        }

        .mainTitle{
          font-size:60px;
          color:#d4af37;
          font-weight:900;
        }

        .welcome{
          color:#777;
          margin-top:10px;
          letter-spacing:3px;
        }

        .username{
          font-size:34px;
          margin-top:8px;
        }

        .license{
          margin-top:15px;
          display:inline-block;
          padding:10px 18px;
          border:1px solid #d4af37;
          border-radius:12px;
          color:#d4af37;
          background:rgba(212,175,55,0.08);
        }

        .profileBox{
          display:flex;
          align-items:center;
          gap:15px;
          background:#0c0c0c;
          border:1px solid rgba(212,175,55,0.2);
          padding:14px 18px;
          border-radius:18px;
        }

        .profilePic{
          width:60px;
          height:60px;
          border-radius:50%;
          border:2px solid #d4af37;
        }

        .logged{
          color:#777;
          font-size:13px;
        }

        .discordName{
          font-size:18px;
          font-weight:700;
        }

        .loginBox{
          width:100%;
          height:60vh;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .discordBtn{
          background:#d4af37;
          color:black;
          border:none;
          padding:18px 40px;
          border-radius:14px;
          font-size:18px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .discordBtn:hover{
          transform:scale(1.05);
          box-shadow:0 0 30px rgba(212,175,55,0.3);
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
          margin-bottom:30px;
        }

        .card{
          background:#0a0a0a;
          border:1px solid rgba(212,175,55,0.12);
          border-radius:20px;
          padding:30px;
        }

        .card h3{
          color:#777;
          margin-bottom:15px;
        }

        .card p{
          font-size:30px;
          color:#d4af37;
          font-weight:700;
        }

        .scannerBox{
          background:#090909;
          border:1px solid rgba(212,175,55,0.12);
          border-radius:24px;
          padding:40px;
        }

        .scannerBox h2{
          font-size:38px;
          color:#d4af37;
        }

        .scannerBox p{
          margin-top:10px;
          color:#777;
        }

        .scanBar{
          width:100%;
          height:18px;
          background:#111;
          border-radius:20px;
          margin-top:30px;
          overflow:hidden;
        }

        .scanProgress{
          width:75%;
          height:100%;
          background:linear-gradient(90deg,#8b6b15,#d4af37);
          border-radius:20px;
          animation:scan 3s infinite alternate;
        }

        @keyframes scan{
          from{
            width:20%;
          }
          to{
            width:100%;
          }
        }

        .scanButton{
          margin-top:35px;
          background:#d4af37;
          color:black;
          border:none;
          padding:18px 40px;
          border-radius:14px;
          font-size:18px;
          font-weight:700;
          cursor:pointer;
        }

        .userCard{
          background:#0a0a0a;
          border:1px solid rgba(212,175,55,0.15);
          padding:20px;
          border-radius:20px;
          display:flex;
          align-items:center;
          gap:15px;
        }

        .avatar{
          width:60px;
          height:60px;
          border-radius:50%;
          border:2px solid #d4af37;
        }

        .userCard h3{
          color:white;
        }

        .userCard p{
          color:#d4af37;
          margin-top:4px;
        }

        .userCard span{
          color:#777;
          font-size:13px;
        }

      `}</style>

    </div>
  )
}
