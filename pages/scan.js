import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Scan() {
  const [progress, setProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState("Ready to scan");
  const [generatedLink, setGeneratedLink] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

  const [pins, setPins] = useState([
    {
      customer: "d3d11dllexec",
      pin: "596374",
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
      details: {
        status: "Clean",
        threats: 0,
        injector: "None",
        executor: "None",
        files: [],
      },
    },
    {
      customer: "d3d11dllexec",
      pin: "527577",
      used: "Used",
      game: "FiveM",
      detection: "Bannable",
      name: "Empty",
      details: {
        status: "CHEAT DETECTED",
        threats: 4,
        injector: "redENGINE",
        executor: "Lua Executor",
        files: ["d3d11.dll", "modmenu.exe", "executor.dll"],
      },
    },
  ]);

  function startScan(type) {
    setProgress(0);
    setScanStatus(`${type} scan running...`);

    let value = 0;

    const interval = setInterval(() => {
      value += type === "Full" ? 5 : 10;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setScanStatus(`${type} scan completed successfully.`);
      }

      setProgress(value);
    }, 200);
  }

  function generatePin() {
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    const link = `${window.location.origin}/api/download?pin=${pin}`;

    const newPin = {
      customer: "d3d11dllexec",
      pin,
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
      details: {
        status: "Clean",
        threats: 0,
        injector: "None",
        executor: "None",
        files: [],
      },
    };

    setPins((old) => [newPin, ...old]);
    setGeneratedLink(link);
  }

  return (
    <DashboardLayout active="Scan">
      <div className="scanPage">
        <div className="scanTop">
          <div>
            <h1>SCAN CENTER</h1>
            <p>Run quick and full scans.</p>
          </div>

          <div className="scanButtons">
            <button type="button" className="goldBtn" onClick={() => startScan("Quick")}>
              Quick Scan
            </button>

            <button type="button" className="darkBtn" onClick={() => startScan("Full")}>
              Full Scan
            </button>
          </div>
        </div>

        <div className="progressBox">
          <div className="progressText">
            <span>{scanStatus}</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="scannerGrid">
          <div className="tableBox">
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

                    <td className={item.used === "New" ? "safeText" : "dangerText"}>
                      {item.used}
                    </td>

                    <td>
                      <button type="button" className="viewBtn" onClick={() => setSelectedResult(item)}>
                        ▣ View
                      </button>
                    </td>

                    <td className="goldText">{item.game}</td>

                    <td>
                      <span className={item.detection === "Clean" ? "cleanBadge" : "banBadge"}>
                        {item.detection}
                      </span>
                    </td>

                    <td>{item.name} ⚙</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detailsPanel">
            <h2>Get your Pin</h2>
            <p>Generate a valid download link.</p>

            <button type="button" className="goldBtn fullWidth" onClick={generatePin}>
              ✨ Generate
            </button>

            <hr />

            {!selectedResult ? (
              <div className="emptyDetails">Click View to see scanner details</div>
            ) : (
              <>
                <h2>Scanner Details</h2>

                <div className="detailRow">
                  <span>PIN</span>
                  <strong>{selectedResult.pin}</strong>
                </div>

                <div className="detailRow">
                  <span>Status</span>
                  <strong>{selectedResult.details.status}</strong>
                </div>

                <div className="detailRow">
                  <span>Threats</span>
                  <strong>{selectedResult.details.threats}</strong>
                </div>

                <div className="detailRow">
                  <span>Injector</span>
                  <strong>{selectedResult.details.injector}</strong>
                </div>

                <div className="filesBox">
                  <h3>Detected Files</h3>

                  {selectedResult.details.files.length === 0 ? (
                    <p className="safeText">No malicious files found.</p>
                  ) : (
                    selectedResult.details.files.map((file, i) => (
                      <div className="fileItem" key={i}>
                        {file}
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {generatedLink && (
        <div className="downloadModal">
          <div className="downloadBox">
            <h2>Valid Download Link</h2>
            <p>Copy this link and send it to the user.</p>

            <input value={generatedLink} readOnly />

            <button
              type="button"
              className="goldBtn fullWidth"
              onClick={() => navigator.clipboard.writeText(generatedLink)}
            >
              Copy Link
            </button>

            <button type="button" className="darkBtn fullWidth" onClick={() => setGeneratedLink("")}>
              Close
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
