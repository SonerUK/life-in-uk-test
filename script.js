const questions = [
    {
        question: "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        options: [
            "To look after the area in which you live and the environment",
            "To look after yourself and your family",
            "To stay in the UK forever",
            "To promote work in your local community"
        ],
        answer: ["To look after the area in which you live and the environment", "To look after yourself and your family"]
    },
    {
        question: "Where is Big Ben located?",
        options: ["Buckingham Palace", "The Tower of London", "Trafalgar Square", "The Houses of the Parliament"],
        answer: "The Houses of the Parliament"
    },
    {
        question: "When were men and women given the right to vote at the age of 21?",
        options: ["1918", "1903", "1928", "1923"],
        answer: "1928"
    },
    {
        question: "Where is the UK geographically located?",
        options: ["South west of Europe", "North east of Europe", "North west of Europe", "South east of Europe"],
        answer: "North west of Europe"
    },
    {
        question: "Who is the patron Saint of Scotland?",
        options: ["St David", "St Patrick", "St George", "St Andrew"],
        answer: "St Andrew"
    },
    {
        question: "Which two houses fought in the Wars of the Roses?",
        options: ["The House of Chester", "The House of York", "The House of Lancaster", "The House of Newcastle"],
        answer: ["The House of York", "The House of Lancaster"]
    },
    {
        question: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the Cenotaph?",
        options: ["A flower", "A Christian church", "A war memorial", "A theatre"],
        answer: "A war memorial"
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Mary Stuart", "Theresa May", "Margaret Thatcher"],
        answer: "Margaret Thatcher"
    },
    {
        question: "Who chairs the debates at the House of Commons?",
        options: ["A bishop", "The Prime Minister", "The Speaker", "The archbishop of Canterbury"],
        answer: "The Speaker"
    },
    {
        question: "Who was the captain of the English football team that won the World Cup in 1966?",
        options: ["Sir Roger Bannister", "Sir Jackie Stewart", "Sir Ian Botham", "Bobby Moore"],
        answer: "Bobby Moore"
    },
    {
        question: "When did the English defeat the Spanish Armada?",
        options: ["1466", "1066", "1254", "1588"],
        answer: "1588"
    },
    {
        question: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the minimum age required to serve on a jury?",
        options: ["16", "18", "21", "25"],
        answer: "18"
    },
    {
        question: "How is a jury selected?",
        options: ["From the NHS registration system", "Randomly from the electoral register", "Alphabetically from the telephone directory", "From a postcode selection"],
        answer: "Randomly from the electoral register"
    },
    {
        question: "What is a bank holiday?",
        options: ["A public holiday when banks are open all day", "A public holiday for people working in banks", "An additional day off that every worker in the UK is entitled to", "A public holiday when banks and many other businesses are closed for the day"],
        answer: "A public holiday when banks and many other businesses are closed for the day"
    },
    {
        question: "What will you be given to vote before a general election takes place?",
        options: ["A ballot slip", "A poll card", "A voting slip", "A poll tax relief"],
        answer: "A poll card"
    },
    {
        question: "Which of the following statements is correct?",
        options: ["Solicitors’ charges are usually based on how much time they spend on a case", "Solicitors’ charges are usually based on the nature of a case and its importance"],
        answer: "Solicitors’ charges are usually based on how much time they spend on a case"
    },
    {
        question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        options: ["Television", "Internet", "Newspapers", "Radio"],
        answer: ["Television", "Radio"]
    },
    {
        question: "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        options: ["Northern Ireland", "Wales", "The Channel Islands", "Scotland"],
        answer: "The Channel Islands"
    },
    {
        question: "What did Sir Frank Whittle invent in the 1930s?",
        options: ["Radar", "Hovercraft", "Jet engine", "Ballpoint pen"],
        answer: "Jet engine"
    },
    {
        question: "Who wrote ‘The Daffodils’?",
        options: ["William Blake", "Robert Browning", "Lord Byron", "William Wordsworth"],
        answer: "William Wordsworth"
    },
    {
        question: "Who was given the title of Lord Protector?",
        options: ["Charles I", "Charles II", "Winston Churchill", "Oliver Cromwell"],
        answer: "Oliver Cromwell"
    },
    {
        question: "What are the 40 days before Easter called?",
        options: ["Diwali", "Lent", "Hannukah", "Vaisakhi"],
        answer: "Lent"
    }

];

