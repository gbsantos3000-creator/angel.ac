import DashboardLayout from "@/components/DashboardLayout";

export default function Quarantine() {
  return (
    <DashboardLayout active="Quarantine">
      <div className="pageHeader">
        <h1>QUARANTINE</h1>
        <p>Suspicious files isolated by ANGEL A.C.</p>
      </div>

      <div className="panel">
        <h2>No quarantined files</h2>
        <p>Your system is currently clean.</p>
      </div>
    </DashboardLayout>
  );
}
