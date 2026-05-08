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
          <a className={active === "Dashboard" ? "navItem active" : "navItem"} href="/dashboard">
            ▦ Dashboard
          </a>

          <a className={active === "Scan" ? "navItem active" : "navItem"} href="/scan">
            ⌕ Scan
          </a>

          <a className={active === "Logs" ? "navItem active" : "navItem"} href="/logs">
            ☰ Logs
          </a>

          <a className={active === "Quarantine" ? "navItem active" : "navItem"} href="/quarantine">
            ♡ Quarantine
          </a>

          <a className={active === "Settings" ? "navItem active" : "navItem"} href="/settings">
            ⚙ Settings
          </a>

          <a className={active === "About" ? "navItem active" : "navItem"} href="/about">
            ⓘ About
          </a>
        </nav>

        <div className="profileBox">
          <span>PROTECTION</span>
          <strong>ACTIVE</strong>
          <small>{session?.user?.name || "Online"}</small>
        </div>

        <button
          className="darkBtn"
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
