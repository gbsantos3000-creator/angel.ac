import { signOut, useSession } from "next-auth/react";

export function DashboardLayout({ children, active = "Dashboard" }) {
  const { data: session } = useSession();

  function go(path) {
    window.location.href = path;
  }

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand" onClick={() => go("/dashboard")}>
          <div className="halo"></div>
          <h1>ANGEL A.C</h1>
          <p>SCANNER</p>
        </div>

        <nav className="nav">
          <button className={active === "Dashboard" ? "navItem active" : "navItem"} onClick={() => go("/dashboard")}>▦ Dashboard</button>
          <button className={active === "Scan" ? "navItem active" : "navItem"} onClick={() => go("/scan")}>⌕ Scan</button>
          <button className={active === "Logs" ? "navItem active" : "navItem"} onClick={() => go("/logs")}>☰ Logs</button>
          <button className={active === "Quarantine" ? "navItem active" : "navItem"} onClick={() => go("/quarantine")}>♡ Quarantine</button>
          <button className={active === "Settings" ? "navItem active" : "navItem"} onClick={() => go("/settings")}>⚙ Settings</button>
          <button className={active === "About" ? "navItem active" : "navItem"} onClick={() => go("/about")}>ⓘ About</button>
        </nav>

        <div className="profileBox">
          <span>PROTECTION</span>
          <strong>ACTIVE</strong>
          <small>{session?.user?.name || "Online"}</small>
        </div>

        <button className="darkBtn" onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
