import { useSession, signIn } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

  // =========================
  // TELA LOGIN
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

          <button
            onClick={() => signIn("discord")}
          >
            Login with Discord
          </button>

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

            background:
              rgba(10,10,10,0.95);

            border:
              1px solid rgba(212,175,55,0.15);

            border-radius:30px;

            padding:60px;

            text-align:center;

            backdrop-filter:blur(20px);

            box-shadow:
              0 0 40px rgba(212,175,55,0.08);
          }

          h1{
            color:#d4af37;
            font-size:56px;
            margin:0;
            font-weight:900;
            letter-spacing:3px;
          }

          p{
            color:#777;
            margin-top:15px;
            margin-bottom:40px;
            font-size:16px;
          }

          button{
            width:100%;
            padding:18px;

            background:
              linear-gradient(
                90deg,
                #8b6b15,
                #d4af37
              );

            border:none;

            border-radius:16px;

            color:black;

            font-size:18px;
            font-weight:800;

            cursor:pointer;

            transition:0.3s;
          }

          button:hover{
            transform:scale(1.03);

            box-shadow:
              0 0 30px rgba(212,175,55,0.2);
          }

        `}</style>

      </div>
    )
  }

  // =========================
  // DASHBOARD
  // =========================
  return (
    <div className="container">

      <div className="sidebar">

        <div>

          <h1 className="logo">
            ANGEL A.C
          </h1>

          <p className="sub">
            SECURITY
          </p>

          <div className="menu">

            <button className="active">
              Dashboard
            </button>

            <button>
              Scan
            </button>

            <button>
              Logs
            </button>

            <button>
              Quarantine
            </button>

            <button>
              Settings
            </button>

          </div>

        </div>

        <div className="profile">

          <img
            src={session.user.image}
          />

          <div>

            <h3>
              {session.user.name}
            </h3>

            <p>
              Lifetime
            </p>

            <span>
              Never expires
            </span>

          </div>

        </div>

      </div>

      {/* MAIN */}
      <div className="main">

        <div className="top">

          <div>

            <h1>
              WELCOME BACK
            </h1>

            <h2>
              {session.user.name}
            </h2>

          </div>

          <div className="userBox">

            <img
              src={session.user.image}
            />

            <div>

              <p>
                Logged with Discord
              </p>

              <span>
                @{session.user.name}
              </span>

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div className="cards">

          <div className="card">
            <h3>Scanner</h3>
            <p>Online</p>
          </div>

          <div className="card">
            <h3>Protection</h3>
            <p>Enabled</p>
          </div>

          <div className="card">
            <h3>Plan</h3>
            <p>Lifetime</p>
          </div>

          <div className="card">
            <h3>Status</h3>
            <p>Secure</p>
          </div>

        </div>

        {/* SCANNER */}
        <div className="scanner">

          <h1>
            Advanced Anti-Cheat Scanner
          </h1>

          <p>
            Real-time protection enabled
          </p>

          <div className="bar">
            <div className="progress"></div>
          </div>

          <button>
            DOWNLOAD SCANNER
          </button>

        </div>

      </div>

      <style jsx>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        .container{
          width:100%;
          min-height:100vh;
          display:flex;
          background:#050505;
          color:white;
        }

        /* SIDEBAR */

        .sidebar{
          width:270px;
          background:#090909;
          border-right:
            1px solid rgba(212,175,55,0.08);

          padding:30px;

          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .logo{
          color:#d4af37;
          font-size:42px;
          font-weight:900;
        }

        .sub{
          color:#666;
          margin-top:8px;
          letter-spacing:4px;
        }

        .menu{
          margin-top:50px;

          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .menu button{
          background:transparent;
          border:none;
          color:#888;

          text-align:left;

          padding:16px;

          border-radius:14px;

          cursor:pointer;

          transition:0.3s;
        }

        .menu button:hover,
        .active{
          background:
            rgba(212,175,55,0.08);

          color:#d4af37;
        }

        /* PROFILE */

        .profile{
          background:#0b0b0b;

          border:
            1px solid rgba(212,175,55,0.1);

          border-radius:20px;

          padding:18px;

          display:flex;
          align-items:center;
          gap:15px;
        }

        .profile img{
          width:60px;
          height:60px;
          border-radius:50%;
          border:2px solid #d4af37;
        }

        .profile p{
          color:#d4af37;
          margin-top:5px;
        }

        .profile span{
          color:#666;
          font-size:13px;
        }

        /* MAIN */

        .main{
          flex:1;
          padding:40px;
        }

        .top{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .top h1{
          color:#666;
          font-size:18px;
        }

        .top h2{
          font-size:42px;
          margin-top:10px;
        }

        .userBox{
          display:flex;
          align-items:center;
          gap:15px;

          background:#0b0b0b;

          border:
            1px solid rgba(212,175,55,0.1);

          padding:14px 18px;

          border-radius:18px;
        }

        .userBox img{
          width:55px;
          height:55px;
          border-radius:50%;
          border:2px solid #d4af37;
        }

        .userBox p{
          color:#777;
          font-size:13px;
        }

        .userBox span{
          font-size:18px;
          font-weight:700;
        }

        /* CARDS */

        .cards{
          display:grid;
          grid-template-columns:
            repeat(4,1fr);

          gap:20px;

          margin-top:40px;
        }

        .card{
          background:#0a0a0a;

          border:
            1px solid rgba(212,175,55,0.08);

          border-radius:20px;

          padding:30px;
        }

        .card h3{
          color:#777;
        }

        .card p{
          margin-top:15px;

          font-size:32px;

          color:#d4af37;

          font-weight:700;
        }

        /* SCANNER */

        .scanner{
          margin-top:35px;

          background:#090909;

          border:
            1px solid rgba(212,175,55,0.08);

          border-radius:30px;

          padding:40px;
        }

        .scanner h1{
          font-size:42px;
          color:#d4af37;
        }

        .scanner p{
          color:#777;
          margin-top:12px;
        }

        .bar{
          width:100%;
          height:20px;

          background:#111;

          border-radius:30px;

          margin-top:35px;

          overflow:hidden;
        }

        .progress{
          width:70%;
          height:100%;

          background:
            linear-gradient(
              90deg,
              #8b6b15,
              #d4af37
            );

          animation:
            progress 3s infinite alternate;
        }

        @keyframes progress{
          from{
            width:15%;
          }

          to{
            width:100%;
          }
        }

        .scanner button{
          margin-top:35px;

          background:
            linear-gradient(
              90deg,
              #8b6b15,
              #d4af37
            );

          border:none;

          padding:18px 35px;

          border-radius:14px;

          color:black;

          font-size:18px;

          font-weight:800;

          cursor:pointer;
        }

      `}</style>

    </div>
  )
}
