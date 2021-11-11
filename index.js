const questions = [
    { 
        "question": "Age range?", 
        "answer1": "10-12",
        "answer1Total": "1",
        "answer2": "12-14",
        "answer2Total": "2",
        "answer3":"14-16",
        "answer3Total": "3",
        "answer4": "16-18",
        "answer4Total": "4"
    },
    {
        "question": "How often do you feel excessively worried?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    },
    {
        "question":  "How often do you find it difficult to focus on schoolwork?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3": "Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"

    },
    { 
        "question": "How often are you not in control or cannot stop worrying?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"

    },
    {
        "question": "How often do you find it hard to relax?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    },
    {
        "question": "How often do you find that you're restless because it is hard to sit still?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    },
    {
        "question": "How often do you become easily annoyed or irritable?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    },
    {
        "question": "How often do you feel afraid that something awful might happen?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
  ];
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.answerPos1');
  const option2 = document.querySelector('.answerPos2');
  const option3 = document.querySelector('.answerPos3');
  const option4 = document.querySelector('.answerPos4');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  
  function generateQuestions (index) {
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      const option4Total = questions[index].answer4Total;
      
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option4.setAttribute('data-total', `${option4Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
      option4.innerHTML = `${question.answer4}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      
      if(!selectedOption) {
          alert('Please pick an answer');
          return;
      }
     
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      
      currentQuestion++;
  
          
          selectedOption.checked = false;
      
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">Your score: ${totalScore}</h1>
              <div class="summary">
              <h1>Summary of your results</h1>
              <p>Match your score to these assesments below:</p>
              <p>24 - 32- Severe Anxiety</p>
              <p>17 - 23 - Moderate Anxiety</p>
              <p>8 - 16 - Mild Anxiety</p>
            
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  //(after trialling): to load the previous question
  function loadPreviousQuestion(){
      currentQuestion--;
      score.pop();
      generateQuestions(currentQuestion);
  }

  //(after testing) to reset the quiz (in order to restart)
  function resetQuiz (e) {
      if(e.target.matches('button')){
          //sets score back to 0 and array back to 0 (Q1)
          currentQuestion = 0;
          score = [];
          
          location.reload();
      }
  }
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',resetQuiz);
  
