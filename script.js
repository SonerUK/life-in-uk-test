// --- SORULAR (Her soruya status, userSelection, checked eklenmiş) ---
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
        status: 'unanswered', userSelection: null, checked: false
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
let timeRemaining = 45 * 60; // Saniye cinsinden (45 dakika)
const passingScore = 18; // Geçme notu (örnek: 24 soruda 18 doğru)

// --- DOM ELEMENTLERİ ---
const questionNumbersDiv = document.querySelector(".question-numbers");
const questionWrapperDiv = document.getElementById("question-wrapper");
const questionAreaDiv = document.querySelector(".question-area");
const previousButton = document.getElementById("previous");
const reviewButton = document.getElementById("review");
const checkNextButton = document.getElementById("check-next-btn"); // Dinamik buton
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
     if (timeRemaining < 60 && timeRemaining > 0) { // Son 1 dakika kala rengi değiştir
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

/** CHECK Sonrası Görsel Geri Bildirimleri Temizler */
function clearFeedback() {
    questionWrapperDiv.classList.remove('correct-answer', 'incorrect-answer');
    const optionDivs = questionAreaDiv.querySelectorAll('.option');
    optionDivs.forEach(div => {
        div.classList.remove('marked-correct', 'marked-incorrect');
        // div.classList.remove('selected'); // Seçili kalmasını sağlayabiliriz, kullanıcı ne seçtiğini görsün
    });
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
            // Numaraya tıklayınca o soruya git (eğer check edilmediyse)
             if (!questions[currentQuestion].checked || checkNextButton.dataset.mode === 'next') { // Ya check edilmemişse ya da next modundaysa geçebilir
                // Belki burada da storeCurrentAnswer çağrılmalı? Teste göre karar verilebilir.
                currentQuestion = index;
                displayQuestion();
            } else {
                 // Check edilmiş ve henüz Next'e basılmamışsa geçişi engelle
                 console.log("Lütfen mevcut soruyu tamamlamak için NEXT'e basın.");
            }
        });
        questionNumbersDiv.appendChild(numberDiv);
    });
    updateNumberDivs(); // İlk yüklemede numaraların durumunu ayarla
}

/** Soru Numaralarının Görünümünü Günceller (Aktif, İncelenecek) */
function updateNumberDivs() {
    const numberDivs = document.querySelectorAll(".number");
    numberDivs.forEach((div, index) => {
        const question = questions[index];
        div.classList.remove("active", "review"); // Temizle

        if (index === currentQuestion) {
            div.classList.add("active");
        }

        if (question.status === 'review') {
            div.classList.add("review");
        }
        // Doğru/Yanlış durumu test bitince eklenebilir
    });
}

/** Mevcut Sorudaki Kullanıcı Seçimlerini State'e Kaydeder */
function storeCurrentAnswer() {
    const question = questions[currentQuestion];
    if (!question || question.checked) return; // Soru yoksa veya check edilmişse kaydetme

    const isMultiAnswer = Array.isArray(question.answer);
    const inputs = questionAreaDiv.querySelectorAll(`.options input[name="answer_${currentQuestion}"]:checked`);

    if (isMultiAnswer) {
        question.userSelection = Array.from(inputs).map(cb => cb.value);
    } else {
        question.userSelection = inputs.length > 0 ? inputs[0].value : null;
    }

    // Seçim durumu status'u etkiler (eğer review değilse)
    if (question.status !== 'review') {
         const hasSelection = isMultiAnswer ? question.userSelection.length > 0 : question.userSelection !== null;
         question.status = hasSelection ? 'answered' : 'unanswered';
    }
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
         let isSelected = false; // userSelection'dan kontrol et
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
             div.classList.add('marked-correct'); // Doğru cevabı yeşil yap
         }

         if (isSelected && !isThisOptionCorrect) {
             div.classList.add('marked-incorrect'); // Kullanıcının yanlış seçimini kırmızı yap
         }
     });
}


