// creating an array and passing the number, questions, options, and answers

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let questions = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>H</h1>", 
    answer: "Hydrogen",
    options: [
      "Hydrogen",
      "Hafnium",
      "Helium",
      "Halogen"
    ]
  },
    {
    numb: 2,
    question: "Group I - A Elements are :",
    answer: "Alkali",
    options: [
      "Transition",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Hydrogen?",
    answer: "H",
    options: [
      "Hy",
      "Ho",
      "Hb",
      "H"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Li' ?",
    answer: "Lithium",
    options: [
      "Limun",
      "Lithium",
      "Lima",
      "Lina"
    ]
  },
    {
    numb: 5,
    question: "Which one is the symbol of Rubidium?",
    answer: "Rb",
    options: [
      "Ra",
      "Rb",
      "Rf",
      "R"
    ]
  },
];

// Shuffle the questions array
shuffleArray(questions);