const questions = [
    { 
        "Question1": "Age range?", 
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
        "Question2": "How often do you feel excessively worried?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
    {
        "Question3":  "How often do you find it difficult to focus on schoolwork?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3": "Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"

    }
    { 
        "Question4": "How often are you not in control or cannot stop worrying?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"

    }
    {
        "Question5": "How often do you find it hard to relax?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
    {
        "Question6": "How often do you find that you're restless because it is hard to sit still?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
    {
        "Question7": "How often do you become easily annoyed or irritable?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
    {
        "Question8": "How often do you feel afraid that something awful might happen?",
        "answer1": "Never",
        "answer1Total": "1",
        "answer2": "Sometimes",
        "answer2Total": "2",
        "answer3":"Quite Often",
        "answer3Total": "3",
        "answer4": "All the time",
        "answer4Total": "4"
    }
]
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

