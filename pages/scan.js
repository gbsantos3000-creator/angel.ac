import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Scan() {
  const [progress, setProgress] = useState(0);
  const [scanStatus, setScanStatus] =
    useState("Ready to scan");

  const [generatedLink, setGeneratedLink] =
    useState("");

  const [selectedResult, setSelectedResult] =
    useState(null);

  const [pins, setPins] = useState([
    {
      customer: "d3d11dllexec",
      pin: "596374",
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
      link: "",
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
      pin: "613747",
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
      link: "",
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
      link: "",
      details: {
        status: "CHEAT DETECTED",
        threats: 4,
        injector: "redENGINE",
        executor: "Lua Executor",
        files: [
          "d3d11.dll",
          "modmenu.exe",
          "executor.dll",
          "redengine.dll",
        ],
      },
    },

    {
      customer: "d3d11dllexec",
      pin: "999395",
      used: "Used",
      game: "FiveM",
      detection: "Bannable",
      name: "Empty",
      link: "",
      details: {
        status: "CHEAT DETECTED",
        threats: 3,
        injector: "HX Cheats",
        executor: "Silent Injector",
        files: [
          "hx.dll",
          "injector.exe",
          "modmenu.dll",
        ],
      },
    },
  ]);

  function startQuickScan() {
    setProgress(0);
    setScanStatus("Quick scan running...");

    let value = 0;

    const interval = setInterval(() => {
      value += 10;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setScanStatus(
          "Quick scan completed successfully."
        );
      }
    }, 200);
  }

  function startFullScan() {
    setProgress(0);
    setScanStatus("Full scan running...");

    let value = 0;

    const interval = setInterval(() => {
      value += 5;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setScanStatus(
          "Full scan completed successfully."
        );
      }
    }, 300);
  }

  function generatePin() {
    const pin = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const link = `${window.location.origin}/api/download?pin=${pin}`;

    const newPin = {
      customer: "d3d11dllexec",
      pin,
      used: "New",
      game: "FiveM",
      detection: "Clean",
      name: "Generated",
      link,

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
    <DashboardLayout>
      <div className="pageHeader">
        <h1>SCAN CENTER</h1>

        <p>Run quick and full scans.</p>
      </div>

      <div className="scanCard">
        <h2>{scanStatus}</h2>

        <div className="scanBar">
          <div
            className="scanProgress"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="scanPercent">
          {progress}%
        </div>

        <div className="scanButtons">
          <button
            className="goldBtn"
            onClick={startQuickScan}
          >
            Quick Scan
          </button>

          <button
            className="darkBtn"
            onClick={startFullScan}
          >
            Full Scan
          </button>
        </div>
      </div>

      <div className="pinGrid">
        <div className="pinTableWrap">
          <table className="pinTable">
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

                  <td
                    className={
                      item.used === "New"
                        ? "statusClean"
                        : "statusBad"
                    }
                  >
                    {item.used}
                  </td>

                  <td>
                    <button
                      className="viewBtn"
                      onClick={() =>
                        setSelectedResult(item)
                      }
                    >
                      ⊞ View
                    </button>
                  </td>

                  <td>{item.game}</td>

                  <td>
                    <span
                      className={
                        item.detection === "Clean"
                          ? "detectClean"
                          : "detectBad"
                      }
                    >
                      {item.detection}
                    </span>
                  </td>

                  <td>{item.name} ⚙️</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="tableFooter">
            <button className="darkBtn">
              Prev
            </button>

            <span>
              Showing 1 - {pins.length} of{" "}
              {pins.length}
            </span>

            <button className="darkBtn">
              Next
            </button>
          </div>
        </div>

        <div className="sideActions">
          <div className="actionCard">
            <h3>Get your Pin</h3>

            <p>
              Generate a valid download PIN.
            </p>

            <button
              className="goldBtn fullWidth"
              onClick={generatePin}
            >
              ✨ Generate
            </button>
          </div>

          <div className="actionCard">
            <h3>Search Pins</h3>

            <input
              placeholder="Enter PIN or Name"
              className="searchInput"
            />

            <button className="purpleBtn fullWidth">
              Search
            </button>
          </div>
        </div>
      </div>

      {generatedLink && (
        <div className="downloadModal">
          <div className="downloadBox">
            <h2>Valid Download Link</h2>

            <p>
              Copy this link and send it to the
              user.
            </p>

            <input
              value={generatedLink}
              readOnly
            />

            <button
              className="goldBtn fullWidth"
              onClick={() =>
                navigator.clipboard.writeText(
                  generatedLink
                )
              }
            >
              Copy Link
            </button>

            <button
              className="darkBtn fullWidth"
              onClick={() =>
                setGeneratedLink("")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}

      {selectedResult && (
        <div className="detailsModal">
          <div className="detailsBox">
            <div className="detailsHeader">
              <h2>Scanner Result</h2>

              <button
                onClick={() =>
                  setSelectedResult(null)
                }
              >
                ✕
              </button>
            </div>

            <div className="detailsContent">
              <div className="detailRow">
                <span>Status</span>

                <strong>
                  {
                    selectedResult.details
                      .status
                  }
                </strong>
              </div>

              <div className="detailRow">
                <span>Threats</span>

                <strong>
                  {
                    selectedResult.details
                      .threats
                  }
                </strong>
              </div>

              <div className="detailRow">
                <span>Injector</span>

                <strong>
                  {
                    selectedResult.details
                      .injector
                  }
                </strong>
              </div>

              <div className="detailRow">
                <span>Executor</span>

                <strong>
                  {
                    selectedResult.details
                      .executor
                  }
                </strong>
              </div>

              <div className="detectedFiles">
                <h3>Detected Files</h3>

                {selectedResult.details.files
                  .length === 0 ? (
                  <p>No malicious files found.</p>
                ) : (
                  selectedResult.details.files.map(
                    (file, index) => (
                      <div
                        key={index}
                        className="fileItem"
                      >
                        {file}
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
