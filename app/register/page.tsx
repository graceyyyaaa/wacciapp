"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Candidate Registration</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={() => router.push("/login")}
          className="w-full bg-green-700 text-white p-3 rounded"
        >
          Register
        </button>
      </div>
    </main>
  );
}