let currentQuestion = 0;
let selectedAnswers = [];
let correctAnswers = 0;

const questionNumbersDiv = document.querySelector(".question-numbers");
const questionAreaDiv = document.querySelector(".question-area");
const previousButton = document.getElementById("previous");
const checkButton = document.getElementById("check");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const resultDiv = document.getElementById("result");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionAreaDiv.innerHTML = `
        <div class="question">
            Question ${currentQuestion + 1} of ${questions.length}
            <div class="question-text">${question.question}</div>
            <div class="audio-icon"></div>
        </div>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option">
                    <input type="radio" name="answer" value="${option}" ${selectedAnswers[currentQuestion] === option ? 'checked' : ''}>
                    ${option}
                </div>
            `).join('')}
        </div>
        ${selectedAnswers[currentQuestion] ? `<div class="explanation">
            <div class="${question.answer === selectedAnswers[currentQuestion] || (Array.isArray(question.answer) && question.answer.includes(selectedAnswers[currentQuestion])) ? 'correct' : 'incorrect'}">${question.answer === selectedAnswers[currentQuestion] || (Array.isArray(question.answer) && question.answer.includes(selectedAnswers[currentQuestion])) ? 'Correct' : 'Incorrect'}</div>
            ${typeof question.answer === 'string' ? question.answer : question.answer.join(', ')}
        </div>` : ''}
    `;
    if (currentQuestion === questions.length - 1) {
        checkButton.style.display = "none";
        finishButton.style.display = "block";
    }
}

function displayQuestionNumbers() {
    questions.forEach((question, index) => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = index + 1;
        if (index === currentQuestion) {
            numberDiv.classList.add("active");
        }
        numberDiv.addEventListener("click", () => {
            currentQuestion = index;
            displayQuestion();
            updateNumberDivs();
        });
        questionNumbersDiv.appendChild(numberDiv);
    });
}

function updateNumberDivs() {
    const numberDivs = document.querySelectorAll(".number");
    numberDivs.forEach((div, index) => {
        if (index === currentQuestion) {
            div.classList.add("active");
        } else {
            div.classList.remove("active");
        }
        if (selectedAnswers[index]) {
            if (questions[index].answer === selectedAnswers[index] || (Array.isArray(questions[index].answer) && questions[index].answer.includes(selectedAnswers[index]))) {
                div.classList.add("correct");
                div.classList.remove("incorrect");
            } else {
                div.classList.add("incorrect");
                div.classList.remove("correct");
            }
        } else {
            div.classList.remove("correct");
            div.classList.remove("incorrect");
        }
    });
}

function handleNext() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateNumberDivs();
    }
}

function handlePrevious() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateNumberDivs();
    }
}

function handleCheck() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        selectedAnswers[currentQuestion] = selectedOption.value;
        displayQuestion();
        updateNumberDivs();
        if (questions[currentQuestion].answer === selectedAnswers[currentQuestion] || (Array.isArray(questions[currentQuestion].answer) && questions[currentQuestion].answer.includes(selectedAnswers[currentQuestion]))) {
            correctAnswers++;
        }
        handleNext();
    }
}

function handleFinish() {
    let resultMessage = `You answered ${correctAnswers} of ${questions.length} questions correctly.`;
    if (correctAnswers >= 18) {
        resultMessage += "<br>You PASSED the test!";
    } else {
        resultMessage += "<br>You FAILED the test!";
    }
    resultDiv.innerHTML = resultMessage;
    resultDiv.style.display = "block";
}

displayQuestionNumbers();
displayQuestion();

nextButton.addEventListener("click", handleNext);
previousButton.addEventListener("click", handlePrevious);
checkButton.addEventListener("click", handleCheck);
finishButton.addEventListener("click", handleFinish);
