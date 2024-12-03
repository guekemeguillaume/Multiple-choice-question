const questions = [
    // ... (Your quiz questions here - at least 5) ...
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      answer: 1
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
      answer: 2
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      answer: 0
    },
      {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      answer: 1
    },
    {
      question: "What year did World War II begin?",
      options: ["1914", "1939", "1945", "1918"],
      answer: 1
    },
      {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = '';
  
    const question = questions[currentQuestion];
    const questionText = document.createElement("p");
    questionText.className = "question";
    questionText.textContent = question.question;
    quizDiv.appendChild(questionText);
  
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(index));
      quizDiv.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const options = document.querySelectorAll(".option");
  
    options.forEach((option, index) => {
      if (index === correctAnswer) {
        option.classList.add("correct");
      }
      if (index === selectedAnswer) {
        if (index === correctAnswer) {
          score++;
        } else {
          option.classList.add("incorrect");
        }
      }
      option.style.pointerEvents = 'none'; //disable clicking after selection
    });
  
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        displayResults();
      }
    }, 1500); // Wait 1.5 seconds before moving to the next question
  }
  
  function displayResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `You scored ${score} out of ${questions.length}!`;
    if (score >= questions.length / 2) {
      resultsDiv.innerHTML += "<p>Congratulations! You passed!</p>";
    } else {
      resultsDiv.innerHTML += "<p>Better luck next time. Try again?</p>";
    }
  }