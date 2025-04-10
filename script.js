// Sorular ve cevaplar
let questions = [
    {
        question: "St George's günü ne zaman?",
        choices: ["17 Mart", "30 Kasım", "1 Mart", "23 Nisan"],
        correctAnswer: "23 Nisan",
        answer: ""
    },
    {
        question: "Hangi ülke Birleşik Krallık'ın parçası değildir?",
        choices: ["İskoçya", "Galler", "İrlanda", "İngiltere"],
        correctAnswer: "İrlanda",
        answer: ""
    }
    // Daha fazla soru ekleyebilirsiniz
];

let currentQuestionIndex = 0;
let timer;  // Zaman sayacını yönetmek için

// Zaman sayacı fonksiyonu
function startTimer() {
    let timeLeft = 2700; // 45 dakika = 2700 saniye
    timer = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('zaman').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        
        // Zaman bittiğinde testi bitir
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Zaman doldu!');
            showResults();
        }

        // Zaman 5 dakikadan azsa, kırmızıya dönsün
        if (timeLeft <= 300) {
            document.getElementById('zaman-sayaci').style.color = 'red';
        }
    }, 1000);
}

// Soruları göster
function showQuestion() {
    let question = questions[currentQuestionIndex];
    let questionContainer = document.getElementById('soru-alani');
    
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.choices.map(choice => `
            <label><input type="radio" name="cevap" value="${choice}" onclick="selectAnswer('${choice}')"> ${choice}</label><br>
        `).join('')}
    `;
    
    // Soruları navigasyon kısmında da güncelle
    let navButtons = document.querySelectorAll('.soru-numarasi');
    navButtons.forEach((button, index) => {
        button.classList.remove('aktif');
        if (index === currentQuestionIndex) {
            button.classList.add('aktif');
        }
    });
}

// Kullanıcı cevabını seçtiğinde
function selectAnswer(selectedAnswer) {
    questions[currentQuestionIndex].answer = selectedAnswer;
}

// Sonuçları göster
function showResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (q.answer === q.correctAnswer) {
            correctAnswers++;
        }
    });
    alert(`Test tamamlandı! Doğru cevaplar: ${correctAnswers} / ${questions.length}`);
}

// Kontrol et butonuna basıldığında
document.getElementById('kontrol-et').addEventListener('click', function() {
    showResults();
});

// Önceki soru için
document.getElementById('onceki').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// Gözden geçirme için
document.getElementById('gozden-gecir').addEventListener('click', function() {
    // Gözden geçirme işlevselliği eklenebilir
});

// Başlangıçta zamanı başlat
window.onload = function() {
    startTimer();
    showQuestion();
};
