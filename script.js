const quizQuestions = [
   {
      question: "What is the largest planet in our solar system?",
      options: [
         "Mars",
         "Saturn",
         "Jupiter",
         "Earth"
      ],
      correctAnswer: "Jupiter"
   },
   {
      question: "Which element has the chemical symbol 'O'?",
      options: [
         "Gold",
         "Oxygen",
         "Osmium",
         "Ozone"
      ],
      correctAnswer: "Oxygen"
   },
   {
      question: "Who wrote the famous play \"Romeo and Juliet\"?",
      options: [
         "Charles Dickens",
         "William Shakespeare",
         "Jane Austen",
         "Mark Twain"
      ],
      correctAnswer: "William Shakespeare"
   },
   {
      question: "In what year did the first manned mission land on the Moon?",
      options: [
         "1965",
         "1969",
         "1971",
         "1957"
      ],
      correctAnswer: "1969"
   },
   {
      question: "What is the capital city of Australia?",
      options: [
         "Sydney",
         "Melbourne",
         "Canberra",
         "Brisbane"
      ],
      correctAnswer: "Canberra"
   },
   {
      question: "Which is generally considered the longest river in the world?",
      options: [
         "Amazon River",
         "Nile River",
         "Yangtze River",
         "Mississippi River"
      ],
      correctAnswer: "Nile River"
   },
   {
      question: "What color is traditionally associated with mourning in Western cultures?",
      options: [
         "Red",
         "Blue",
         "White",
         "Black"
      ],
      correctAnswer: "Black"
   },
   {
      question: "In computing, what does the acronym CPU stand for?",
      options: [
         "Central Power Unit",
         "Computer Processing Utility",
         "Central Processing Unit",
         "Complex Processing Unit"
      ],
      correctAnswer: "Central Processing Unit"
   },
   {
      question: "How many sides does a nonagon have?",
      options: [
         "7",
         "8",
         "9",
         "10"
      ],
      correctAnswer: "9"
   },
   {
      question: "What fictional city is the home of the DC Comics superhero Batman?",
      options: [
         "Metropolis",
         "Star City",
         "Gotham City",
         "Central City"
      ],
      correctAnswer: "Gotham City"
   }
];

let Score = document.querySelector("#score");
let StartBtn = document.querySelector("#start-btn");
let QuestionBox = document.querySelector("#questionbox");
let OptionBox = document.querySelector("#options");

let currentques = 0;
let countscore = 0;

function loadquestion() {


   if (currentques >= quizQuestions.length) {
      exitquiz();
      return;
   }

   Score.innerText = `Score : ${countscore}`;
   Score.classList.add("updatescore");

   //question
   let currentquestion = quizQuestions[currentques];
   let questionNO = currentques + 1;
   QuestionBox.innerHTML = questionNO + ".   " + currentquestion.question;

   OptionBox.innerHTML = ""; 
   
   currentquestion.options.forEach(answer => {
      const span = document.createElement("span"); 
      span.innerHTML = answer;
      span.classList.add("opt");
 

      span.addEventListener("click", () => {
       
         disableallOptions(); 

         if (answer === currentquestion.correctAnswer) {
            countscore++;
            span.classList.add("correct");

         }
         else {
            span.classList.add("wrong");

            highlightcorrectans(currentquestion.correctAnswer); 

         }
         setTimeout(() => {
            currentques++;
            loadquestion();
         }, 700); 

      });
     
    OptionBox.appendChild(span); 




   });
function disableallOptions(){
   const alloptions = document.querySelectorAll(".opt"); 
   alloptions.forEach(option =>{
      option.style.pointerEvents= "none";
   })
}



}

function highlightcorrectans(correctAnswertext){
   let alloptions = document.querySelectorAll(".opt"); 
   alloptions.forEach(option=>{
      if(option.innerHTML === correctAnswertext){
         option.classList.add("correct"); 
      }
   });
}
function exitquiz(){
   const finalscore = countscore; 
   OptionBox.classList.remove("ShowOptions");
   QuestionBox.classList.remove("ShowQuesBox");
   StartBtn.classList.remove("hide-btn");
   StartBtn.innerText = "RESTART"; 
  
   Score.innerText = `Quiz finished, your final score is ${finalscore} out of ${quizQuestions.length}`;
   Score.classList.remove("updatescore"); 




}
function ResetStartQuiz(){
   currentques = 0; 
   countscore = 0; 

   StartBtn.classList.add("hide-btn");

   QuestionBox.classList.add("ShowQuesBox");
   OptionBox.classList.add("ShowOptions");
   loadquestion();

}  
StartBtn.addEventListener("click",ResetStartQuiz); 