"use client";

import { useEffect, useState } from "react";
import { getEssays } from "@/lib/essayStore";
import { supabase } from "@/lib/supabase";

export default function EssayReviewPage() {
  const [essays, setEssays] = useState<any[]>([]);

  useEffect(() => {
    loadEssays();
  }, []);

  const loadEssays = async () => {
    const data = await getEssays();
    setEssays(data || []);
  };

  const saveScore = async (id: string, score: number) => {
    const { error } = await supabase
      .from("essays")
      .update({ score })
      .eq("id", id);

    if (error) {
      alert("Failed to save score");
      console.error(error);
      return;
    }

    alert("Score saved successfully");
    loadEssays();
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Essay Review Center
        </h1>

        <div className="space-y-6">
          {essays.map((essay) => (
            <div key={essay.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold">{essay.candidate_name}</h2>

              <p className="mt-4 font-semibold text-lg">{essay.question}</p>

              <div className="mt-4 bg-slate-50 p-4 rounded border">
                {essay.answer}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <input
                  id={`score-${essay.id}`}
                  type="number"
                  min="0"
                  max="20"
                  defaultValue={essay.score || ""}
                  placeholder="0 - 20"
                  className="border rounded px-3 py-2 w-32"
                />

                <button
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                  onClick={() => {
                    const input = document.getElementById(
                      `score-${essay.id}`,
                    ) as HTMLInputElement;

                    saveScore(essay.id, Number(input.value));
                  }}
                >
                  Save Score
                </button>

                <span className="font-semibold">
                  Current Score: {essay.score ?? "Not Graded"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
