import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Scan() {
  const [progress, setProgress] =
    useState(0);

  const [status, setStatus] =
    useState("Ready to scan");

  const [scanning, setScanning] =
    useState(false);

  function startScan(type) {
    setScanning(true);
    setProgress(0);

    setStatus(
      `${type} scan running...`
    );

    let value = 0;

    const interval = setInterval(() => {
      value += 5;

      if (value >= 100) {
        value = 100;

        clearInterval(interval);

        setScanning(false);

        setStatus(
          "Scan completed successfully."
        );
      }

      setProgress(value);
    }, 200);
  }

  return (
    <DashboardLayout active="Scan">
      <div className="pageHeader">
        <h1>SCAN CENTER</h1>

        <p>
          Run quick and full scans.
        </p>
      </div>

      <div className="panel">
        <h2>{status}</h2>

        <div className="progressText">
          {progress}%
        </div>

        <div className="progress">
          <div
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="buttonRow">
          <button
            className="goldBtn"
            disabled={scanning}
            onClick={() =>
              startScan("Quick")
            }
          >
            Quick Scan
          </button>

          <button
            className="darkBtn"
            disabled={scanning}
            onClick={() =>
              startScan("Full")
            }
          >
            Full Scan
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
