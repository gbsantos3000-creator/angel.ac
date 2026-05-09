import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import ScannerDashboard from "../src/components/ScannerDashboard"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [pin, setPin] = useState("")
  const [generated, setGenerated] = useState(false)
  const [roleRequested, setRoleRequested] = useState(false)
  const [pinStatus, setPinStatus] = useState("Not generated")

  const generatePin = async () => {
    const res = await fetch("/api/generate-pin", {
      method: "POST",
    })

    const data = await res.json()

    if (data.success) {
      setPin(data.pin)
      setGenerated(true)
      setPinStatus("Waiting for use")
    }
  }

  const requestRole = async () => {
    await fetch("/api/request-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
      }),
    })

    setRoleRequested(true)
  }

  const downloadScanner = () => {
    window.location.href = "/downloads/angel-scanner-v2.exe"
  }

  useEffect(() => {
    if (!pin) return

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/check-pin?pin=${pin}`)
        const data = await res.json()

        if (data.success) {
          setPinStatus(data.status)
        }
      } catch {}
    }, 3000)

    return () => clearInterval(interval)
  }, [pin])

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

          <button
            onClick={() => {
              window.location.href =
                "https://angel-ac-zocv.vercel.app/api/auth/signin/discord?callbackUrl=https%3A%2F%2Fangel-ac-zocv.vercel.app"
            }}
          >
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
            background: #5865F2;
            color: white;
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
          <button onClick={() => router.push("/scan")}>⌕ Scan</button>
          <button onClick={() => router.push("/logs")}>▤ Logs</button>
          <button onClick={() => router.push("/quarantine")}>🛡 Quarantine</button>
          <button onClick={() => router.push("/settings")}>⚙ Settings</button>
          <button onClick={() => router.push("/about")}>ⓘ About</button>
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
            <h2>Get your Pin</h2>

            <p>Generate a valid download link.</p>

            <button className="goldBtn full" onClick={generatePin}>
              ✨ Generate
            </button>

            <hr />

            <h2>Scanner Details</h2>

            <div className="infoRow">
              <span>PIN</span>
              <strong>{pin || "------"}</strong>
            </div>

            <div className="infoRow">
              <span>Status</span>
              <strong>{generated ? pinStatus : "Not generated"}</strong>
            </div>

            <div className="infoRow">
              <span>Threats</span>
              <strong>{pinStatus === "Used" ? "0" : "-"}</strong>
            </div>

            <div className="infoRow">
              <span>Injector</span>
              <strong>None</strong>
            </div>

            <h3>Detected Files</h3>

            <p className={pinStatus === "Used" ? "cleanText" : "waitingText"}>
              {pinStatus === "Used"
                ? "No malicious files found."
                : generated
                ? "Waiting for scanner result..."
                : "Generate a PIN first."}
            </p>

            <div className="buttons">
              <button
                className="darkBtn"
                onClick={downloadScanner}
                disabled={!generated}
              >
                ⌕ DOWNLOAD SCANNER
              </button>

              <button className="darkBtn" onClick={requestRole}>
                🛡 REQUEST ROLE
              </button>
            </div>

            {roleRequested && (
              <p className="successText">
                Request sent to Discord.
              </p>
            )}
          </div>

          <div className="infoBox">
            <h2>SYSTEM INFORMATION</h2>

            <div className="infoRow">
              <span>USER</span>
              <strong>{session.user?.name || "Discord User"}</strong>
            </div>

            <div className="infoRow">
              <span>PIN STATUS</span>
              <strong>{generated ? pinStatus : "NOT GENERATED"}</strong>
            </div>

            <div className="infoRow">
              <span>OS</span>
              <strong>Windows 11 Pro</strong>
            </div>

            <div className="infoRow">
              <span>VERSION</span>
              <strong>1.0.0</strong>
            </div>

            <div className="infoRow">
              <span>SCANNER</span>
              <strong>angel-scanner-v2.exe</strong>
            </div>
          </div>
        </div>

        <ScannerDashboard />
      </main>
    </div>
  )
}
