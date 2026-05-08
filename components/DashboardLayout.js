import { signOut, useSession } from "next-auth/react";

export function DashboardLayout({ children, active = "Dashboard" }) {
  const { data: session } = useSession();

  return (
    <div className="appShell">
      <aside className="sidebar">
        <a className="brand" href="/dashboard">
          <div className="halo"></div>
          <h1>ANGEL A.C</h1>
          <p>SCANNER</p>
        </a>

        <nav className="nav">
          <a href="/dashboard" className={active === "Dashboard" ? "navItem active" : "navItem"}>
            ▦ Dashboard
          </a>

          <a href="/scan" className={active === "Scan" ? "navItem active" : "navItem"}>
            ⌕ Scan
          </a>

          <a href="/logs" className={active === "Logs" ? "navItem active" : "navItem"}>
            ☰ Logs
          </a>

          <a href="/quarantine" className={active === "Quarantine" ? "navItem active" : "navItem"}>
            ♡ Quarantine
          </a>

          <a href="/settings" className={active === "Settings" ? "navItem active" : "navItem"}>
            ⚙ Settings
          </a>

          <a href="/about" className={active === "About" ? "navItem active" : "navItem"}>
            ⓘ About
          </a>
        </nav>

        <div className="profileBox">
          <span>PROTECTION</span>
          <strong>ACTIVE</strong>
          <small>{session?.user?.name || "Online"}</small>
        </div>

        <button
          type="button"
          className="darkBtn"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
