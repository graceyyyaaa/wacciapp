"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSubmission } from "@/lib/submissionStore";

export default function TestPage() {
  const router = useRouter();

  const [essayTopic, setEssayTopic] = useState("");
  const [essayAnswer, setEssayAnswer] = useState("");

  const [sectionA, setSectionA] = useState({
    q1a: "",
    q1b: "",
    q2: "",
    q3a: "",
    q3b: "",
    q4: "",
    q5a: "",
    q5b: "",
    q5c: "",
    q5d: "",
    q6: "",
    q7: "",
    q8a: "",
    q8b: "",
  });
  const [sectionB, setSectionB] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  const submitExam = async () => {
    const candidate = localStorage.getItem("wacci_user");

    try {
      await saveSubmission({
        candidate_name: candidate,
        section_a: sectionA,
        section_b: sectionB,
        essay_topic: essayTopic,
        essay_answer: essayAnswer,
        total_score: 0,
      });

      alert("Exam submitted successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          WACCI 2026/2027 Aptitude Test
        </h1>

        <h2 className="text-2xl font-bold mb-4">SECTION A: MATHEMATICS</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="q1a" className="block mb-1 font-medium">
              1(a). Evaluate: 48 ÷ 6 + 3² × 2
            </label>
            <input
              id="q1a"
              className="border p-2 w-full"
              value={sectionA.q1a}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q1a: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q1b" className="block mb-1 font-medium">
              1(b). Evaluate: (15 − 3) × 4 ÷ 6 + 7
            </label>
            <input
              id="q1b"
              className="border p-2 w-full"
              value={sectionA.q1b}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q1b: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q2" className="block mb-1 font-medium">
              2. A bag of rice originally costs GH₵320. During a harvest
              festival, the price is reduced by 15%. What is the new price?
            </label>
            <textarea
              id="q2"
              className="border p-2 w-full"
              rows={3}
              value={sectionA.q2}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q2: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q3a" className="block mb-1 font-medium">
              3(a). Solve for x: 3x + 7 = 22
            </label>
            <input
              id="q3a"
              className="border p-2 w-full"
              value={sectionA.q3a}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q3a: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q3b" className="block mb-1 font-medium">
              3(b). Solve for x: 5(2x − 1) = 35
            </label>
            <input
              id="q3b"
              className="border p-2 w-full"
              value={sectionA.q3b}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q3b: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q4" className="block mb-1 font-medium">
              4. A mixture contains compost and topsoil in the ratio 2:5. If the
              total mass is 84 kg, calculate the mass of compost and topsoil.
            </label>
            <textarea
              id="q4"
              className="border p-2 w-full"
              rows={3}
              value={sectionA.q4}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q4: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q5a" className="block mb-1 font-medium">
              5(a). A merchant bought 500 kg of maize seed at GH₵12 per kg.
              Calculate the total cost price.
            </label>
            <input
              id="q5a"
              className="border p-2 w-full"
              value={sectionA.q5a}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q5a: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q5b" className="block mb-1 font-medium">
              5(b). The merchant sold 400 kg at GH₵18 per kg and 100 kg at GH₵9
              per kg. Calculate the total selling price.
            </label>
            <input
              id="q5b"
              className="border p-2 w-full"
              value={sectionA.q5b}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q5b: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q5c" className="block mb-1 font-medium">
              5(c). Did the merchant make a profit or a loss? By how much?
            </label>
            <textarea
              id="q5c"
              className="border p-2 w-full"
              rows={3}
              value={sectionA.q5c}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q5c: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q5d" className="block mb-1 font-medium">
              5(d). Express the profit or loss as a percentage of the cost
              price.
            </label>
            <input
              id="q5d"
              className="border p-2 w-full"
              value={sectionA.q5d}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q5d: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q6" className="block mb-1 font-medium">
              6. A cooperative society borrows GH₵5,000 at 12% simple interest
              per annum. Calculate the total amount repayable after 2 years.
            </label>
            <textarea
              id="q6"
              className="border p-2 w-full"
              rows={3}
              value={sectionA.q6}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q6: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q7" className="block mb-1 font-medium">
              7. The yields from seven plots are: 3.2, 4.0, 3.8, 4.5, 3.6, 4.2,
              3.9. Calculate the mean yield.
            </label>
            <textarea
              id="q7"
              className="border p-2 w-full"
              rows={3}
              value={sectionA.q7}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q7: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q8a" className="block mb-1 font-medium">
              8(a). Out of 200 seed packets, 160 are certified. What is the
              probability of selecting a certified packet?
            </label>
            <input
              id="q8a"
              className="border p-2 w-full"
              value={sectionA.q8a}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q8a: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="q8b" className="block mb-1 font-medium">
              8(b). What is the probability of selecting a substandard packet?
            </label>
            <input
              id="q8b"
              className="border p-2 w-full"
              value={sectionA.q8b}
              onChange={(e) =>
                setSectionA({
                  ...sectionA,
                  q8b: e.target.value,
                })
              }
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">SECTION B: SCIENCE</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="b1" className="block mb-1 font-medium">
              State THREE differences between plant cells and animal cells.
            </label>
            <textarea
              id="b1"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q1}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q1: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b2" className="block mb-1 font-medium">
              Explain the importance of soil organic matter (humus) to crop
              production. Give THREE specific benefits.
            </label>
            <textarea
              id="b2"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q2}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q2: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b3" className="block mb-1 font-medium">
              3. Distinguish between an element, a compound, and a mixture. Give
              one example of each. [3 marks]
            </label>
            <textarea
              id="b3"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q3}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q3: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b4" className="block mb-1 font-medium">
              4. State the difference between a food chain and a food web. [3
              marks]
            </label>
            <textarea
              id="b4"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q4}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q4: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b5" className="block mb-1 font-medium">
              5. State Newton's Second Law of Motion. Write its mathematical
              expression. [3 marks]
            </label>
            <textarea
              id="b5"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q5}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q5: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b6" className="block mb-1 font-medium">
              6. Describe TWO ways in which Information and Communication
              Technology (ICT) is being used to improve agricultural
              productivity in Ghana or West Africa. [2 marks]
            </label>
            <textarea
              id="b6"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q6}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q6: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label htmlFor="b7" className="block mb-1 font-medium">
              7. Briefly describe the water (hydrological) cycle and explain how
              deforestation disrupts it, with specific reference to crop
              farming. [3 marks]
            </label>
            <textarea
              id="b7"
              className="border p-2 w-full"
              rows={6}
              value={sectionB.q7}
              onChange={(e) =>
                setSectionB({
                  ...sectionB,
                  q7: e.target.value,
                })
              }
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          SECTION C: ESSAY (20 Marks)
        </h2>

        <p className="mb-4 font-medium">Choose ONE of the following topics:</p>

        <div className="space-y-4">
          <label className="block border rounded p-4 cursor-pointer">
            <input
              type="radio"
              name="essay"
              value="Sustainable Agriculture: How Ghana Can Feed Itself Without Destroying Its Environment"
              onChange={(e) => setEssayTopic(e.target.value)}
            />
            <span className="ml-2">
              1. Sustainable Agriculture: How Ghana Can Feed Itself Without
              Destroying Its Environment [20 marks]
            </span>
          </label>

          <label className="block border rounded p-4 cursor-pointer">
            <input
              type="radio"
              name="essay"
              value="The Role of Young Professionals in Transforming Agriculture in West Africa"
              onChange={(e) => setEssayTopic(e.target.value)}
            />
            <span className="ml-2">
              2. The Role of Young Professionals in Transforming Agriculture in
              West Africa [20 marks]
            </span>
          </label>

          <label className="block border rounded p-4 cursor-pointer">
            <input
              type="radio"
              name="essay"
              value="Digital Technology and Its Potential to Revolutionise Smallholder Farming in Africa"
              onChange={(e) => setEssayTopic(e.target.value)}
            />
            <span className="ml-2">
              3. Digital Technology and Its Potential to Revolutionise
              Smallholder Farming in Africa [20 marks]
            </span>
          </label>

          <div>
            <label htmlFor="essayAnswer" className="block mb-1 font-medium">
              Your Essay Answer:
            </label>
            <textarea
              id="essayAnswer"
              className="border p-3 w-full rounded"
              rows={12}
              placeholder="Write your essay answer here..."
              value={essayAnswer}
              onChange={(e) => setEssayAnswer(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={submitExam}
          className="mt-8 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors"
        >
          Submit Examination
        </button>
      </div>
    </main>
  );
}
