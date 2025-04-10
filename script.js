// Sorular ve cevaplar
let questions = [
    {
        question: "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        choices: [
            "To look after the area in which you live and the environment",
            "To look after yourself and your family",
            "To stay in the UK forever",
            "To promote work in your local community"
        ],
        correctAnswer: "To look after the area in which you live and the environment",
        answer: ""
    },
    {
        question: "Where is Big Ben located?",
        choices: [
            "Buckingham Palace",
            "The Tower of London",
            "Trafalgar Square",
            "The Houses of the Parliament"
        ],
        correctAnswer: "The Houses of the Parliament",
        answer: ""
    },
    {
        question: "When were men and women given the right to vote at the age of 21?",
        choices: [
            "1918",
            "1903",
            "1928",
            "1923"
        ],
        correctAnswer: "1928",
        answer: ""
    },
    {
        question: "Where is the UK geographically located?",
        choices: [
            "South west of Europe",
            "North east of Europe",
            "North west of Europe",
            "South east of Europe"
        ],
        correctAnswer: "North west of Europe",
        answer: ""
    },
    {
        question: "Who is the patron Saint of Scotland?",
        choices: [
            "St David",
            "St Patrick",
            "St George",
            "St Andrew"
        ],
        correctAnswer: "St Andrew",
        answer: ""
    },
    {
        question: "Which two houses fought in the Wars of the Roses?",
        choices: [
            "The House of Chester",
            "The House of York",
            "The House of Lancaster",
            "The House of Newcastle"
        ],
        correctAnswer: "The House of York",
        answer: ""
    },
    {
        question: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        choices: [
            "True",
            "False"
        ],
        correctAnswer: "False",
        answer: ""
    },
    {
        question: "What is the Cenotaph?",
        choices: [
            "A flower",
            "A Christian church",
            "A war memorial",
            "A theatre"
        ],
        correctAnswer: "A war memorial",
        answer: ""
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        choices: [
            "Mary Stuart",
            "Theresa May",
            "Margaret Thatcher"
        ],
        correctAnswer: "Margaret Thatcher",
        answer: ""
    },
    {
        question: "Who chairs the debates at the House of Commons?",
        choices: [
            "A bishop",
            "The Prime Minister",
            "The Speaker",
            "The archbishop of Canterbury"
        ],
        correctAnswer: "The Speaker",
        answer: ""
    },
    {
        question: "Who was the captain of the English football team that won the World Cup in 1966?",
        choices: [
            "Sir Roger Bannister",
            "Sir Jackie Stewart",
            "Sir Ian Botham",
            "Bobby Moore"
        ],
        correctAnswer: "Bobby Moore",
        answer: ""
    },
    {
        question: "When did the English defeat the Spanish Armada?",
        choices: [
            "1466",
            "1066",
            "1254",
            "1588"
        ],
        correctAnswer: "1588",
        answer: ""
    },
    {
        question: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        choices: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        answer: ""
    },
    {
        question: "What is the minimum age required to serve on a jury?",
        choices: [
            "16",
            "18",
            "21",
            "25"
        ],
        correctAnswer: "18",
        answer: ""
    },
    {
        question: "How is a jury selected?",
        choices: [
            "From the NHS registration system",
            "Randomly from the electoral register",
            "Alphabetically from the telephone directory",
            "From a postcode selection"
        ],
        correctAnswer: "Randomly from the electoral register",
        answer: ""
    },
    {
        question: "What is a bank holiday?",
        choices: [
            "A public holiday when banks are open all day",
            "A public holiday for people working in banks",
            "An additional day off that every worker in the UK is entitled to",
            "A public holiday when banks and many other businesses are closed for the day"
        ],
        correctAnswer: "A public holiday when banks and many other businesses are closed for the day",
        answer: ""
    },
    {
        question: "What will you be given to vote before a general election takes place?",
        choices: [
            "A ballot slip",
            "A poll card",
            "A voting slip",
            "A poll tax relief"
        ],
        correctAnswer: "A poll card",
        answer: ""
    },
    {
        question: "Which of the following statements is correct?",
        choices: [
            "Solicitors’ charges are usually based on how much time they spend on a case",
            "Solicitors’ charges are usually based on the nature of a case and its importance"
        ],
        correctAnswer: "Solicitors’ charges are usually based on the nature of a case and its importance",
        answer: ""
    },
    {
        question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        choices: [
            "Television",
            "Internet",
            "Newspapers",
            "Radio"
        ],
        correctAnswer: "Television and Radio",
        answer: ""
    },
    {
        question: "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        choices: [
            "Northern Ireland",
            "Wales",
            "The Channel Islands",
            "Scotland"
        ],
        correctAnswer: "The Channel Islands",
        answer: ""
    },
    {
        question: "What did Sir Frank Whittle invent in the 1930s?",
        choices: [
            "Radar",
            "Hovercraft",
            "Jet engine",
            "Ballpoint pen"
        ],
        correctAnswer: "Jet engine",
        answer: ""
    },
    {
        question: "Who wrote ‘The Daffodils’?",
        choices: [
            "William Blake",
            "Robert Browning",
            "Lord Byron",
            "William Wordsworth"
        ],
        correctAnswer: "William Wordsworth",
        answer: ""
    },
    {
        question: "Who was given the title of Lord Protector?",
        choices: [
            "Charles I",
            "Charles II",
            "Winston Churchill",
            "Oliver Cromwell"
        ],
        correctAnswer: "Oliver Cromwell",
        answer: ""
    },
    {
        question: "What are the 40 days before Easter called?",
        choices: [
            "Diwali",
            "Lent",
            "Hannukah",
            "Vaisakhi"
        ],
        correctAnswer: "Lent",
        answer: ""
    }
];

