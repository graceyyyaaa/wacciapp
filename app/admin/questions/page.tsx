"use client";

import { useEffect, useState } from "react";
import { getQuestions, saveQuestions, Question } from "@/lib/questionBank";

export default function QuestionManager() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [qText, setQText] = useState("");
  const [options, setOptions] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  const addQuestion = () => {
    const newQ: Question = {
      id: Date.now().toString(),
      question: qText,
      options: options.split(","),
      answer,
    };

    const updated = [...questions, newQ];
    setQuestions(updated);
    saveQuestions(updated);

    setQText("");
    setOptions("");
    setAnswer("");
  };

  const deleteQuestion = (id: string) => {
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);
    saveQuestions(updated);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Question Manager (Admin)
        </h1>

        <div className="bg-white p-4 rounded shadow mb-6 space-y-2">
          <input
            placeholder="Question"
            value={qText}
            onChange={(e) => setQText(e.target.value)}
            className="w-full border p-2"
          />

          <input
            placeholder="Options (comma separated)"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            className="w-full border p-2"
          />

          <input
            placeholder="Correct Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border p-2"
          />

          <button
            onClick={addQuestion}
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Add Question
          </button>
        </div>

        <div className="space-y-3">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-3 rounded shadow">
              <p className="font-bold">{q.question}</p>

              <button
                onClick={() => deleteQuestion(q.id)}
                className="text-red-600 mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
