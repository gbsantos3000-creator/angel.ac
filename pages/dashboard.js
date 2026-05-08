import { useSession } from "next-auth/react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <DashboardLayout active="Dashboard">
      <section className="hero">
        <div className="heroHalo"></div>

        <h1>ANGEL A.C</h1>

        <h3>
          ADVANCED ANTI-CHEAT SCANNER
        </h3>

        <p>
          POWERFUL · FAST · SECURE
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <span>STATUS</span>
          <h2>PROTECTED</h2>
          <p>Your system is secure</p>
        </div>

        <div className="card">
          <span>LAST SCAN</span>
          <h2>2 MIN AGO</h2>
          <p>No threats found</p>
        </div>

        <div className="card">
          <span>THREATS BLOCKED</span>
          <h2>0</h2>
          <p>Total blocked</p>
        </div>

        <div className="card">
          <span>SYSTEM UPTIME</span>
          <h2>01:24:57</h2>
          <p>Scanning in real-time</p>
        </div>
      </section>

      <section className="grid2">
        <div className="panel">
          <h2>QUICK SCAN</h2>

          <p>
            Scans critical areas of your
            system for threats.
          </p>

          <div className="progressText">
            100%
          </div>

          <div className="progress">
            <div
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className="scanDone">
            <div className="check">
              ✓
            </div>

            <div>
              <h2>
                SCAN COMPLETED
              </h2>

              <p>
                No threats detected.
                Your system is clean.
              </p>
            </div>
          </div>

          <div className="buttonRow">
            <a
              href="/scan"
              className="goldBtn"
            >
              ⌕ NEW SCAN
            </a>

            <a
              href="/scan"
              className="darkBtn"
            >
              ♡ FULL SCAN
            </a>
          </div>
        </div>

        <div className="panel">
          <h2>
            SYSTEM INFORMATION
          </h2>

          <Info
            label="USER"
            value={session?.user?.name}
          />

          <Info
            label="EMAIL"
            value={session?.user?.email}
          />

          <Info
            label="PLAN"
            value="OWNER"
          />

          <Info
            label="VERSION"
            value="1.0.0"
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

function Info({ label, value }) {
  return (
    <div className="infoRow">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
