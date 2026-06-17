"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSubmissions } from "@/lib/submissionStore";

export default function AdminPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("wacci_admin");

    if (!isAdmin) {
      router.push("/admin-login");
      return;
    }

    loadData();
  }, [router]);

  const loadData = async () => {
    const data = await getSubmissions();
    setSubmissions(data);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          WACCI Candidate Submissions
        </h1>

        {submissions.map((submission, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 mb-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              {submission.candidate_name}
            </h2>

            <p className="mb-2">
              <strong>Date:</strong>{" "}
              {new Date(submission.created_at).toLocaleString()}
            </p>

            <hr className="my-4" />

            <h3 className="font-bold text-lg mb-2">SECTION A: MATHEMATICS</h3>

            <pre className="bg-gray-100 p-3 rounded overflow-auto">
              {JSON.stringify(submission.section_a, null, 2)}
            </pre>

            <h3 className="font-bold text-lg mt-4 mb-2">SECTION B: SCIENCE</h3>

            <pre className="bg-gray-100 p-3 rounded overflow-auto">
              {JSON.stringify(submission.section_b, null, 2)}
            </pre>

            <h3 className="font-bold text-lg mt-4 mb-2">ESSAY TOPIC</h3>

            <p>{submission.essay_topic}</p>

            <h3 className="font-bold text-lg mt-4 mb-2">ESSAY ANSWER</h3>

            <div className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
              {submission.essay_answer}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
