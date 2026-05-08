import { DashboardLayout } from "../components/DashboardLayout";
export default function Settings() {
  return (
    <DashboardLayout active="Settings">
      <div className="pageHeader">
        <h1>SETTINGS</h1>
        <p>Customize scanner behavior.</p>
      </div>

      <div className="panel">
        <label className="settingRow">
          <span>Real-time protection</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settingRow">
          <span>Auto quarantine</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="settingRow">
          <span>Discord notifications</span>
          <input type="checkbox" />
        </label>
      </div>
    </DashboardLayout>
  );
}
