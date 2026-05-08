import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Scan() {
  const [progress, setProgress] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [status, setStatus] = useState("Ready to scan");
  const [pins, setPins] = useState([
    { customer: "d3d11dllexec", pin: "527577", used: "Used", game: "FiveM", detection: "Bannable", name: "Empty" },
    { customer: "d3d11dllexec", pin: "999395", used: "Used", game: "FiveM", detection: "Bannable", name: "Empty" },
    { customer: "d3d11dllexec", pin: "328613", used: "Used", game: "FiveM", detection: "Bannable", name: "Empty" },
    { customer: "d3d11dllexec", pin: "160361", used: "Used", game: "FiveM", detection: "Bannable", name: "Empty" },
  ]);

  function startScan(type) {
    setScanning(true);
    setProgress(0);
    setStatus(`${type} scan running...`);

    let value = 0;

    const timer = setInterval(() => {
      value += 7;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setScanning(false);
        setStatus("Scan completed. No threats found.");

        const newPin = {
          customer: "d3d11dllexec",
          pin: Math.floor(100000 + Math.random() * 900000).toString(),
          used: "New",
          game: "FiveM",
          detection: "Clean",
          name: "ANGEL Scan",
        };

        setPins((old) => [newPin, ...old]);
      }

      setProgress(value);
    }, 180);
  }

  function generatePin() {
    const newPin = {
      customer: "d3d11dllexec",
      pin: Math.floor(100000 + Math.random() * 900000).toString(),
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
    };

    setPins((old) => [newPin, ...old]);
  }

  return (
    <DashboardLayout active="Scan">
      <div className="napseTop">
        <div className="napseLogo">⚡ ANGEL A.C</div>

        <div className="napseMenu">
          <a href="/dashboard">Dashboard</a>
          <a href="/scan">Scanner</a>
          <a href="/logs">Logs</a>
          <a href="/quarantine">Quarantine</a>
          <a href="/settings">Settings</a>
          <a href="/about">Guide</a>
        </div>
      </div>

      <section className="angelBanner">
        <div>
          <span>SUPPORTED</span>
          <h1>ANGEL A.C SCANNER</h1>
          <p>Advanced detection · secure scan · fast results</p>
        </div>

        <div className="bannerBadge">
          PROTECTION<br />ACTIVE
        </div>
      </section>

      <section className="napseGrid">
        <div className="napseTableBox">
          <div className="tableHeader">
            <h2>Scanner Results</h2>
            <button onClick={() => startScan("Quick")} disabled={scanning}>
              {scanning ? "Scanning..." : "Quick Scan"}
            </button>
          </div>

          <div className="scanProgressBox">
            <strong>{status}</strong>
            <span>{progress}%</span>
            <div className="progress">
              <div style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <table className="napseTable">
            <thead>
              <tr>
                <th>Customer</th>
                <th>PIN</th>
                <th>Used</th>
                <th>Result</th>
                <th>Game</th>
                <th>Detection</th>
                <th>Name</th>
              </tr>
            </thead>

            <tbody>
              {pins.map((item, index) => (
                <tr key={index}>
                  <td>{item.customer}</td>
                  <td>{item.pin}</td>
                  <td className={item.used === "Used" ? "dangerText" : "safeText"}>
                    {item.used}
                  </td>
                  <td>
                    <button className="viewBtn">▣ View</button>
                  </td>
                  <td className="goldText">{item.game}</td>
                  <td>
                    <span className={item.detection === "Bannable" ? "banBadge" : "cleanBadge"}>
                      {item.detection}
                    </span>
                  </td>
                  <td>{item.name} ⚙</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="tableFooter">
            <button>Prev</button>
            <span>Showing 1 - {pins.length} of {pins.length}</span>
            <button>Next</button>
          </div>
        </div>

        <aside className="napseSide">
          <div className="sideCard">
            <div className="sideIcon">✦</div>
            <h2>Get your Pin</h2>
            <p>The limit is <b>(4)</b> pins available to generate more.</p>

            <div className="pinBox">
              Generated PIN will appear here
            </div>

            <button className="goldBtn fullWidth" onClick={generatePin}>
              ✨ Generate
            </button>
          </div>

          <div className="sideCard">
            <div className="sideIcon">⌕</div>
            <h2>Search Pins</h2>
            <p>Find a specific PIN in your list quickly.</p>

            <input className="searchInput" placeholder="Enter Pin or Name" />

            <button className="goldBtn fullWidth">
              ⌕ Search
            </button>
          </div>

          <div className="sideCard">
            <div className="sideIcon">☁</div>
            <h2>Cloud Status</h2>
            <p>Connected to ANGEL A.C cloud.</p>
            <span className="safeText">Online</span>
          </div>
        </aside>
      </section>
    </DashboardLayout>
  );
}
