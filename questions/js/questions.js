  // creating an array and passing the number, questions, options, and answers

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
      question: "Which element is not part of Group I - A?",
      answer: "Ca",
      options: [
        "H",
        "Ca",
        "Li",
        "Na"
      ]
    },
  ];

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  questions = shuffle(questions);

  questions.forEach(function(question) {
    question.options = shuffle(question.options);
  });
    

  let questions2 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>Ca</h1>", 
    answer: "Calcium",
    options: [
      "Caliber",
      "Carrot",
      "Carbon",
      "Calcium"
    ]
  },
    {
    numb: 2,
    question: "Group II - A Elements are :",
    answer: "Alkaline Earth",
    options: [
      "Transition",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Magnesium?",
    answer: "Mg",
    options: [
      "Mg",
      "M",
      "Ma",
      "Mn"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Ba' ?",
    answer: "Barium",
    options: [
      "Ban",
      "Balloon",
      "Baron",
      "Barium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group II - A ?",
    answer: "K",
    options: [
      "Be",
      "Mg",
      "K",
      "Sr"
    ]
  },
  ];

  let questions3 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>B</h1>", 
    answer: "Boron",
    options: [
      "Boron",
      "Beryllium",
      "Barium",
      "Bonbon"
    ]
  },
    {
    numb: 2,
    question: "Group III - A Elements are :",
    answer: "Boron",
    options: [
      "Boron",
      "Chalcogen",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Indium?",
    answer: "In",
    options: [
      "I",
      "In",
      "Id",
      "Im"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Tl' ?",
    answer: "Thallium",
    options: [
      "Tellurium",
      "Thallium",
      "Thulium",
      "Thorium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group III - A ?",
    answer: "Ba",
    options: [
      "B",
      "Al",
      "Ba",
      "Ga"
    ]
  },
  ];

  let questions4 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>C</h1>", 
    answer: "Carbon",
    options: [
      "Carbon",
      "Calcium",
      "Chlorine",
      "Cesium"
    ]
  },
    {
    numb: 2,
    question: "Group IV - A Elements are :",
    answer: "Carbon",
    options: [
      "Carbon",
      "Noble Gas",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Silicon?",
    answer: "Si",
    options: [
      "S",
      "Si",
      "Sl",
      "Sn"
    ]
  },
    {
    numb: 4,
    question: "Which element is part of Group IV - A ?",
    answer: "Ge",
    options: [
      "Ge",
      "N",
      "Te",
      "Xe"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group II - A ?",
    answer: "P",
    options: [
      "Si",
      "Ge",
      "P",
      "Pb"
    ]
  },
  ];

  let questions5 = [
    {
    numb: 1,
    question: "Which element is part of Group V - A ?  ", 
    answer: "Arsenic",
    options: [
      "Arsenic",
      "Oxygen",
      "Chlorine",
      "Iodine"
    ]
  },
    {
    numb: 2,
    question: "Group V - A Elements are :",
    answer: "Chalcogen",
    options: [
      "Transition",
      "Alkaline Earth",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Antimony?",
    answer: "Sb",
    options: [
      "Sb",
      "An",
      "Am",
      "Ai"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'N' ?",
    answer: "Nitrogen",
    options: [
      "Neon",
      "Natrium",
      "Nihonium",
      "Nickel"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group V - A ?",
    answer: "Ba",
    options: [
      "Ba",
      "As",
      "N",
      "P"
    ]
  },
  ];

  let questions6 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>Te</h1>", 
    answer: "Tellurium",
    options: [
      "Tellurium",
      "Thalium",
      "Titanium",
      "Technetium"
    ]
  },
    {
    numb: 2,
    question: "Group VI - A Elements are :",
    answer: "Nitrogen",
    options: [
      "Transition",
      "Nitrogen",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Oxygen?",
    answer: "O",
    options: [
      "Ox",
      "O",
      "Oy",
      "On"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'S' ?",
    answer: "Sulfur",
    options: [
      "Sulfur",
      "Selenium",
      "Strontium",
      "Scandium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VI - A ?",
    answer: "Xe",
    options: [
      "O",
      "Se",
      "Xe",
      "Te"
    ]
  },
  ];

  let questions7 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>Br</h1>", 
    answer: "Bromine",
    options: [
      "Baron",
      "Bromine",
      "Beryllium",
      "Barium"
    ]
  },
    {
    numb: 2,
    question: "Group VII - A Elements are :",
    answer: "Halogen",
    options: [
      "Noble Gas",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Chlorine ?",
    answer: "Cl",
    options: [
      "Cl",
      "Ch",
      "C",
      "Cr"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'I' ?",
    answer: "Iodine",
    options: [
      "Ion",
      "Iodine",
      "Iridium",
      "Indium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VII - A ?",
    answer: "O",
    options: [
      "F",
      "Cl",
      "O",
      "Br"
    ]
  },
  ];

  let questions8 = [
    {
    numb: 1,
    question: "What is the name of this element? <br><h1>Kr</h1>", 
    answer: "Krypton",
    options: [
      "Krom",
      "Krypton",
      "Kraken",
      "Krunch"
    ]
  },
    {
    numb: 2,
    question: "Group VIII - A Elements are :",
    answer: "Noble Gas",
    options: [
      "Noble Gas",
      "Alkaline Earth",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol for Helium?",
    answer: "He",
    options: [
      "H",
      "He",
      "Hl",
      "Hm"
    ]
  },
    {
    numb: 4,
    question: "What element is part of Group VIII - A ?",
    answer: "Radon",
    options: [
      "Baron",
      "Radon",
      "Carbon",
      "Proton"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VIII - A ?",
    answer: "Be",
    options: [
      "He",
      "Ne",
      "Be",
      "Xe"
    ]
  },
  ];

  let compound = [
    {
    numb: 1,
    question: "Salt is compound that can be found in the kitchen as food preservatives and food seasoning.<br> What is the chemical formula for Salt ?", 
    answer: "NaCl",
    options: [
      "NaCl",
      "H2O",
      "NaHCO3",
      "Krunch"
    ]
  },
    {
    numb: 2,
    question: "This compound can be used as pesticide and many more. The chemical formula is NH3.<br>What compound is it?",
    answer: "Ammonia",
    options: [
      "Ammonia",
      "Sucrose",
      "Water",
      "Acetic Acid"
    ]
  },
    {
    numb: 3,
    question: "Water is vital for daily life. Water is the reason we have organic life on Earth.<br>What is the chemical formula for water?",
    answer: "H2O",
    options: [
      "NaCl",
      "CH3COOH",
      "H2O2",
      "NH3"
    ]
  },
    {
    numb: 4,
    question: "This compound can be used as suplement to support body immune system. This compound have other name, Vitamin C.<br> What compound is it?",
    answer: "Ascorbic Acid",
    options: [
      "Ascorbic Acid",
      "Ammonia",
      "Acetic Acid",
      "Soap"
    ]
  },
    {
    numb: 5,
    question: "Soap is a compound that is used to clean ourself.<br>What is the chemical formula for Soap?",
    answer: "RCOO-Na",
    options: [
      "RCOO-Na",
      "C12H22O11",
      "NaCl",
      "H2O"
    ]
  },
  {
    numb: 6,
    question: "This compound is used to sweeten food.<br>What compound is it?",
    answer: "Sucrose",
    options: [
      "Ascorbic Acid",
      "Sucrose",
      "Salt",
      "Soap"
    ]
  },
  {
    numb: 7,
    question: "Mouth wash is an antiseptic solution which is used to reduce the antibacterial load in our oral cavity.<br> What is the chemical formula for Mouthwash?",
    answer: "H2O2",
    options: [
      "H2O",
      "H2O2",
      "NaCl",
      "NaHCO3"
    ]
  },
  ];