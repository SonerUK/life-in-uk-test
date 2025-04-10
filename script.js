// --- SORULAR ---
// Sorulara durum takibi için yeni özellikler ekleyelim:
// status: 'unanswered', 'answered', 'review'
// userSelection: null (başlangıçta) veya kullanıcının seçimi (string veya array)
const questions = [
    {
        question: "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        options: [
            "To look after the area in which you live and the environment",
            "To look after yourself and your family",
            "To stay in the UK forever",
            "To promote work in your local community"
        ],
        answer: ["To look after the area in which you live and the environment", "To look after yourself and your family"],
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Where is Big Ben located?",
        options: ["Buckingham Palace", "The Tower of London", "Trafalgar Square", "The Houses of the Parliament"],
        answer: "The Houses of the Parliament",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "When were men and women given the right to vote at the age of 21?",
        options: ["1918", "1903", "1928", "1923"],
        answer: "1928",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Where is the UK geographically located?",
        options: ["South west of Europe", "North east of Europe", "North west of Europe", "South east of Europe"],
        answer: "North west of Europe",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who is the patron Saint of Scotland?",
        options: ["St David", "St Patrick", "St George", "St Andrew"],
        answer: "St Andrew",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Which two houses fought in the Wars of the Roses?",
        options: ["The House of Chester", "The House of York", "The House of Lancaster", "The House of Newcastle"],
        answer: ["The House of York", "The House of Lancaster"],
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        options: ["True", "False"],
        answer: "False",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What is the Cenotaph?",
        options: ["A flower", "A Christian church", "A war memorial", "A theatre"],
        answer: "A war memorial",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Mary Stuart", "Theresa May", "Margaret Thatcher"],
        answer: "Margaret Thatcher",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who chairs the debates at the House of Commons?",
        options: ["A bishop", "The Prime Minister", "The Speaker", "The archbishop of Canterbury"],
        answer: "The Speaker",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who was the captain of the English football team that won the World Cup in 1966?",
        options: ["Sir Roger Bannister", "Sir Jackie Stewart", "Sir Ian Botham", "Bobby Moore"],
        answer: "Bobby Moore",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "When did the English defeat the Spanish Armada?",
        options: ["1466", "1066", "1254", "1588"],
        answer: "1588",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        options: ["True", "False"],
        answer: "True",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What is the minimum age required to serve on a jury?",
        options: ["16", "18", "21", "25"],
        answer: "18",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "How is a jury selected?",
        options: ["From the NHS registration system", "Randomly from the electoral register", "Alphabetically from the telephone directory", "From a postcode selection"],
        answer: "Randomly from the electoral register",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What is a bank holiday?",
        options: ["A public holiday when banks are open all day", "A public holiday for people working in banks", "An additional day off that every worker in the UK is entitled to", "A public holiday when banks and many other businesses are closed for the day"],
        answer: "A public holiday when banks and many other businesses are closed for the day",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What will you be given to vote before a general election takes place?",
        options: ["A ballot slip", "A poll card", "A voting slip", "A poll tax relief"],
        answer: "A poll card",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Which of the following statements is correct?",
        options: ["Solicitors’ charges are usually based on how much time they spend on a case", "Solicitors’ charges are usually based on the nature of a case and its importance"],
        answer: "Solicitors’ charges are usually based on how much time they spend on a case",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        options: ["Television", "Internet", "Newspapers", "Radio"],
        answer: ["Television", "Radio"],
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        options: ["Northern Ireland", "Wales", "The Channel Islands", "Scotland"],
        answer: "The Channel Islands",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What did Sir Frank Whittle invent in the 1930s?",
        options: ["Radar", "Hovercraft", "Jet engine", "Ballpoint pen"],
        answer: "Jet engine",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who wrote ‘The Daffodils’?",
        options: ["William Blake", "Robert Browning", "Lord Byron", "William Wordsworth"],
        answer: "William Wordsworth",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "Who was given the title of Lord Protector?",
        options: ["Charles I", "Charles II", "Winston Churchill", "Oliver Cromwell"],
        answer: "Oliver Cromwell",
        status: 'unanswered',
        userSelection: null
    },
    {
        question: "What are the 40 days before Easter called?",
        options: ["Diwali", "Lent", "Hannukah", "Vaisakhi"],
        answer: "Lent",
        status: 'unanswered',
        userSelection: null
    }
];

