// --- SORULAR (Her soruya status, userSelection, checked, isCorrect eklenmiş) ---
const questions = [
    {
        question: "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        options: [ "To look after the area in which you live and the environment", "To look after yourself and your family", "To stay in the UK forever", "To promote work in your local community" ],
        answer: ["To look after the area in which you live and the environment", "To look after yourself and your family"],
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Where is Big Ben located?",
        options: ["Buckingham Palace", "The Tower of London", "Trafalgar Square", "The Houses of the Parliament"],
        answer: "The Houses of the Parliament",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "When were men and women given the right to vote at the age of 21?",
        options: ["1918", "1903", "1928", "1923"],
        answer: "1928",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Where is the UK geographically located?",
        options: ["South west of Europe", "North east of Europe", "North west of Europe", "South east of Europe"],
        answer: "North west of Europe",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who is the patron Saint of Scotland?",
        options: ["St David", "St Patrick", "St George", "St Andrew"],
        answer: "St Andrew",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Which two houses fought in the Wars of the Roses?",
        options: ["The House of Chester", "The House of York", "The House of Lancaster", "The House of Newcastle"],
        answer: ["The House of York", "The House of Lancaster"],
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        options: ["True", "False"],
        answer: "False",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What is the Cenotaph?",
        options: ["A flower", "A Christian church", "A war memorial", "A theatre"],
        answer: "A war memorial",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Mary Stuart", "Florence Nightingale", "Theresa May", "Margaret Thatcher"],
        answer: "Margaret Thatcher",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who chairs the debates at the House of Commons?",
        options: ["A bishop", "The Prime Minister", "The Speaker", "The archbishop of Canterbury"],
        answer: "The Speaker",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who was the captain of the English football team that won the World Cup in 1966?",
        options: ["Sir Roger Bannister", "Sir Jackie Stewart", "Sir Ian Botham", "Bobby Moore"],
        answer: "Bobby Moore",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "When did the English defeat the Spanish Armada?",
        options: ["1466", "1066", "1254", "1588"],
        answer: "1588",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        options: ["True", "False"],
        answer: "True",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What is the minimum age required to serve on a jury?",
        options: ["16", "18", "21", "25"],
        answer: "18",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "How is a jury selected?",
        options: ["From the NHS registration system", "Randomly from the electoral register", "Alphabetically from the telephone directory", "From a postcode selection"],
        answer: "Randomly from the electoral register",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What is a bank holiday?",
        options: ["A public holiday when banks are open all day", "A public holiday for people working in banks", "An additional day off that every worker in the UK is entitled to", "A public holiday when banks and many other businesses are closed for the day"],
        answer: "A public holiday when banks and many other businesses are closed for the day",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What will you be given to vote before a general election takes place?",
        options: ["A ballot slip", "A poll card", "A voting slip", "A poll tax relief"],
        answer: "A poll card",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Which of the following statements is correct?",
        options: ["Solicitors’ charges are usually based on how much time they spend on a case", "Solicitors’ charges are usually based on the nature of a case and its importance"],
        answer: "Solicitors’ charges are usually based on how much time they spend on a case",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        options: ["Television", "Internet", "Newspapers", "Radio"],
        answer: ["Television", "Radio"],
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        options: ["Northern Ireland", "Wales", "The Channel Islands", "Scotland"],
        answer: "The Channel Islands",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What did Sir Frank Whittle invent in the 1930s?",
        options: ["Radar", "Hovercraft", "Jet engine", "Ballpoint pen"],
        answer: "Jet engine",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who wrote ‘The Daffodils’?",
        options: ["William Blake", "Robert Browning", "Lord Byron", "William Wordsworth"],
        answer: "William Wordsworth",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "Who was given the title of Lord Protector?",
        options: ["Charles I", "Charles II", "Winston Churchill", "Oliver Cromwell"],
        answer: "Oliver Cromwell",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    },
     {
        question: "What are the 40 days before Easter called?",
        options: ["Diwali", "Lent", "Hannukah", "Vaisakhi"],
        answer: "Lent",
        status: 'unanswered', userSelection: null, checked: false, isCorrect: null
    }
];


// --- DEĞİŞKENLER ---
let currentQuestion = 0;
let timerInterval = null;
let timeRemaining = 45 * 60;
const passingScore = 18;

// --- DOM ELEMENTLERİ ---
const questionNumbersDiv = document.querySelector(".question-numbers");
const questionWrapperDiv = document.getElementById("question-wrapper");
const questionAreaDiv = document.querySelector(".question-area");
const previousButton = document.getElementById("previous");
const reviewButton = document.getElementById("review"); // Artık dinamik olacak
const checkNextButton = document.getElementById("check-next-btn"); // Bu da dinamik
const finishButton = document.getElementById("finish");
const resultDiv = document.getElementById("result");
const timeLimitDiv = document.getElementById("time-limit");

