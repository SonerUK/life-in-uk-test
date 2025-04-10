// --- SORULAR (Her soruya status, userSelection, checked, isCorrect eklenmiş) ---
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
        options: ["Mary Stuart", "Theresa May", "Margaret Thatcher"],
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
const reviewButton = document.getElementById("review");
const checkNextButton = document.getElementById("check-next-btn");
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
    timeLimitDiv.textContent = `Kalan Süre: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
     if (timeRemaining < 60 && timeRemaining > 0) {
        timeLimitDiv.style.color = 'red';
        timeLimitDiv.style.fontWeight = 'bold';
    } else if (timeRemaining > 0) {
         timeLimitDiv.style.color = 'inherit';
         timeLimitDiv.style.fontWeight = 'normal';
     } else {
         timeLimitDiv.textContent = "Süre Doldu!";
         timeLimitDiv.style.color = 'red';
         timeLimitDiv.style.fontWeight = 'bold';
     }
}

/** CHECK Sonrası Görsel Geri Bildirimleri Temizler (Wrapper class'ları kaldırıldı) */
function clearFeedback() {
    // questionWrapperDiv.classList.remove('correct-answer', 'incorrect-answer'); // <<< BU SATIR KALDIRILDI
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
             if (!currentQ.checked || checkNextButton.dataset.mode === 'next') {
                currentQuestion = index;
                displayQuestion();
            } else {
                 alert("Lütfen mevcut soruyu tamamlamak için NEXT butonuna basın.");
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

        if (question.checked) {
            if (question.isCorrect === true) {
                div.classList.add("correct");
            } else if (question.isCorrect === false) {
                div.classList.add("incorrect");
            }
        } else if (question.status === 'review') {
            div.classList.add("review");
        }

        if (index === currentQuestion) {
            div.classList.add("active");
        }
    });
}


/** Mevcut Sorudaki Kullanıcı Seçimlerini State'e Kaydeder */
function storeCurrentAnswer() {
    const question = questions[currentQuestion];
    if (!question || question.checked) return;

    const isMultiAnswer = Array.isArray(question.answer);
    const inputs = questionAreaDiv.querySelectorAll(`.options input[name="answer_${currentQuestion}"]:checked`);

    if (isMultiAnswer) {
        question.userSelection = Array.from(inputs).map(cb => cb.value);
    } else {
        question.userSelection = inputs.length > 0 ? inputs[0].value : null;
    }

    if (question.status !== 'review') {
         const hasSelection = isMultiAnswer ? question.userSelection.length > 0 : question.userSelection !== null;
         question.status = hasSelection ? 'answered' : 'unanswered';
    }
}

/** Check Sonrası Görsel Geri Bildirimi Uygular (Wrapper class'ları kaldırıldı) */
function showCheckFeedback() {
     clearFeedback();
     const question = questions[currentQuestion];
     const userSelection = question.userSelection;
     const correctAnswer = question.answer;
     const isMultiAnswer = Array.isArray(correctAnswer);

     // Soru alanı arka planını ayarlayan satır kaldırıldı
     // questionWrapperDiv.classList.add(question.isCorrect ? 'correct-answer' : 'incorrect-answer'); // <<< BU SATIR KALDIRILDI

     // Seçenekleri işaretle (Bu kısım aynı kalıyor)
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

    resetCheckNextButton();

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
            <strong>Soru ${currentQuestion + 1} / ${questions.length}</strong>
            <div class="question-text"><strong>${question.question}</strong></div>
            <div class="audio-icon"></div>
        </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `;

    if (!question.checked) {
        const optionInputs = questionAreaDiv.querySelectorAll('.options input');
        optionInputs.forEach(input => {
            input.addEventListener('change', handleOptionChange);
        });
    }

    if (question.checked) {
        showCheckFeedback();
        setButtonToNextMode(checkNextButton);
    } else {
        updateButtonStates();
    }

    updateNumberDivs();
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
     updateButtonStates();
}

/** CHECK/NEXT Butonunu Başlangıç (CHECK) Moduna Döndürür */
function resetCheckNextButton() {
    checkNextButton.textContent = "CHECK";
    checkNextButton.dataset.mode = "check";
    checkNextButton.classList.remove('mode-next');
    checkNextButton.classList.add('mode-check');
    finishButton.style.display = 'none';
    checkNextButton.style.display = 'inline-block';
    updateButtonStates();
}

/** Butonu NEXT Moduna Ayarlar ve İlgili Buton Durumlarını Günceller */
function setButtonToNextMode(button) {
    button.textContent = "NEXT";
    button.dataset.mode = "next";
    button.classList.remove('mode-check');
    button.classList.add('mode-next');
    button.disabled = false;

    if (currentQuestion === questions.length - 1) {
        button.style.display = 'none';
        finishButton.style.display = 'inline-block';
        finishButton.disabled = false;
    } else {
         button.style.display = 'inline-block';
         finishButton.style.display = 'none';
    }

    previousButton.disabled = true;
    reviewButton.disabled = true;
}


