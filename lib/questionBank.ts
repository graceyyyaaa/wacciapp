export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

const KEY = "wacci_questions";

const defaultQuestions: Question[] = [
  {
    id: "1",
    question: "Evaluate: 48 ÷ 6 + 3² × 2",
    options: ["20", "24", "26", "30"],
    answer: "26",
  },
  {
    id: "2",
    question: "(15 − 3) × 4 ÷ 6 + 7 = ?",
    options: ["12", "15", "18", "20"],
    answer: "15",
  },
  {
    id: "3",
    question:
      "A bag of rice costs GH₵320 and is reduced by 15%. What is the new price?",
    options: ["GH₵272", "GH₵280", "GH₵260", "GH₵300"],
    answer: "GH₵272",
  },
  {
    id: "4",
    question: "Solve: 3x + 7 = 22",
    options: ["x = 4", "x = 5", "x = 6", "x = 7"],
    answer: "x = 5",
  },
  {
    id: "5",
    question: "Solve: 5(2x − 1) = 35",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    answer: "x = 4",
  },
  {
    id: "6",
    question:
      "Compost and topsoil are mixed in the ratio 2:5. If the total is 84kg, how much compost is required?",
    options: ["20kg", "24kg", "30kg", "60kg"],
    answer: "24kg",
  },
  {
    id: "7",
    question:
      "What is the total cost price of 500kg of seed bought at GH₵12 per kg?",
    options: ["GH₵5,000", "GH₵6,000", "GH₵7,000", "GH₵8,000"],
    answer: "GH₵6,000",
  },
  {
    id: "8",
    question:
      "A cooperative borrows GH₵5,000 at 12% simple interest for 2 years. Total repayable amount?",
    options: ["GH₵5,600", "GH₵6,000", "GH₵6,200", "GH₵6,500"],
    answer: "GH₵6,200",
  },
  {
    id: "9",
    question:
      "Mean yield of 3.2, 4.0, 3.8, 4.5, 3.6, 4.2 and 3.9 is approximately?",
    options: ["3.5", "3.7", "3.9", "4.2"],
    answer: "3.9",
  },
  {
    id: "10",
    question:
      "Probability of selecting a certified seed packet from 160 certified out of 200 packets?",
    options: ["0.2", "0.4", "0.8", "1.0"],
    answer: "0.8",
  },
  {
    id: "11",
    question:
      "Which structure is present in plant cells but absent in animal cells?",
    options: ["Nucleus", "Cell membrane", "Cell wall", "Cytoplasm"],
    answer: "Cell wall",
  },
  {
    id: "12",
    question: "What is the main function of chloroplasts?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Reproduction"],
    answer: "Photosynthesis",
  },
  {
    id: "13",
    question: "Which of the following is a benefit of humus in soil?",
    options: [
      "Reduces fertility",
      "Improves soil structure",
      "Kills microorganisms",
      "Increases erosion",
    ],
    answer: "Improves soil structure",
  },
  {
    id: "14",
    question: "Which of the following is an element?",
    options: ["Water", "Compost", "Nitrogen", "Soil"],
    answer: "Nitrogen",
  },
  {
    id: "15",
    question: "Which statement best describes a food web?",
    options: [
      "A single feeding pathway",
      "A chain of predators",
      "Interconnected food chains",
      "A producer only",
    ],
    answer: "Interconnected food chains",
  },
  {
    id: "16",
    question: "Newton's Second Law is represented by:",
    options: ["E=mc²", "F=ma", "V=IR", "P=mv"],
    answer: "F=ma",
  },
  {
    id: "17",
    question:
      "Which ICT tool helps farmers receive market prices via mobile phone?",
    options: ["Esoko", "Photoshop", "Excel", "Zoom"],
    answer: "Esoko",
  },
  {
    id: "18",
    question: "Which technology can monitor crop health from above?",
    options: ["Radio", "Drone", "Printer", "Scanner"],
    answer: "Drone",
  },
  {
    id: "19",
    question: "Which process releases water vapour from plants?",
    options: ["Condensation", "Precipitation", "Transpiration", "Infiltration"],
    answer: "Transpiration",
  },
  {
    id: "20",
    question: "How does deforestation affect rainfall?",
    options: [
      "Increases rainfall",
      "No effect",
      "Reduces rainfall",
      "Creates floods only",
    ],
    answer: "Reduces rainfall",
  },
];

export function getQuestions(): Question[] {
  if (typeof window === "undefined") return defaultQuestions;

  const data = localStorage.getItem(KEY);

  if (!data) {
    localStorage.setItem(KEY, JSON.stringify(defaultQuestions));
    return defaultQuestions;
  }

  return JSON.parse(data);
}

export function saveQuestions(q: Question[]) {
  localStorage.setItem(KEY, JSON.stringify(q));
}
