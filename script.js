// --- SORULAR (Aynı kalabilir, state eklendi) ---
const questions = [
    // ... (Önceki kodda olduğu gibi, her soruya status: 'unanswered', userSelection: null eklenmiş haliyle)
    {
        question: "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        options: [
            "To look after the area in which you live and the environment",
            "To look after yourself and your family",
            "To stay in the UK forever",
            "To promote work in your local community"
        ],
        answer: ["To look after the area in which you live and the environment", "To look after yourself and your family"],
        status: 'unanswered', userSelection: null, checked: false // checked: Kontrol edilip edilmediğini tutar
    },
     {
        question: "Where is Big Ben located?",
        options: ["Buckingham Palace", "The Tower of London", "Trafalgar Square", "The Houses of the Parliament"],
        answer: "The Houses of the Parliament",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "When were men and women given the right to vote at the age of 21?",
        options: ["1918", "1903", "1928", "1923"],
        answer: "1928",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Where is the UK geographically located?",
        options: ["South west of Europe", "North east of Europe", "North west of Europe", "South east of Europe"],
        answer: "North west of Europe",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who is the patron Saint of Scotland?",
        options: ["St David", "St Patrick", "St George", "St Andrew"],
        answer: "St Andrew",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Which two houses fought in the Wars of the Roses?",
        options: ["The House of Chester", "The House of York", "The House of Lancaster", "The House of Newcastle"],
        answer: ["The House of York", "The House of Lancaster"],
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        options: ["True", "False"],
        answer: "False",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What is the Cenotaph?",
        options: ["A flower", "A Christian church", "A war memorial", "A theatre"],
        answer: "A war memorial",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Mary Stuart", "Theresa May", "Margaret Thatcher"],
        answer: "Margaret Thatcher",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who chairs the debates at the House of Commons?",
        options: ["A bishop", "The Prime Minister", "The Speaker", "The archbishop of Canterbury"],
        answer: "The Speaker",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who was the captain of the English football team that won the World Cup in 1966?",
        options: ["Sir Roger Bannister", "Sir Jackie Stewart", "Sir Ian Botham", "Bobby Moore"],
        answer: "Bobby Moore",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "When did the English defeat the Spanish Armada?",
        options: ["1466", "1066", "1254", "1588"],
        answer: "1588",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        options: ["True", "False"],
        answer: "True",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What is the minimum age required to serve on a jury?",
        options: ["16", "18", "21", "25"],
        answer: "18",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "How is a jury selected?",
        options: ["From the NHS registration system", "Randomly from the electoral register", "Alphabetically from the telephone directory", "From a postcode selection"],
        answer: "Randomly from the electoral register",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What is a bank holiday?",
        options: ["A public holiday when banks are open all day", "A public holiday for people working in banks", "An additional day off that every worker in the UK is entitled to", "A public holiday when banks and many other businesses are closed for the day"],
        answer: "A public holiday when banks and many other businesses are closed for the day",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What will you be given to vote before a general election takes place?",
        options: ["A ballot slip", "A poll card", "A voting slip", "A poll tax relief"],
        answer: "A poll card",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Which of the following statements is correct?",
        options: ["Solicitors’ charges are usually based on how much time they spend on a case", "Solicitors’ charges are usually based on the nature of a case and its importance"],
        answer: "Solicitors’ charges are usually based on how much time they spend on a case",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        options: ["Television", "Internet", "Newspapers", "Radio"],
        answer: ["Television", "Radio"],
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        options: ["Northern Ireland", "Wales", "The Channel Islands", "Scotland"],
        answer: "The Channel Islands",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What did Sir Frank Whittle invent in the 1930s?",
        options: ["Radar", "Hovercraft", "Jet engine", "Ballpoint pen"],
        answer: "Jet engine",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who wrote ‘The Daffodils’?",
        options: ["William Blake", "Robert Browning", "Lord Byron", "William Wordsworth"],
        answer: "William Wordsworth",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "Who was given the title of Lord Protector?",
        options: ["Charles I", "Charles II", "Winston Churchill", "Oliver Cromwell"],
        answer: "Oliver Cromwell",
        status: 'unanswered', userSelection: null, checked: false
    },
     {
        question: "What are the 40 days before Easter called?",
        options: ["Diwali", "Lent", "Hannukah", "Vaisakhi"],
        answer: "Lent",
        status: 'unanswered', userSelection: null, checked: false
    }
];

