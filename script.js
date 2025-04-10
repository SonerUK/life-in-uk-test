// Sorular ve cevaplar
let questions = [
    {
        question: "What is the capital of the UK?",
        choices: ["London", "Edinburgh", "Cardiff", "Belfast"],
        correctAnswer: "London",
        helpTextEnglish: "The capital of the United Kingdom is London.",
        helpTextTurkish: "Birleşik Krallık'ın başkenti Londra'dır."
    },
    {
        question: "Which country is NOT part of the UK?",
        choices: ["Scotland", "Wales", "Ireland", "England"],
        correctAnswer: "Ireland",
        helpTextEnglish: "Ireland is not part of the United Kingdom.",
        helpTextTurkish: "İrlanda, Birleşik Krallık'ın parçası değildir."
    }
    // Buraya daha fazla soru ekleyebilirsiniz
];

let currentQuestionIndex = 0;
let correctAnswers = 0; // Kullanıcının doğru cevap sayısını tutuyor

// Fonksiyon: Soruları göster
function showQuestion() {
    let question = questions[currentQuestionIndex];
    let questionContainer = document.getElementById("question-container");
    
    // Soruyu ve cevapları ekle
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.choices.map((choice, index) => `
                <li><button onclick="checkAnswer('${choice}')">${choice}</button></li>
            `).join('')}
        </ul>
        <button onclick="showHelp()">Help</button>  <!-- Yardım Butonu -->
    `;
}

// Soruyu kontrol et
function checkAnswer(selectedAnswer) {
    let question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;  // Doğru cevap sayısını artır
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }
    
    // Sonraki soruya geç
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Test complete! You got ${correctAnswers} out of ${questions.length} correct.`);
        // Sonuçları localStorage'a kaydet
        localStorage.setItem("lifeInUKTestResults", JSON.stringify({ correctAnswers }));
    }
}

// Yardım butonuna tıklanıldığında açıklamayı göster
function showHelp() {
    let question = questions[currentQuestionIndex];
    alert(`Help:\n\nEnglish: ${question.helpTextEnglish}\nTurkish: ${question.helpTextTurkish}`);
}

// Sayfa yüklendiğinde ilk soruyu göster
window.onload = function() {
    showQuestion();
};
