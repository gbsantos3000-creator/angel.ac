import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Scan() {
  const [progress, setProgress] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("Ready to scan");

  function startScan(type) {
    setProgress(0);
    setScanning(true);
    setResult(`${type} scan running...`);

    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 12) + 5;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setScanning(false);
        setResult("Scan completed. No threats detected.");

        const logs = JSON.parse(localStorage.getItem("angel_logs") || "[]");
        logs.unshift({
          type,
          result: "Clean",
          date: new Date().toLocaleString(),
        });
        localStorage.setItem("angel_logs", JSON.stringify(logs));
      }

      setProgress(value);
    }, 400);
  }

  return (
    <DashboardLayout active="Scan">
      <div className="pageHeader">
        <h1>SCAN CENTER</h1>
        <p>Run quick, full, or custom security scans.</p>
      </div>

      <div className="panel">
        <h2>{result}</h2>

        <div className="progressText">{progress}%</div>
        <div className="progress">
          <div style={{ width: `${progress}%` }}></div>
        </div>

        <div className="buttonRow">
          <button disabled={scanning} onClick={() => startScan("Quick")} className="goldBtn">
            Quick Scan
          </button>
          <button disabled={scanning} onClick={() => startScan("Full")} className="darkBtn">
            Full Scan
          </button>
          <button disabled={scanning} onClick={() => startScan("Custom")} className="darkBtn">
            Custom Scan
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
