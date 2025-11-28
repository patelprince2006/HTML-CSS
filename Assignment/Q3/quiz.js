
const questions = [
  {
    question: "How many hours are there in a day?",
    options: ["12 hours", "24 hours", "48 hours", "36 hours"],
    answer: "24 hours"
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Surat", "Ahmedabad"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const resultEl = document.getElementById("result");

const loadQuestion = () => {
  const q = questions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(option);
    if (userAnswers[currentQuestion] === option) btn.classList.add("selected");
    optionsEl.appendChild(btn);
  });

  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";
};

const selectAnswer = (option) => {
  userAnswers[currentQuestion] = option;
  loadQuestion();
}

nextBtn.addEventListener("click", () => {
  if (!userAnswers[currentQuestion]) {
    alert("Please select an answer before continuing!");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    calculateScore();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

const calculateScore = () => {
  score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  document.getElementById("quiz-container").innerHTML = `
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <h3>Review:</h3>
    <ul>
      ${questions.map((q, i) => `
        <li>
          <strong>Q${i + 1}:</strong> ${q.question}<br>
          ✅ Correct: ${q.answer}<br>
          🟡 Your Answer: ${userAnswers[i] || "Not answered"}
        </li><br>
      `).join("")}
    </ul>
    <button class="btn" onclick="location.reload()">Restart Quiz</button>
  `;
};

loadQuestion();
