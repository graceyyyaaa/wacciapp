"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getResults } from "@/lib/resultsStore";

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const loadResult = async () => {
      const user = localStorage.getItem("wacci_user");

      console.log("Current user:", user);

      const results = await getResults();

      console.log("All results:", results);

      const latest = results
        .filter((r: any) => r.candidate_name === user)
        .slice(-1)[0];

      console.log("Matched result:", latest);

      setResult(latest);
    };

    loadResult();
  }, []);

  if (!result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No results found.</p>
      </main>
    );
  }

  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold text-green-700">
          WACCI Results Report
        </h1>

        <p className="mt-4 text-gray-600">Candidate: {result.candidate_name}</p>

        <div className="mt-8">
          <p className="text-xl font-semibold">
            Score: {result.score} / {result.total}
          </p>

          <p className="text-lg mt-2">Percentage: {percentage}%</p>

          <p
            className={`mt-3 text-xl font-bold ${
              result.status === "PASS" ? "text-green-600" : "text-red-600"
            }`}
          >
            {result.status}
          </p>
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  );
}
