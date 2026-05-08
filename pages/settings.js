import { DashboardLayout } from "../components/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout active="Settings">
      <div className="pageHeader">
        <h1>SETTINGS</h1>

        <p>
          Configure protection options.
        </p>
      </div>

      <div className="panel">
        <div className="settingRow">
          <span>
            Real-time protection
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="settingRow">
          <span>
            Auto quarantine
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
