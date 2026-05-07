"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white text-5xl font-bold">
          ANGEL A.C
        </h1>

        <button
          onClick={() =>
            signIn("discord", {
              callbackUrl: "/dashboard",
            })
          }
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
        >
          Login with Discord
        </button>
      </div>
    </main>
  );
}
