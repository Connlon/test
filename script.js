const quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Marking Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which one is a JavaScript framework?",
        options: ["Laravel", "React", "Django", "Flask"],
        answer: 1
    },
    {
        question: "What does UX stand for?",
        options: [
            "User Experience",
            "Universal Experience",
            "User Extension",
            "Unique Execution"
        ],
        answer: 0
    },
    {
        question: "Which tool is commonly used for version control?",
        options: ["Figma", "Git", "Photoshop", "Illustrator"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.querySelector("button");

function loadQuestion() {
    const q = quiz[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = option;
        div.dataset.index = index;
        div.onclick = () => selectAnswer(div, index);
        optionsEl.appendChild(div);
    });
}

function selectAnswer(element, selectedIndex) {
    const correctIndex = quiz[currentQuestion].answer;

    // Disable all options
    Array.from(optionsEl.children).forEach(opt => {
        opt.style.pointerEvents = "none";
    });

    if (selectedIndex === correctIndex) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
        // highlight correct option
        optionsEl.children[correctIndex].classList.add("correct");
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    let message = "";
    if (score <= 1) message = "0–1 points: Try harder next time.";
    else if (score <= 3) message = "2–3 points: Average knowledge.";
    else if (score === 4) message = "4 points: Decent performance.";
    else message = "5 points: Outstanding!";

    document.querySelector(".quiz-container").innerHTML = `
        <h2>Your Score: ${s