// --- DEĞİŞKENLER ---
let currentQuestion = 0;
let timerInterval = null; // Zamanlayıcı için
let timeRemaining = 45 * 60; // Saniye cinsinden (45 dakika)
const passingScore = 18; // Geçme notu (örnek: 24 soruda 18 doğru)

// --- DOM ELEMENTLERİ ---
const questionNumbersDiv = document.querySelector(".question-numbers");
const questionAreaDiv = document.querySelector(".question-area");
const previousButton = document.getElementById("previous");
const reviewButton = document.getElementById("review"); // ID'yi güncelledik
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const resultDiv = document.getElementById("result");
const timeLimitDiv = document.getElementById("time-limit");

// --- FONKSİYONLAR ---

/** Zamanlayıcıyı Başlatır */
function startTimer() {
    updateTimerDisplay(); // Başlangıç değerini göster
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            finishQuiz(); // Süre dolduysa bitir
        }
    }, 1000); // Her saniyede bir çalıştır
}

/** Zamanlayıcı Ekranını Günceller (MM:SS Formatında) */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeLimitDiv.textContent = `Kalan Süre: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeRemaining < 60) { // Son 1 dakika kala rengi değiştir (isteğe bağlı)
        timeLimitDiv.style.color = 'red';
        timeLimitDiv.style.fontWeight = 'bold';
    }
}

/** Mevcut Soruyu Ekranda Gösterir */
function displayQuestion() {
    storeCurrentAnswer(); // Yeni soruya geçmeden önce mevcut cevabı kaydet
    const question = questions[currentQuestion];
    const isMultiAnswer = Array.isArray(question.answer);
    const inputType = isMultiAnswer ? 'checkbox' : 'radio';

    let optionsHTML = question.options.map((option, index) => {
        let isChecked = false;
        if (question.userSelection) {
            if (isMultiAnswer) {
                isChecked = question.userSelection.includes(option);
            } else {
                isChecked = question.userSelection === option;
            }
        }

        // Checkbox için label ve id/for bağlantısı önemlidir
        return `
            <div class="option">
                <input type="${inputType}" name="answer_${currentQuestion}" id="option_${currentQuestion}_${index}" value="${option}" ${isChecked ? 'checked' : ''}>
                <label for="option_${currentQuestion}_${index}">${option}</label>
            </div>
        `;
    }).join('');

    questionAreaDiv.innerHTML = `
        <div class="question">
            <strong>Soru ${currentQuestion + 1} / ${questions.length}</strong>
            <div class="question-text"><strong>${question.question}</strong></div>
            <div class="audio-icon"></div> </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `;

    updateButtonVisibility();
    updateNumberDivs(); // Soru değiştiğinde numaraların durumunu güncelle
}

/** Soru Numaralarını Oluşturur ve Tıklama Olaylarını Ekler */
function displayQuestionNumbers() {
    questionNumbersDiv.innerHTML = ''; // Önce temizle
    questions.forEach((question, index) => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = index + 1;
        numberDiv.dataset.index = index; // Index bilgisini sakla

        numberDiv.addEventListener("click", () => {
            storeCurrentAnswer(); // Numaraya tıklayınca da cevabı kaydet
            currentQuestion = index;
            displayQuestion();
        });
        questionNumbersDiv.appendChild(numberDiv);
    });
    updateNumberDivs(); // İlk yüklemede numaraların durumunu ayarla
}

/** Soru Numaralarının Görünümünü Günceller (Aktif, Cevaplandı, İncelenecek) */
function updateNumberDivs() {
    const numberDivs = document.querySelectorAll(".number");
    numberDivs.forEach((div, index) => {
        const question = questions[index];
        div.classList.remove("active", "answered", "review", "correct", "incorrect"); // Önce tüm durumları temizle

        if (index === currentQuestion) {
            div.classList.add("active");
        }

        if (question.status === 'answered') {
            div.classList.add("answered"); // Sadece cevaplandı olarak işaretle (doğru/yanlış test bitince)
        } else if (question.status === 'review') {
            div.classList.add("review");
        }
    });
}

/** Mevcut Sorudaki Kullanıcı Seçimlerini Kaydeder */
function storeCurrentAnswer() {
    const question = questions[currentQuestion];
    const isMultiAnswer = Array.isArray(question.answer);

    if (isMultiAnswer) {
        const checkedBoxes = questionAreaDiv.querySelectorAll(`input[name="answer_${currentQuestion}"]:checked`);
        question.userSelection = Array.from(checkedBoxes).map(cb => cb.value);
        if (question.userSelection.length > 0 && question.status !== 'review') {
            question.status = 'answered';
        } else if (question.userSelection.length === 0 && question.status === 'answered') {
            // Eğer işaretli kutu kalmadıysa ve durum 'answered' ise 'unanswered' yap
             if (question.status !== 'review') question.status = 'unanswered';
        }
    } else {
        const selectedRadio = questionAreaDiv.querySelector(`input[name="answer_${currentQuestion}"]:checked`);
        if (selectedRadio) {
            question.userSelection = selectedRadio.value;
             if (question.status !== 'review') question.status = 'answered';
        } else {
            // Eğer radio seçimi kaldırıldıysa (pratikte olmaz ama teorik olarak)
             if (question.status === 'answered') {
                  if (question.status !== 'review') question.status = 'unanswered';
             }
             // question.userSelection = null; // Null bırakmak daha doğru olabilir
        }
    }
    // Durum 'review' ise, cevap seçilse bile 'review' kalmalı
}


/** Sonraki Soruya Geçer */
function handleNext() {
    storeCurrentAnswer(); // Cevabı kaydet
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

/** Önceki Soruya Geçer */
function handlePrevious() {
    storeCurrentAnswer(); // Cevabı kaydet
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

/** Soruyu "Sonra Bak" Olarak İşaretler veya İşareti Kaldırır */
function handleReview() {
    const question = questions[currentQuestion];
    if (question.status === 'review') {
        // Eğer zaten 'review' ise, cevaplanmış mı diye bakıp ona göre 'answered' veya 'unanswered' yap
        storeCurrentAnswer(); // Cevap varsa durumu 'answered' yapacak
        if (!question.userSelection || (Array.isArray(question.userSelection) && question.userSelection.length === 0)) {
             question.status = 'unanswered';
        }
    } else {
        // 'review' değilse, 'review' yap
        storeCurrentAnswer(); // Önce mevcut seçimi kaydet ki 'review'dan çıkınca kaybolmasın
        question.status = 'review';
    }
    updateNumberDivs(); // Numarayı güncelle
}


/** Testi Bitirir ve Sonuçları Gösterir */
function finishQuiz() {
    clearInterval(timerInterval); // Zamanlayıcıyı durdur
    storeCurrentAnswer(); // Son sorunun cevabını da kaydet

    let correctAnswersCount = 0;
    let detailedResultsHTML = '<h2>Sonuçlar Detaylı Görünüm:</h2>';

    questions.forEach((q, index) => {
        let isCorrect = false;
        const questionResultClass = ['result-question']; // CSS class için dizi

        if (Array.isArray(q.answer)) {
            // Çoklu cevap kontrolü: Kullanıcının seçtikleri ile doğru cevaplar birebir aynı mı? (Sıra önemsiz)
            // Boyutları aynı olmalı VE her doğru cevap kullanıcının seçimlerinde olmalı
            if (q.userSelection && q.userSelection.length === q.answer.length) {
                 isCorrect = q.answer.every(ans => q.userSelection.includes(ans));
            }
        } else {
            // Tek cevap kontrolü
            isCorrect = q.userSelection === q.answer;
        }

        if (isCorrect) {
            correctAnswersCount++;
            questionResultClass.push('correct');
        } else if (q.userSelection !== null && q.userSelection !== undefined && q.userSelection.length !== 0) { // Sadece yanlış cevaplananları işaretle
             questionResultClass.push('incorrect');
        } else {
             // Boş bırakılanlar için özel stil eklenebilir veya nötr bırakılabilir
        }

        // Detaylı sonuç HTML'ini oluşturma
        detailedResultsHTML += `<div class="${questionResultClass.join(' ')}">`;
        detailedResultsHTML += `<strong>Soru ${index + 1}:</strong> ${q.question}<br>`;
        detailedResultsHTML += `<div class="result-options"><strong>Seçenekler:</strong><br>`;
        q.options.forEach(opt => {
            let userSelectedThis = false;
            let isCorrectAnswer = false;

            if (Array.isArray(q.answer)) isCorrectAnswer = q.answer.includes(opt);
            else isCorrectAnswer = q.answer === opt;

            if (Array.isArray(q.userSelection)) userSelectedThis = q.userSelection.includes(opt);
            else userSelectedThis = q.userSelection === opt;

            detailedResultsHTML += `<div class="option">`;
             if(isCorrectAnswer) detailedResultsHTML += `✅ `; // Doğruysa işaret
             else if (userSelectedThis && !isCorrectAnswer) detailedResultsHTML += `❌ `; // Kullanıcı seçti ama yanlışsa
             else detailedResultsHTML += `➖ `; // Diğer durumlar

             detailedResultsHTML += `${opt}`;

             if (userSelectedThis) detailedResultsHTML += ` <span class="user-answer">(Sizin Cevabınız)</span>`;
             if (isCorrectAnswer && !userSelectedThis) detailedResultsHTML += ` <span class="correct-answer">(Doğru Cevap)</span>`; // Kullanıcı seçmediyse doğruyu göster

            detailedResultsHTML += `</div>`;

        });
         detailedResultsHTML += `</div>`; // result-options kapanışı

        if (!isCorrect && q.userSelection !== null && q.userSelection !== undefined && q.userSelection.length !== 0) {
             let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
             detailedResultsHTML += `<span class="correct-answer"><strong>Doğru Cevap:</strong> ${correctAnswerText}</span>`;
        }

        detailedResultsHTML += `</div>`; // result-question kapanışı
    });


    // Genel Sonuç Mesajı
    let resultMessage = `<h2>Test Tamamlandı!</h2>`;
    resultMessage += `Toplam ${questions.length} sorudan ${correctAnswersCount} tanesini doğru cevapladınız.<br>`;
    const passed = correctAnswersCount >= passingScore;
    resultMessage += passed
        ? `<strong style="color:green;">Tebrikler, Testi GEÇTİNİZ!</strong>`
        : `<strong style="color:red;">Maalesef, Testi GEÇEMEDİNİZ. (Gerekli: ${passingScore} doğru)</strong>`;

    resultDiv.innerHTML = resultMessage + '<hr>' + detailedResultsHTML; // Genel mesaj + detaylar
    resultDiv.style.display = "block";

    // Butonları ve soru alanını gizle/devre dışı bırak
    questionAreaDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    questionNumbersDiv.style.display = 'none'; // Soru numaralarını da gizle
    timeLimitDiv.style.display = 'none'; // Zamanı da gizle
}

/** İleri/Geri/Bitir Butonlarının Görünürlüğünü Ayarlar */
function updateButtonVisibility() {
    previousButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;
    finishButton.style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
    nextButton.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
    reviewButton.disabled = false; // Gözden geçir butonu hep aktif olabilir
}

// --- BAŞLANGIÇ ---
displayQuestionNumbers(); // Numaraları oluştur
displayQuestion(); // İlk soruyu göster
startTimer(); // Zamanlayıcıyı başlat

// --- OLAY DİNLEYİCİLERİ ---
nextButton.addEventListener("click", handleNext);
previousButton.addEventListener("click", handlePrevious);
reviewButton.addEventListener("click", handleReview); // ID'si 'review' olan butona bağladık
finishButton.addEventListener("click", finishQuiz); // finishQuiz fonksiyonuna bağlandı
