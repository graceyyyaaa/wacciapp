"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return;

    localStorage.setItem("wacci_user", email);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Candidate Login</h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}
