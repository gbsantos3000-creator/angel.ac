import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function DashboardLayout({ children, active = "Dashboard" }) {
  const { data: session } = useSession();

  const nav = [
    ["Dashboard", "/dashboard", "▦"],
    ["Scan", "/scan", "⌕"],
    ["Logs", "/logs", "☰"],
    ["Quarantine", "/quarantine", "♡"],
    ["Settings", "/settings", "⚙"],
    ["About", "/about", "ⓘ"],
  ];

  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand">
          <div className="halo"></div>
          <h1>ANGEL A.C</h1>
          <p>SCANNER</p>
        </div>

        <nav className="nav">
          {nav.map(([name, href, icon]) => (
            <Link
              key={name}
              href={href}
              className={active === name ? "navItem active" : "navItem"}
            >
              <span>{icon}</span> {name}
            </Link>
          ))}
        </nav>

        <div className="profileBox">
          {session?.user?.image && (
            <img src={session.user.image} className="avatar" />
          )}
          <strong>{session?.user?.name || "Guest"}</strong>
          <small>{session?.user?.plan || "FREE"} · {session?.user?.license || "NO LICENSE"}</small>
        </div>
      </aside>

      <main className="main">
        <button className="logoutBtn" onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </button>
        {children}
      </main>
    </div>
  );
}