// --- FONKSİYONLAR ---

/** Zamanlayıcıyı Başlatır */
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

/** Zamanlayıcı Ekranını Günceller */
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeLimitDiv.textContent = `Time Limit: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
     if (timeRemaining < 60 && timeRemaining > 0) {
        timeLimitDiv.style.color = '#cf2e2e';
        timeLimitDiv.style.fontWeight = 'bold';
    } else if (timeRemaining > 0) {
         timeLimitDiv.style.color = '#cf2e2e';
         timeLimitDiv.style.fontWeight = 'bold';
     } else {
         timeLimitDiv.textContent = "Time Expired!";
         timeLimitDiv.style.color = '#cf2e2e';
         timeLimitDiv.style.fontWeight = 'bold';
     }
}

/** CHECK Sonrası Görsel Geri Bildirimleri Temizler */
function clearFeedback() {
    const optionDivs = questionAreaDiv.querySelectorAll('.option');
    optionDivs.forEach(div => {
        div.classList.remove('marked-correct', 'marked-incorrect');
    });
}

/** Soru Numaralarını Oluşturur ve Tıklama Olaylarını Ekler */
function displayQuestionNumbers() {
    questionNumbersDiv.innerHTML = '';
    questions.forEach((question, index) => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        numberDiv.textContent = index + 1;
        numberDiv.dataset.index = index;

        numberDiv.addEventListener("click", () => {
            const currentQ = questions[currentQuestion];
            // Eğer mevcut soru check edilmemişse VEYA butonlardan biri NEXT modundaysa geçiş yap
             if (!currentQ.checked || checkNextButton.dataset.mode === 'next' || reviewButton.dataset.mode === 'next-after-review') {
                currentQuestion = index;
                displayQuestion();
            } else {
                 alert("Please press NEXT to continue.");
            }
        });
        questionNumbersDiv.appendChild(numberDiv);
    });
    updateNumberDivs();
}

/** Soru Numaralarının Görünümünü Günceller (Aktif, Review, Correct, Incorrect) */
function updateNumberDivs() {
    const numberDivs = document.querySelectorAll(".number");
    numberDivs.forEach((div, index) => {
        const question = questions[index];
        div.classList.remove("active", "review", "correct", "incorrect");

        if (question.checked) { // Check edilmişse Doğru/Yanlış öncelikli
            if (question.isCorrect === true) {
                div.classList.add("correct");
            } else if (question.isCorrect === false) {
                div.classList.add("incorrect");
            }
        } else if (question.status === 'review') { // Check edilmemiş ve review ise sarı
            div.classList.add("review");
        }

        if (index === currentQuestion) { // Aktif soru her zaman mavi
            div.classList.add("active");
        }
    });
}


/** Mevcut Sorudaki Kullanıcı Seçimlerini State'e Kaydeder */
function storeCurrentAnswer() {
    const question = questions[currentQuestion];
    // Soru yoksa veya zaten check edilmişse tekrar kaydetme
    // Review moduna geçişte de kaydetmek isteyebiliriz, bu yüzden check kontrolünü kaldırıyoruz.
    if (!question) return;
    // Sadece inputlar etkinse (yani check edilmemişse) kaydet
    const firstInput = questionAreaDiv.querySelector('.options input');
    if (firstInput && !firstInput.disabled) {
        const isMultiAnswer = Array.isArray(question.answer);
        const inputs = questionAreaDiv.querySelectorAll(`.options input[name="answer_${currentQuestion}"]:checked`);

        if (isMultiAnswer) {
            question.userSelection = Array.from(inputs).map(cb => cb.value);
        } else {
            question.userSelection = inputs.length > 0 ? inputs[0].value : null;
        }

        // Seçim durumu status'u etkiler (eğer status 'review' değilse)
        if (question.status !== 'review') {
             const hasSelection = isMultiAnswer ? question.userSelection.length > 0 : question.userSelection !== null;
             question.status = hasSelection ? 'answered' : 'unanswered';
        }
    }
}

/** Check Sonrası Görsel Geri Bildirimi Uygular */
function showCheckFeedback() {
     clearFeedback();
     const question = questions[currentQuestion];
     const userSelection = question.userSelection;
     const correctAnswer = question.answer;
     const isMultiAnswer = Array.isArray(correctAnswer);

     // Seçenekleri işaretle
     const optionDivs = questionAreaDiv.querySelectorAll('.option');
     optionDivs.forEach(div => {
         const input = div.querySelector('input');
         const optionValue = input.value;
         let isSelected = false;
          if(userSelection){
               isSelected = isMultiAnswer ? userSelection.includes(optionValue) : userSelection === optionValue;
          }

         let isThisOptionCorrect = false;
         if (isMultiAnswer) {
             isThisOptionCorrect = correctAnswer.includes(optionValue);
         } else {
             isThisOptionCorrect = correctAnswer === optionValue;
         }

         if (isThisOptionCorrect) {
             div.classList.add('marked-correct');
         }
         if (isSelected && !isThisOptionCorrect) {
             div.classList.add('marked-incorrect');
         }
     });
}


/** Mevcut Soruyu Ekranda Gösterir ve Gerekli Ayarları Yapar */
function displayQuestion() {
    clearFeedback();

    const question = questions[currentQuestion];
    if (!question) return;

    // Butonları varsayılan modlarına resetle
    resetDynamicButtons();

    const isMultiAnswer = Array.isArray(question.answer);
    const inputType = isMultiAnswer ? 'checkbox' : 'radio';

    let optionsHTML = question.options.map((option, index) => {
        const inputId = `option_${currentQuestion}_${index}`;
        let isChecked = false;
        if (question.userSelection) {
            isChecked = isMultiAnswer
                ? question.userSelection.includes(option)
                : question.userSelection === option;
        }
        const selectedClass = isChecked && !question.checked ? 'selected' : '';
        const disabledAttr = question.checked ? 'disabled' : '';

        return `
            <div class="option ${selectedClass} ${question.checked ? 'disabled' : ''}">
                <input type="${inputType}" name="answer_${currentQuestion}" id="${inputId}" value="${option}" ${isChecked ? 'checked' : ''} ${disabledAttr}>
                <label for="${inputId}">${option}</label>
            </div>
        `;
    }).join('');

    questionAreaDiv.innerHTML = `
        <div class="question">
            <strong>Question ${currentQuestion + 1} / ${questions.length}</strong>
            <div class="question-text"><strong>${question.question}</strong></div>
            <div class="audio-icon"></div>
        </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `;

    // Seçeneklere tıklama olayını ekle (sadece check edilmemişse)
    if (!question.checked) {
        const optionInputs = questionAreaDiv.querySelectorAll('.options input');
        optionInputs.forEach(input => {
            input.addEventListener('change', handleOptionChange);
        });
    }

    // Eğer soru daha önce CHECK edilmişse, geri bildirimi ve buton durumunu ayarla
    if (question.checked) {
        showCheckFeedback();
        // Check edilmişse checkNextButton NEXT moduna geçer, Review butonu pasif kalır
        setButtonToNextMode(checkNextButton);
        reviewButton.disabled = true; // Review butonu pasif
        previousButton.disabled = true; // Previous da pasif
    } else {
        // Soru check edilmemişse buton durumlarını normal ayarla
        updateButtonStates();
    }

    updateNumberDivs(); // Numara renklerini her durumda güncelle
}


/** Seçenek Seçildiğinde/Değiştirildiğinde Çalışır */
function handleOptionChange(event) {
     const currentOptionsContainer = event.target.closest('.options');
     const allOptionDivs = currentOptionsContainer.querySelectorAll('.option');
     const inputType = event.target.type;

     if (inputType === 'radio') {
         allOptionDivs.forEach(div => div.classList.remove('selected'));
     }
     const parentDiv = event.target.closest('.option');
     if (event.target.checked) {
         parentDiv.classList.add('selected');
     } else {
         parentDiv.classList.remove('selected');
     }

     storeCurrentAnswer();
     updateButtonStates(); // CHECK butonunu etkinleştir/devre dışı bırak
}

/** Dinamik Butonları (Review ve Check/Next) Başlangıç Moduna Döndürür */
function resetDynamicButtons() {
    // Review Butonunu Resetle
    reviewButton.textContent = "REVIEW";
    reviewButton.dataset.mode = "review";
    reviewButton.classList.remove('mode-next-after-review'); // Yeşil stili kaldır
    reviewButton.disabled = questions[currentQuestion].checked; // Check edilmişse pasif

    // Check/Next Butonunu Resetle
    checkNextButton.textContent = "CHECK";
    checkNextButton.dataset.mode = "check";
    checkNextButton.classList.remove('mode-next');
    checkNextButton.classList.add('mode-check');
    checkNextButton.style.display = 'inline-block'; // Görünür yap

    // Finish Butonunu Gizle
    finishButton.style.display = 'none';

    // Diğer butonların ve kendilerinin aktiflik durumunu ayarla
    updateButtonStates();
}

/** Check/Next Butonunu NEXT Moduna Ayarlar */
function setButtonToNextMode(button) {
    button.textContent = "NEXT";
    button.dataset.mode = "next";
    button.classList.remove('mode-check');
    button.classList.add('mode-next');
    button.disabled = false; // NEXT modu aktif

    // Son sorudaysa NEXT yerine FINISH göster
    if (currentQuestion === questions.length - 1) {
        button.style.display = 'none';
        finishButton.style.display = 'inline-block';
        finishButton.disabled = false;
    } else {
         button.style.display = 'inline-block';
         finishButton.style.display = 'none';
    }
}

/** Review Butonunu NEXT Moduna Ayarlar */
function setReviewButtonToNextMode(button) {
    button.textContent = "NEXT";
    button.dataset.mode = "next-after-review"; // Farklı mod adı
    button.classList.add('mode-next-after-review'); // Yeşil stil için class
    button.disabled = false; // NEXT modu aktif

     // Son sorudaysa REVIEW'dan sonra da FINISH göster
     if (currentQuestion === questions.length - 1) {
        button.style.display = 'none'; // REVIEW(NEXT)'i gizle
        finishButton.style.display = 'inline-block';
        finishButton.disabled = false;
    } else {
         button.style.display = 'inline-block';
         finishButton.style.display = 'none';
    }
}


/** CHECK veya NEXT Butonuna Tıklandığında Çalışır */
function handleCheckOrNext() {
    const mode = checkNextButton.dataset.mode;
    const question = questions[currentQuestion];

    if (mode === "check") {
        // --- CHECK Modu ---
        storeCurrentAnswer();

        const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
        if (!hasSelection) {
            alert("Please select an answer.");
            return;
        }

        const correctAnswer = question.answer;
        const isMultiAnswer = Array.isArray(correctAnswer);
        let isCorrect = false;
        if (isMultiAnswer) {
            if (question.userSelection && question.userSelection.length === correctAnswer.length) {
                isCorrect = correctAnswer.every(ans => question.userSelection.includes(ans));
            }
        } else {
            isCorrect = question.userSelection === correctAnswer;
        }
        question.isCorrect = isCorrect;
        question.checked = true;

        if (question.status === 'review') {
             question.status = 'answered'; // Review durumunu kaldır
        }

        showCheckFeedback();
        updateNumberDivs();

        const optionInputs = questionAreaDiv.querySelectorAll('.options input');
        optionInputs.forEach(input => input.disabled = true);
        questionAreaDiv.querySelectorAll('.options .option').forEach(div => div.classList.add('disabled'));

        // Butonu NEXT moduna geçir ve diğerlerini pasifleştir
        setButtonToNextMode(checkNextButton);
        previousButton.disabled = true;
        reviewButton.disabled = true; // Check sonrası Review da pasifleşir

    } else if (mode === "next") {
        // --- NEXT Modu (Check sonrası) ---
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
             // Bu butona basılma durumu normalde olmaz, finish butonu görünür.
             finishQuiz();
        }
    }
}

/** REVIEW Butonuna Tıklandığında veya Review Sonrası NEXT'e Tıklandığında Çalışır */
function handleReview() {
    const question = questions[currentQuestion];
    const mode = reviewButton.dataset.mode;

    if (mode === "review") {
        // --- REVIEW Modu ---
        if (question.checked) return; // Check edilmişse review yapılamaz

        storeCurrentAnswer(); // O anki seçimi sakla
        question.status = 'review'; // Durumu review yap
        updateNumberDivs(); // Numarayı sarı yap

        // Review butonunu NEXT moduna geçir
        setReviewButtonToNextMode(reviewButton);

        // Diğer butonları pasifleştir
        previousButton.disabled = true;
        checkNextButton.disabled = true;

    } else if (mode === "next-after-review") {
        // --- NEXT Modu (Review sonrası) ---
         if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion(); // Yeni soruyu göster (butonları resetler)
        } else {
             // Bu butona basılma durumu normalde olmaz, finish butonu görünür.
             finishQuiz();
        }
    }
}

/** Önceki Soruya Gider */
function handlePrevious() {
    const currentQ = questions[currentQuestion];
    // Soru check edilmemişse VE butonlar normal moddaysa (NEXT'e dönüşmemişse) izin ver
    if (!currentQ.checked && reviewButton.dataset.mode === 'review' && checkNextButton.dataset.mode === 'check') {
       if (currentQuestion > 0) {
            // storeCurrentAnswer(); // Gitmeden kaydetmek iyi olabilir
            currentQuestion--;
            displayQuestion();
        }
    }
}


/** Testi Bitirir ve Detaylı Sonuçları Gösterir */
function finishQuiz() {
    clearInterval(timerInterval);

    let correctAnswersCount = questions.filter(q => q.isCorrect === true).length;

    let detailedResultsHTML = '<hr><h2>Detailed Results:</h2>';
    questions.forEach((q, index) => {
        const isCorrect = q.isCorrect;
        const questionResultClass = ['result-question'];

        if (isCorrect === true) {
            questionResultClass.push('correct');
        } else if (q.checked) {
             questionResultClass.push('incorrect');
        }

        detailedResultsHTML += `<div class="${questionResultClass.join(' ')}">`;
        detailedResultsHTML += `<strong>Question ${index + 1}:</strong> ${q.question}<br>`;

        detailedResultsHTML += `<div class="result-options"><strong>Options:</strong><br>`;
        q.options.forEach(opt => {
            let userSelectedThis = false;
            let isCorrectAnswer = false;
            const isMulti = Array.isArray(q.answer);

            if (isMulti) isCorrectAnswer = q.answer.includes(opt);
            else isCorrectAnswer = q.answer === opt;

            if (q.userSelection){
                 if (Array.isArray(q.userSelection)) userSelectedThis = q.userSelection.includes(opt);
                 else userSelectedThis = q.userSelection === opt;
            }

            detailedResultsHTML += `<div class="option">`;
             if(isCorrectAnswer) detailedResultsHTML += `✅ `;
             else if (userSelectedThis && !isCorrectAnswer) detailedResultsHTML += `❌ `;
             else detailedResultsHTML += `➖ `;
             detailedResultsHTML += `${opt}`;
             if (userSelectedThis) detailedResultsHTML += ` <span class="user-answer">(Your Answer)</span>`;
            detailedResultsHTML += `</div>`;
        });
        detailedResultsHTML += `</div>`;

         if (isCorrect === false && q.checked) {
              let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
              detailedResultsHTML += `<div class="correct-answer-text"><strong>Correct Answer:</strong> ${correctAnswerText}</div>`;
         } else if (q.isCorrect === null && q.userSelection === null) {
             let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
             detailedResultsHTML += `<div class="correct-answer-text" style="color:#777;"><strong>Correct Answer:</strong> ${correctAnswerText} (Not Answered)</div>`;
         }

        detailedResultsHTML += `</div>`;
    });

    let resultMessage = `<h2>Test Completed!</h2>`;
    resultMessage += `You answered ${correctAnswersCount} out of ${questions.length} questions correctly.<br>`;
    const passed = correctAnswersCount >= passingScore;
    resultMessage += passed
        ? `<strong style="color:green;">Congratulations, You PASSED!</strong>`
        : `<strong style="color:red;">Unfortunately, You FAILED. (Required: ${passingScore} correct)</strong>`;

    resultDiv.innerHTML = resultMessage + detailedResultsHTML;
    resultDiv.style.display = "block";

    questionWrapperDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    questionNumbersDiv.style.display = 'none';
    timeLimitDiv.style.display = 'none';
}


/** Butonların Aktif/Pasif Durumlarını Ayarlar (İlk Yükleme ve Reset için) */
function updateButtonStates() {
    const question = questions[currentQuestion];
    // Bu fonksiyon sadece soru check edilmemişse çağrılır veya reset içindir
    if (!question.checked) {
        const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;

        // Previous: İlk soru değilse aktif
        previousButton.disabled = currentQuestion === 0;
        // Review: Check edilmemişse her zaman aktif
        reviewButton.disabled = false;
        // Check: Check edilmemişse VE seçim varsa aktif
        checkNextButton.disabled = !hasSelection;

    } else {
        // Soru check edilmişse durumlar setButtonToNextMode içinde ayarlanır
        // Ama yine de buraya bir kontrol koymakta fayda var
         previousButton.disabled = true;
         reviewButton.disabled = true;
         // checkNextButton durumu NEXT veya FINISH olarak ayarlanır
    }
}


// --- BAŞLANGIÇ ---
displayQuestionNumbers();
displayQuestion(); // displayQuestion şimdi buton state'lerini de ayarlıyor
startTimer();

// --- OLAY DİNLEYİCİLERİ ---
previousButton.addEventListener("click", handlePrevious);
reviewButton.addEventListener("click", handleReview); // Artık dinamik
checkNextButton.addEventListener("click", handleCheckOrNext);
finishButton.addEventListener("click", finishQuiz);