// --- DEĞİŞKENLER ---
let currentQuestion = 0;
let timerInterval = null;
let timeRemaining = 45 * 60;
const passingScore = 18;

// --- DOM ELEMENTLERİ ---
const questionNumbersDiv = document.querySelector(".question-numbers");
const questionWrapperDiv = document.getElementById("question-wrapper"); // Yeni sarmalayıcı
const questionAreaDiv = document.querySelector(".question-area");
const previousButton = document.getElementById("previous");
const reviewButton = document.getElementById("review");
const checkButton = document.getElementById("check");     // Yeni buton
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const resultDiv = document.getElementById("result");
const timeLimitDiv = document.getElementById("time-limit");

// --- FONKSİYONLAR ---

function startTimer() { /* Önceki kodla aynı */
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() { /* Önceki kodla aynı */
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeLimitDiv.textContent = `Kalan Süre: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
     if (timeRemaining < 60 && timeRemaining > 0) {
        timeLimitDiv.style.color = 'red';
        timeLimitDiv.style.fontWeight = 'bold';
    } else if (timeRemaining > 0) {
         timeLimitDiv.style.color = 'inherit'; // Süre > 1dk ise normale dön
         timeLimitDiv.style.fontWeight = 'normal';
     } else {
         timeLimitDiv.textContent = "Süre Doldu!";
         timeLimitDiv.style.color = 'red';
         timeLimitDiv.style.fontWeight = 'bold';
     }
}


/** Mevcut Soruyu Ekranda Gösterir ve Gerekli Event Listenerları Ekler */
function displayQuestion() {
    // Önceki soruya ait CHECK sonrası geri bildirimleri temizle
    clearFeedback();

    const question = questions[currentQuestion];
    const isMultiAnswer = Array.isArray(question.answer);
    const inputType = isMultiAnswer ? 'checkbox' : 'radio';

    let optionsHTML = question.options.map((option, index) => {
        const inputId = `option_${currentQuestion}_${index}`;
        // Seçili durumu kontrol et (userSelection'a göre)
         let isChecked = false;
         if (question.userSelection) {
             isChecked = isMultiAnswer
                 ? question.userSelection.includes(option)
                 : question.userSelection === option;
         }

        // '.selected' class'ını da userSelection'a göre ekle
        const selectedClass = isChecked ? 'selected' : '';

        return `
            <div class="option ${selectedClass}">
                <input type="${inputType}" name="answer_${currentQuestion}" id="${inputId}" value="${option}" ${isChecked ? 'checked' : ''}>
                <label for="${inputId}">${option}</label>
            </div>
        `;
    }).join('');

    questionAreaDiv.innerHTML = `
        <div class="question">
            <strong>Soru ${currentQuestion + 1} / ${questions.length}</strong>
            <div class="question-text"><strong>${question.question}</strong></div>
            <div class="audio-icon"></div>
        </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `;

    // Seçeneklere tıklama (change) olayını ekle (anında seçili gösterme)
    const optionInputs = questionAreaDiv.querySelectorAll('.options input');
    optionInputs.forEach(input => {
        input.addEventListener('change', handleOptionChange);
    });

    // Eğer soru daha önce CHECK edilmişse, geri bildirimi tekrar göster
    if (question.checked) {
        showCheckFeedback();
    }

    updateButtonStates(); // Butonların aktif/pasif durumunu ayarla
    updateNumberDivs();
}


/** Seçenek Seçildiğinde Çalışır (Anında Görsel Geri Bildirim) */
function handleOptionChange(event) {
     const currentOptionsContainer = event.target.closest('.options');
     const allOptionDivs = currentOptionsContainer.querySelectorAll('.option');
     const inputType = event.target.type;

     // Önce tüm seçeneklerden 'selected' classını kaldır (radio için gerekli)
     if (inputType === 'radio') {
         allOptionDivs.forEach(div => div.classList.remove('selected'));
     }

     // Seçilen elemanın parent (.option) div'ine 'selected' classını ekle/kaldır
     const parentDiv = event.target.closest('.option');
     if (event.target.checked) {
         parentDiv.classList.add('selected');
     } else {
         // Sadece checkbox için geçerli
         parentDiv.classList.remove('selected');
     }

     // Cevabı state'e kaydet (implicit save on select)
     storeCurrentAnswer();
     // Seçim yapıldığında 'answered' durumuna geç (eğer 'review' değilse)
     if (questions[currentQuestion].status !== 'review') {
          questions[currentQuestion].status = 'answered';
          updateNumberDivs(); // Numara rengini güncelle
     }
}

/** CHECK Sonrası Görsel Geri Bildirimleri Temizler */
function clearFeedback() {
    questionWrapperDiv.classList.remove('correct-answer', 'incorrect-answer');
    const optionDivs = questionAreaDiv.querySelectorAll('.option');
    optionDivs.forEach(div => {
        div.classList.remove('marked-correct', 'marked-incorrect');
    });
}


/** Soru Numaralarını Oluşturur ve Tıklama Olaylarını Ekler */
function displayQuestionNumbers() { /* Önceki kodla büyük ölçüde aynı */
    questionNumbersDiv.innerHTML = '';
    questions.forEach((question, index) => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = index + 1;
        numberDiv.dataset.index = index;

        numberDiv.addEventListener("click", () => {
            // storeCurrentAnswer(); // Gidilen soruya tıklayınca kaydetme yapmayalım, karışıklık olabilir
            currentQuestion = index;
            displayQuestion();
        });
        questionNumbersDiv.appendChild(numberDiv);
    });
    updateNumberDivs();
}

/** Soru Numaralarının Görünümünü Günceller (Aktif, Cevaplandı, İncelenecek) */
function updateNumberDivs() { /* Önceki kodla büyük ölçüde aynı, sadece .answered kaldırıldı */
    const numberDivs = document.querySelectorAll(".number");
    numberDivs.forEach((div, index) => {
        const question = questions[index];
        div.classList.remove("active", "review"); // Temizle (answered kaldırıldı)

        if (index === currentQuestion) {
            div.classList.add("active");
        }

        // Sadece review durumunu işaretle
        if (question.status === 'review') {
            div.classList.add("review");
        }
        // Doğru/Yanlış durumu sadece test bitince gösterilecek
    });
}

/** Mevcut Sorudaki Kullanıcı Seçimlerini State'e Kaydeder */
function storeCurrentAnswer() {
    const question = questions[currentQuestion];
    if (!question) return; // Ekstra kontrol

    const isMultiAnswer = Array.isArray(question.answer);
    const inputs = questionAreaDiv.querySelectorAll(`.options input[name="answer_${currentQuestion}"]:checked`);

    if (isMultiAnswer) {
        question.userSelection = Array.from(inputs).map(cb => cb.value);
    } else {
        question.userSelection = inputs.length > 0 ? inputs[0].value : null;
    }

    // Eğer seçim yapıldıysa ve status review değilse, answered yap
    // Eğer seçim kaldırıldıysa (checkbox) ve status review değilse unanswered yap
    if (question.status !== 'review') {
         const hasSelection = isMultiAnswer ? question.userSelection.length > 0 : question.userSelection !== null;
         question.status = hasSelection ? 'answered' : 'unanswered';
    }

    // console.log(`Soru ${currentQuestion + 1} kaydedildi:`, question.userSelection, "Status:", question.status);
}


/** Sonraki Soruya Geçer */
function handleNext() {
    // storeCurrentAnswer(); // DisplayQuestion başında temizlik yaptığı için burada kaydetmeye gerek yok gibi, ama garanti olsun.
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

/** Önceki Soruya Geçer */
function handlePrevious() {
    // storeCurrentAnswer(); // DisplayQuestion başında temizlik yaptığı için burada kaydetmeye gerek yok gibi
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

/** Soruyu "Sonra Bak" Olarak İşaretler VE Sonraki Soruya Geçer */
function handleReview() {
    const question = questions[currentQuestion];
    question.status = 'review';
    // storeCurrentAnswer(); // Review'a basınca o anki seçimi de saklayalım
    updateNumberDivs(); // Numarayı sarı yap

    // Sonraki soruya geç
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Son sorudaysa, sadece işaretle, geçiş yapma
         displayQuestion(); // Buton durumlarını güncellemek için
    }
}

/** Mevcut Sorunun Cevabını Kontrol Eder ve Geri Bildirim Verir */
function handleCheck() {
    storeCurrentAnswer(); // En güncel seçimi al
    const question = questions[currentQuestion];

    // Eğer hiç seçim yapılmadıysa uyarı verilebilir (isteğe bağlı)
    const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
    if (!hasSelection) {
        alert("Lütfen bir cevap seçiniz.");
        return;
    }

    question.checked = true; // Bu sorunun kontrol edildiğini işaretle
    showCheckFeedback(); // Görsel geri bildirimi göster
    updateButtonStates(); // Check ve Review butonlarını devre dışı bırak
}


/** Check Sonrası Görsel Geri Bildirimi Uygular */
function showCheckFeedback() {
     clearFeedback(); // Önce varsa eski geri bildirimi temizle
     const question = questions[currentQuestion];
     const userSelection = question.userSelection;
     const correctAnswer = question.answer;
     const isMultiAnswer = Array.isArray(correctAnswer);
     let isCorrect = false;

     // Doğruluğu kontrol et
     if (isMultiAnswer) {
         if (userSelection && userSelection.length === correctAnswer.length) {
             isCorrect = correctAnswer.every(ans => userSelection.includes(ans));
         }
     } else {
         isCorrect = userSelection === correctAnswer;
     }

     // Soru alanı arka planını ayarla
     questionWrapperDiv.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');

     // Seçenekleri işaretle
     const optionDivs = questionAreaDiv.querySelectorAll('.option');
     optionDivs.forEach(div => {
         const input = div.querySelector('input');
         const optionValue = input.value;
         const isSelected = input.checked; // Veya userSelection'dan kontrol edilebilir

         let isThisOptionCorrect = false;
         if (isMultiAnswer) {
             isThisOptionCorrect = correctAnswer.includes(optionValue);
         } else {
             isThisOptionCorrect = correctAnswer === optionValue;
         }

         if (isThisOptionCorrect) {
             div.classList.add('marked-correct'); // Doğru cevabı yeşil yap
         }

         if (isSelected && !isThisOptionCorrect) {
             div.classList.add('marked-incorrect'); // Kullanıcının yanlış seçimini kırmızı yap
         }
     });
}


/** Testi Bitirir */
function finishQuiz() { /* Önceki kodla büyük ölçüde aynı, sadece cevap kontrol mantığı zaten check ile yapıldığı için basitleşebilir veya aynı kalabilir */
    clearInterval(timerInterval);
    storeCurrentAnswer(); // Son soruyu kaydet

    let correctAnswersCount = 0;
     // Sonuçları hesaplarken 'checked' durumuna bakmadan doğrudan userSelection ve answer karşılaştırılır
     questions.forEach(q => {
          let isCorrect = false;
          const isMulti = Array.isArray(q.answer);
          if (isMulti) {
               if (q.userSelection && q.userSelection.length === q.answer.length) {
                    isCorrect = q.answer.every(ans => q.userSelection.includes(ans));
               }
          } else {
               isCorrect = q.userSelection === q.answer;
          }
          if (isCorrect) correctAnswersCount++;
     });


    let resultMessage = `<h2>Test Tamamlandı!</h2>`;
    resultMessage += `Toplam ${questions.length} sorudan ${correctAnswersCount} tanesini doğru cevapladınız.<br>`;
    const passed = correctAnswersCount >= passingScore;
    resultMessage += passed
        ? `<strong style="color:green;">Tebrikler, Testi GEÇTİNİZ!</strong>`
        : `<strong style="color:red;">Maalesef, Testi GEÇEMEDİNİZ. (Gerekli: ${passingScore} doğru)</strong>`;

    // Detaylı sonuçları gösterme kısmı eklenebilir (önceki kodda vardı)
    // resultDiv.innerHTML = resultMessage + '<hr>' + detailedResultsHTML;
    resultDiv.innerHTML = resultMessage; // Şimdilik sadece özet
    resultDiv.style.display = "block";

    // Diğer elementleri gizle
    questionWrapperDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    questionNumbersDiv.style.display = 'none';
    timeLimitDiv.style.display = 'none';
}


/** Butonların Aktif/Pasif Durumlarını ve Görünürlüğünü Ayarlar */
function updateButtonStates() {
    const question = questions[currentQuestion];

    previousButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;

    // CHECK ve REVIEW butonları, soru daha önce CHECK edilmemişse aktif olsun
    checkButton.disabled = question.checked;
    reviewButton.disabled = question.checked;

    // Son sorudaysa NEXT'i gizle, FINISH'i göster
    finishButton.style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
    nextButton.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
}

// --- BAŞLANGIÇ ---
displayQuestionNumbers();
displayQuestion(); // displayQuestion şimdi buton state'lerini de ayarlıyor
startTimer();

// --- OLAY DİNLEYİCİLERİ ---
previousButton.addEventListener("click", handlePrevious);
reviewButton.addEventListener("click", handleReview);
checkButton.addEventListener("click", handleCheck); // Yeni butonun listener'ı
nextButton.addEventListener("click", handleNext);
finishButton.addEventListener("click", finishQuiz);
