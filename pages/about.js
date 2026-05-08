import { DashboardLayout } from "../components/DashboardLayout";
export default function About() {
  return (
    <DashboardLayout active="About">
      <div className="pageHeader">
        <h1>ABOUT ANGEL A.C</h1>
        <p>Advanced Anti-Cheat Scanner dashboard.</p>
      </div>

      <div className="panel">
        <h2>ANGEL A.C Scanner</h2>
        <p>Version: 1.0.0</p>
        <p>Status: Online</p>
        <p>Mode: Web Dashboard</p>
      </div>
    </DashboardLayout>
  );
}
