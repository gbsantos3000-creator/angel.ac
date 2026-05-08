import { DashboardLayout } from "../components/DashboardLayout";

export default function Logs() {
  return (
    <DashboardLayout active="Logs">
      <div className="pageHeader">
        <h1>SCAN LOGS</h1>

        <p>
          View previous scanner activity.
        </p>
      </div>

      <div className="panel">
        <div className="logItem">
          <strong>
            Quick scan completed
          </strong>

          <span>
            No threats found
          </span>
        </div>

        <div className="logItem">
          <strong>
            Full scan completed
          </strong>

          <span>
            System clean
          </span>
        </div>
      </div>
    </DashboardLayout>
  );
}
