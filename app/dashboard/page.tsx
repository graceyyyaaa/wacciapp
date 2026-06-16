"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("wacci_user") || "");
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="bg-green-700 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">WACCI Assessment Portal</h1>

          <p className="mt-2 text-green-100">Welcome back, {user}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            onClick={() => router.push("/test")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <h2 className="text-xl font-bold text-green-700">Assessment</h2>

            <p className="mt-2 text-gray-600">
              Start your aptitude and essay assessment.
            </p>
          </div>

          <div
            onClick={() => router.push("/results")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <h2 className="text-xl font-bold text-blue-700">Results</h2>

            <p className="mt-2 text-gray-600">View your assessment report.</p>
          </div>

          <div
            onClick={() => router.push("/admin")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <h2 className="text-xl font-bold text-purple-700">Admin Panel</h2>

            <p className="mt-2 text-gray-600">Manage candidates and results.</p>
          </div>

          <div
            onClick={() => router.push("/admin/essays")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <h2 className="text-xl font-bold text-orange-700">Essay Review</h2>

            <p className="mt-2 text-gray-600">
              Review and score candidate essays.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-green-700">
            Assessment Information
          </h2>

          <div className="mt-4 space-y-3 text-gray-700">
            <p>• Multiple Choice Questions Assessment</p>
            <p>• Essay Writing Assessment</p>
            <p>• Automatic Pass/Fail Evaluation</p>
            <p>• Candidate Ranking System</p>
            <p>• Essay Review and Scoring</p>
            <p>• Results Export to Excel</p>
          </div>
        </div>
      </div>
    </main>
  );
}
