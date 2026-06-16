"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email === "it@wacci.ug.edu.gh" && password === "Tinaa11@22") {
      localStorage.setItem("wacci_admin", "true");
      router.push("/admin");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          WACCI Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={login}
          className="w-full bg-green-700 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}
