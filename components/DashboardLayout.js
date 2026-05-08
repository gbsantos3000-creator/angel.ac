import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function DashboardLayout({
  children,
  active = "Dashboard",
}) {
  const { data: session } = useSession();

  const nav = [
    {
      label: "▦ Dashboard",
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "⌕ Scan",
      name: "Scan",
      href: "/scan",
    },
    {
      label: "☰ Logs",
      name: "Logs",
      href: "/logs",
    },
    {
      label: "♡ Quarantine",
      name: "Quarantine",
      href: "/quarantine",
    },
    {
      label: "⚙ Settings",
      name: "Settings",
      href: "/settings",
    },
    {
      label: "ⓘ About",
      name: "About",
      href: "/about",
    },
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                active === item.name
                  ? "navItem active"
                  : "navItem"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="profileBox">
          {session?.user?.image && (
            <img
              src={session.user.image}
              className="avatar"
              alt="avatar"
            />
          )}

          <strong>
            {session?.user?.name || "Guest"}
          </strong>

          <small>
            {session?.user?.email}
          </small>

          <small>
            PLAN: OWNER
          </small>
        </div>

        <button
          className="darkBtn"
          onClick={() =>
            signOut({ callbackUrl: "/" })
          }
        >
          Logout
        </button>
      </aside>

      <main className="main">
        {children}
      </main>
    </div>
  );
}