/** Mevcut Soruyu Ekranda Gösterir ve Gerekli Ayarları Yapar */
function displayQuestion() {
    clearFeedback(); // Önceki CHECK geri bildirimini temizle

    const question = questions[currentQuestion];
    if (!question) return;

    // Butonu CHECK moduna resetle (gerekli kontrollerle)
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
        // Seçili kalma durumu (selected class'ı)
        const selectedClass = isChecked ? 'selected' : '';
        // Kontrol edilmişse seçenekleri pasif yapma durumu
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
        setButtonToNextMode(checkNextButton); // Butonu NEXT moduna getir
        // Previous ve Review butonlarının durumu setButtonToNextMode içinde ayarlandı
    } else {
        // Soru check edilmemişse buton durumlarını normal ayarla
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

     storeCurrentAnswer(); // Seçimi kaydet
     updateButtonStates(); // CHECK butonunu etkinleştir/devre dışı bırak
     // Numaraları güncellemeye gerek yok, storeAnswer status'u güncelliyor
}

/** CHECK/NEXT Butonunu Başlangıç (CHECK) Moduna Döndürür */
function resetCheckNextButton() {
    checkNextButton.textContent = "CHECK";
    checkNextButton.dataset.mode = "check";
    checkNextButton.classList.remove('mode-next'); // Yeşil class'ı kaldır
    checkNextButton.classList.add('mode-check');   // Mavi class'ı ekle
    finishButton.style.display = 'none'; // Finish butonunu gizle
    checkNextButton.style.display = 'inline-block'; // Check/Next butonunu göster
    updateButtonStates(); // Diğer butonların ve kendisinin durumunu ayarla
}

/** Butonu NEXT Moduna Ayarlar ve İlgili Buton Durumlarını Günceller */
function setButtonToNextMode(button) {
    button.textContent = "NEXT";
    button.dataset.mode = "next";
    button.classList.remove('mode-check');
    button.classList.add('mode-next');
    button.disabled = false; // NEXT modu her zaman aktif

    // Son sorudaysa NEXT yerine FINISH göster
    if (currentQuestion === questions.length - 1) {
        button.style.display = 'none'; // NEXT'i gizle
        finishButton.style.display = 'inline-block'; // FINISH'i göster
        finishButton.disabled = false;
    } else {
         button.style.display = 'inline-block';
         finishButton.style.display = 'none';
    }

    // Check sonrası PREVIOUS ve REVIEW'u pasifleştir
    // (Kullanıcı geri dönüp bakamasın diye - isteğe bağlı)
    previousButton.disabled = true;
    reviewButton.disabled = true;
}


/** CHECK veya NEXT Butonuna Tıklandığında Çalışır */
function handleCheckOrNext() {
    const mode = checkNextButton.dataset.mode;
    const question = questions[currentQuestion];

    if (mode === "check") {
        // --- CHECK Modu ---
        storeCurrentAnswer(); // En güncel seçimi al

        const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
        if (!hasSelection) {
            alert("Lütfen bir cevap seçiniz.");
            return;
        }

        question.checked = true; // Soruyu kontrol edildi olarak işaretle
        showCheckFeedback(); // Görsel geri bildirimi göster

        // Seçenekleri (inputları) devre dışı bırak
        const optionInputs = questionAreaDiv.querySelectorAll('.options input');
        optionInputs.forEach(input => input.disabled = true);
        // Seçenek div'lerine de disabled class'ı ekleyebiliriz (CSS ile stil vermek için)
         questionAreaDiv.querySelectorAll('.options .option').forEach(div => div.classList.add('disabled'));


        // Butonu NEXT moduna geçir (bu fonksiyon buton durumlarını da ayarlar)
        setButtonToNextMode(checkNextButton);

    } else if (mode === "next") {
        // --- NEXT Modu ---
        // Sonraki soruya geç (eğer son soru değilse)
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion(); // Yeni soruyu göster (bu fonksiyon butonu resetleyecek)
        } else {
             // Bu durum normalde finishButton ile ele alınır
             console.error("Son soruda NEXT butonuna basıldı, FINISH bekleniyordu.");
             // Güvenlik önlemi olarak finish çağrılabilir
             finishQuiz();
        }
    }
}