/** CHECK veya NEXT Butonuna Tıklandığında Çalışır */
function handleCheckOrNext() {
    const mode = checkNextButton.dataset.mode;
    const question = questions[currentQuestion];

    if (mode === "check") {
        storeCurrentAnswer();

        const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
        if (!hasSelection) {
            alert("Lütfen bir cevap seçiniz.");
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
             question.status = 'answered';
        }

        showCheckFeedback(); // Görsel geri bildirimi uygula (artık sadece seçenekleri renklendiriyor)
        updateNumberDivs();

        const optionInputs = questionAreaDiv.querySelectorAll('.options input');
        optionInputs.forEach(input => input.disabled = true);
        questionAreaDiv.querySelectorAll('.options .option').forEach(div => div.classList.add('disabled'));

        setButtonToNextMode(checkNextButton);

    } else if (mode === "next") {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
             console.error("Son soruda NEXT butonuna basıldı.");
             finishQuiz();
        }
    }
}

/** Soruyu İncelenecek Olarak İşaretler (Navigasyon Yok) */
function handleReview() {
    const question = questions[currentQuestion];
    if (!question.checked) {
        storeCurrentAnswer();
        if (question.status === 'review') {
              const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
              question.status = hasSelection ? 'answered' : 'unanswered';
        } else {
              question.status = 'review';
        }
        updateNumberDivs();
    }
}

/** Önceki Soruya Gider */
function handlePrevious() {
    const currentQ = questions[currentQuestion];
     if (!currentQ.checked) {
       if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
    }
}


/** Testi Bitirir ve Detaylı Sonuçları Gösterir */
function finishQuiz() {
    clearInterval(timerInterval);

    let correctAnswersCount = questions.filter(q => q.isCorrect === true).length;

    let detailedResultsHTML = '<hr><h2>Detaylı Sonuçlar:</h2>';
    questions.forEach((q, index) => {
        const isCorrect = q.isCorrect;
        const questionResultClass = ['result-question'];

        if (isCorrect === true) {
            questionResultClass.push('correct');
        } else if (q.checked) {
             questionResultClass.push('incorrect');
        }

        detailedResultsHTML += `<div class="${questionResultClass.join(' ')}">`;
        detailedResultsHTML += `<strong>Soru ${index + 1}:</strong> ${q.question}<br>`;

        detailedResultsHTML += `<div class="result-options"><strong>Seçenekler:</strong><br>`;
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

             if (userSelectedThis) detailedResultsHTML += ` <span class="user-answer">(Seçiminiz)</span>`;

            detailedResultsHTML += `</div>`;
        });
        detailedResultsHTML += `</div>`;

         if (isCorrect === false && q.checked) {
              let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
              detailedResultsHTML += `<div class="correct-answer-text"><strong>Doğru Cevap:</strong> ${correctAnswerText}</div>`;
         } else if (q.isCorrect === null && q.userSelection === null) { // Kontrol edilmedi ve seçim yoksa (boş)
             let correctAnswerText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
             detailedResultsHTML += `<div class="correct-answer-text" style="color:#777;"><strong>Doğru Cevap:</strong> ${correctAnswerText} (Boş Bırakıldı)</div>`;
         }

        detailedResultsHTML += `</div>`;
    });

    let resultMessage = `<h2>Test Tamamlandı!</h2>`;
    resultMessage += `Toplam ${questions.length} sorudan ${correctAnswersCount} tanesini doğru cevapladınız.<br>`;
    const passed = correctAnswersCount >= passingScore;
    resultMessage += passed
        ? `<strong style="color:green;">Tebrikler, Testi GEÇTİNİZ!</strong>`
        : `<strong style="color:red;">Maalesef, Testi GEÇEMEDİNİZ. (Gerekli: ${passingScore} doğru)</strong>`;

    resultDiv.innerHTML = resultMessage + detailedResultsHTML;
    resultDiv.style.display = "block";

    questionWrapperDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    questionNumbersDiv.style.display = 'none';
    timeLimitDiv.style.display = 'none';
}


/** Butonların Aktif/Pasif Durumlarını Ayarlar */
function updateButtonStates() {
    const question = questions[currentQuestion];

    if (!question.checked) {
        const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;

        previousButton.disabled = currentQuestion === 0;
        reviewButton.disabled = false;
        checkNextButton.disabled = !hasSelection;

        checkNextButton.dataset.mode = "check";
        checkNextButton.classList.remove('mode-next');
        checkNextButton.classList.add('mode-check');
        checkNextButton.textContent = "CHECK";

        finishButton.style.display = 'none';
        checkNextButton.style.display = 'inline-block';

    }
    // else durumu setButtonToNextMode içinde ele alınıyor
}


// --- BAŞLANGIÇ ---
displayQuestionNumbers();
displayQuestion();
startTimer();

// --- OLAY DİNLEYİCİLERİ ---
previousButton.addEventListener("click", handlePrevious);
reviewButton.addEventListener("click", handleReview);
checkNextButton.addEventListener("click", handleCheckOrNext);
finishButton.addEventListener("click", finishQuiz);
