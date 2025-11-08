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



 StartBtn.addEventListener("click",()=>{
    StartBtn.classList.add("hide-btn");
    QuestionBox.classList.add("ShowQuesBox");
    OptionBox.classList.add("ShowOptions"); 

    
 });