/** Soruyu İncelenecek Olarak İşaretler (Navigasyon Yok) */
function handleReview() {
    const question = questions[currentQuestion];
    // Sadece check edilmemişse review yap
    if (!question.checked) {
        storeCurrentAnswer(); // O anki seçimi sakla (review'dan çıkınca kaybolmasın)
        // Toggle review status
        if (question.status === 'review') {
             // Review'dan çıkarken durumu ayarla (seçim varsa answered, yoksa unanswered)
              const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;
              question.status = hasSelection ? 'answered' : 'unanswered';
        } else {
              question.status = 'review';
        }
        updateNumberDivs(); // Numarayı güncelle
    }
}

/** Önceki Soruya Gider */
function handlePrevious() {
    // Sadece check edilmemişse veya NEXT moduna geçilmemişse izin ver
    if (!questions[currentQuestion].checked || checkNextButton.dataset.mode === 'next') {
       if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
    } else {
         console.log("Önceki soruya gitmek için mevcut soruyu tamamlayın (NEXT).");
    }
}

/** Testi Bitirir */
function finishQuiz() {
    clearInterval(timerInterval); // Zamanlayıcıyı durdur
    // Son cevap zaten state'de olmalı

    let correctAnswersCount = 0;
     questions.forEach(q => {
          let isCorrect = false;
          const isMulti = Array.isArray(q.answer);
          // Doğru cevap kontrolü (öncekiyle aynı)
          if (isMulti) {
               if (q.userSelection && q.userSelection.length === q.answer.length) {
                    isCorrect = q.answer.every(ans => q.userSelection.includes(ans));
               }
          } else {
               isCorrect = q.userSelection === q.answer;
          }
          if (isCorrect) correctAnswersCount++;
     });

    // Sonuç mesajını oluştur
    let resultMessage = `<h2>Test Tamamlandı!</h2>`;
    resultMessage += `Toplam ${questions.length} sorudan ${correctAnswersCount} tanesini doğru cevapladınız.<br>`;
    const passed = correctAnswersCount >= passingScore;
    resultMessage += passed
        ? `<strong style="color:green;">Tebrikler, Testi GEÇTİNİZ!</strong>`
        : `<strong style="color:red;">Maalesef, Testi GEÇEMEDİNİZ. (Gerekli: ${passingScore} doğru)</strong>`;

    // İsteğe bağlı: Detaylı sonuçlar için HTML oluşturulup eklenebilir
    // let detailedResultsHTML = '<h2>Detaylar:</h2>'; ...

    resultDiv.innerHTML = resultMessage; // + detailedResultsHTML;
    resultDiv.style.display = "block";

    // Diğer elementleri gizle
    questionWrapperDiv.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    questionNumbersDiv.style.display = 'none';
    timeLimitDiv.style.display = 'none';
}


/** Butonların Aktif/Pasif Durumlarını Ayarlar */
function updateButtonStates() {
    const question = questions[currentQuestion];
    const hasSelection = Array.isArray(question.userSelection) ? question.userSelection.length > 0 : question.userSelection !== null;

    // Previous butonu (ilk soru değilse VE soru check edilmemişse/NEXT modunda değilse)
    previousButton.disabled = currentQuestion === 0 || (question.checked && checkNextButton.dataset.mode !== 'next');

    // Review butonu (soru check edilmemişse aktif)
    reviewButton.disabled = question.checked;

    // Check/Next butonu
    if (checkNextButton.dataset.mode === 'check') {
        // CHECK modundaysa: Soru check edilmemişse VE seçim yapılmışsa aktif
        checkNextButton.disabled = question.checked || !hasSelection;
    } else {
        // NEXT modundaysa: Her zaman aktif (setButtonToNextMode içinde ayarlanıyor)
        checkNextButton.disabled = false;
    }

    // Finish butonu durumu setButtonToNextMode içinde ayarlanıyor
}

// --- BAŞLANGIÇ ---
displayQuestionNumbers();
displayQuestion();
startTimer();

// --- OLAY DİNLEYİCİLERİ ---
previousButton.addEventListener("click", handlePrevious);
reviewButton.addEventListener("click", handleReview);
checkNextButton.addEventListener("click", handleCheckOrNext); // Tek butona tek listener
finishButton.addEventListener("click", finishQuiz); // Finish butonu listener'ı
