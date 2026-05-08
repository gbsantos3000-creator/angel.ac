import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export function DashboardLayout({ children, active = "Dashboard" }) {
  const router = useRouter();
  const { data: session } = useSession();

  const go = (path) => {
    router.push(path);
  };

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand" onClick={() => go("/dashboard")} style={{ cursor: "pointer" }}>
          <div className="halo"></div>
          <h1>ANGEL A.C</h1>
          <p>SCANNER</p>
        </div>

        <nav className="nav">
          <button className={active === "Dashboard" ? "navItem active" : "navItem"} onClick={() => go("/dashboard")}>
            ▦ Dashboard
          </button>

          <button className={active === "Scan" ? "navItem active" : "navItem"} onClick={() => go("/scan")}>
            ⌕ Scan
          </button>

          <button className={active === "Logs" ? "navItem active" : "navItem"} onClick={() => go("/logs")}>
            ☰ Logs
          </button>

          <button className={active === "Quarantine" ? "navItem active" : "navItem"} onClick={() => go("/quarantine")}>
            ♡ Quarantine
          </button>

          <button className={active === "Settings" ? "navItem active" : "navItem"} onClick={() => go("/settings")}>
            ⚙ Settings
          </button>

          <button className={active === "About" ? "navItem active" : "navItem"} onClick={() => go("/about")}>
            ⓘ About
          </button>
        </nav>

        <div className="profileBox">
          {session?.user?.image && (
            <img src={session.user.image} className="avatar" alt="avatar" />
          )}
          <strong>{session?.user?.name || "Guest"}</strong>
          <small>PROTECTION ACTIVE</small>
        </div>

        <button className="darkBtn" onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