// Sayfada gösterilecek soru indeksi
let currentQuestionIndex = 0;

// Zaman sayacı
let timer;

function startTimer() {
    let timeLeft = 2700; // 45 dakika = 2700 saniye
    timer = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('zaman').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Zaman doldu!');
            showResults();
        }
    }, 1000);
}

// Soruyu güncelleme
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('soru-numarasi').textContent = `Question ${currentQuestionIndex + 1} of 24`;
    document.getElementById('soru-metni').textContent = question.question;

    let answersHTML = '';
    question.choices.forEach(choice => {
        answersHTML += `
            <input type="radio" name="cevap" value="${choice}" id="cevap${choice}" onclick="saveAnswer('${choice}')">
            <label for="cevap${choice}">${choice}</label>
        `;
    });

    document.getElementById('cevaplar').innerHTML = answersHTML;
    updateNavigation();
}

// Kullanıcı cevabını kaydetme
function saveAnswer(choice) {
    questions[currentQuestionIndex].answer = choice;
}

// Soru numaralarını güncelleme
function updateNavigation() {
    const navigationHTML = questions.map((_, index) => {
        return `<span class="soru-numarasi ${currentQuestionIndex === index ? 'aktif' : ''}" onclick="goToQuestion(${index})">${index + 1}</span>`;
    }).join('');
    document.getElementById('soru-numaralari').innerHTML = navigationHTML;
}

// Soruya gitme
function goToQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
}

// Test sonuçlarını gösterme
function showResults() {
    let correctAnswers = 0;
    questions.forEach((question) => {
        if (question.answer === question.correctAnswer) {
            correctAnswers++;
        }
    });
    alert(`Test tamamlandı! Doğru cevap sayınız: ${correctAnswers} / ${questions.length}`);
}

// Sayfa yüklendiğinde başlat
window.onload = function() {
    startTimer();
    showQuestion();
};

// Butonlara tıklama işlemleri
document.getElementById('onceki').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

document.getElementById('gozden-gecir').addEventListener('click', function() {
    // Gözden geçir işlemi
    showQuestion();
});

document.getElementById('kontrol-et').addEventListener('click', showResults);
