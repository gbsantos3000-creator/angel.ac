import { useEffect, useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem("angel_logs") || "[]"));
  }, []);

  return (
    <DashboardLayout active="Logs">
      <div className="pageHeader">
        <h1>SCAN LOGS</h1>
        <p>History of all scans.</p>
      </div>

      <div className="panel">
        {logs.length === 0 ? (
          <p>No logs found.</p>
        ) : (
          logs.map((log, i) => (
            <div className="logItem" key={i}>
              <strong>{log.type} Scan</strong>
              <span>{log.result}</span>
              <small>{log.date}</small>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
