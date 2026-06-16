"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getResults } from "@/lib/resultsStore";
import { getEssays } from "@/lib/essayStore";

export default function AdminPage() {
  const router = useRouter();

  const [results, setResults] = useState<any[]>([]);
  const [essays, setEssays] = useState<any[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("wacci_admin");

    if (!isAdmin) {
      router.push("/admin-login");
      return;
    }

    loadData();
  }, [router]);

  const loadData = async () => {
    const resultData = await getResults();
    const essayData = await getEssays();

    setResults(resultData);
    setEssays(essayData);
  };

  const getEssayScore = (candidate: string) => {
    const essay = essays.find((e) => e.candidate_name === candidate);

    return essay?.score || 0;
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          WACCI Admin Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow p-6 overflow-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Rank</th>
                <th className="text-left p-2">Candidate</th>
                <th className="text-left p-2">MCQ</th>
                <th className="text-left p-2">Essay</th>
                <th className="text-left p-2">Final</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {results.map((r, index) => {
                const essayScore = getEssayScore(r.candidate_name);

                const finalScore = Number(r.score) + Number(essayScore);

                return (
                  <tr key={index}>
                    <td className="p-2">{index + 1}</td>

                    <td className="p-2">{r.candidate_name}</td>

                    <td className="p-2">{r.score}</td>

                    <td className="p-2">{essayScore}</td>

                    <td className="p-2 font-bold">{finalScore}</td>

                    <td className="p-2">
                      {finalScore >= 30 ? "PASS" : "FAIL"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
