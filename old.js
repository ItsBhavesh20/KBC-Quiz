let jsQuestions = [
  {
    id: 1,
    question: "JavaScript is a ______ language.",
    options: {
      a: "Programming",
      b: "Markup",
      c: "Styling",
      d: "Database"
    },
    answer: "a"
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable?",
    options: {
      a: "int",
      b: "var",
      c: "define",
      d: "create"
    },
    answer: "b"
  },
  {
    id: 3,
    question: "Which keyword is preferred for variables that can change?",
    options: {
      a: "const",
      b: "let",
      c: "fixed",
      d: "static"
    },
    answer: "b"
  },
  {
    id: 4,
    question: "Which keyword is used for a constant variable?",
    options: {
      a: "let",
      b: "var",
      c: "const",
      d: "value"
    },
    answer: "c"
  },
  {
    id: 5,
    question: "Which symbol is used for single-line comments?",
    options: {
      a: "/* */",
      b: "//",
      c: "<!-- -->",
      d: "**"
    },
    answer: "b"
  },
  {
    id: 6,
    question: "Which function is used to print output in the browser console?",
    options: {
      a: "print()",
      b: "console.log()",
      c: "document.write()",
      d: "alert()"
    },
    answer: "b"
  },
  {
    id: 7,
    question: "Which data type is used to store true or false values?",
    options: {
      a: "String",
      b: "Number",
      c: "Boolean",
      d: "Object"
    },
    answer: "c"
  },
  {
    id: 8,
    question: "Which method is used to display a popup message?",
    options: {
      a: "console.log()",
      b: "prompt()",
      c: "alert()",
      d: "confirm()"
    },
    answer: "c"
  },
  {
    id: 9,
    question: "Which operator is used for strict equality comparison?",
    options: {
      a: "=",
      b: "==",
      c: "===",
      d: "!="
    },
    answer: "c"
  },
  {
    id: 10,
    question: "Which method is used to get an element by its ID?",
    options: {
      a: "document.getElementById()",
      b: "document.getElementsByClassName()",
      c: "document.querySelectorAll()",
      d: "document.getElementByTagName()"
    },
    answer: "a"
  },
  {
    id: 11,
    question: "Which method is used to add an element at the end of an array?",
    options: {
      a: "pop()",
      b: "shift()",
      c: "push()",
      d: "unshift()"
    },
    answer: "c"
  },
  {
    id: 12,
    question: "Which method removes the last element from an array?",
    options: {
      a: "pop()",
      b: "push()",
      c: "shift()",
      d: "slice()"
    },
    answer: "a"
  },
  {
    id: 13,
    question: "Which loop is best used when the number of iterations is known?",
    options: {
      a: "while",
      b: "do...while",
      c: "for",
      d: "for...in"
    },
    answer: "c"
  },
  {
    id: 14,
    question: "Which keyword is used to create a function in JavaScript?",
    options: {
      a: "method",
      b: "function",
      c: "define",
      d: "fun"
    },
    answer: "b"
  },
  {
    id: 15,
    question: "Which method is used to convert a JavaScript object into a JSON string?",
    options: {
      a: "JSON.parse()",
      b: "JSON.convert()",
      c: "JSON.stringify()",
      d: "JSON.object()"
    },
    answer: "c"
  },
  {
    id: 16,
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: {
      a: "JSON.stringify()",
      b: "JSON.parse()",
      c: "JSON.convert()",
      d: "JSON.object()"
    },
    answer: "b"
  },
  {
    id: 17,
    question: "Which operator is used to assign a value to a variable?",
    options: {
      a: "==",
      b: "===",
      c: "=",
      d: "!="
    },
    answer: "c"
  },
  {
    id: 18,
    question: "Which method is used to remove the first element from an array?",
    options: {
      a: "pop()",
      b: "push()",
      c: "shift()",
      d: "unshift()"
    },
    answer: "c"
  },
  {
    id: 19,
    question: "Which method is used to add an element at the beginning of an array?",
    options: {
      a: "push()",
      b: "pop()",
      c: "shift()",
      d: "unshift()"
    },
    answer: "d"
  },
  {
    id: 20,
    question: "Which keyword is used to stop a loop immediately?",
    options: {
      a: "continue",
      b: "break",
      c: "return",
      d: "exit"
    },
    answer: "b"
  },
  {
    id: 21,
    question: "Which keyword is used to skip the current iteration of a loop?",
    options: {
      a: "break",
      b: "continue",
      c: "return",
      d: "skip"
    },
    answer: "b"
  },
  {
    id: 22,
    question: "Which method is used to find the length of an array?",
    options: {
      a: "size()",
      b: "count()",
      c: "length",
      d: "index()"
    },
    answer: "c"
  },
  {
    id: 23,
    question: "Which method is used to join all elements of an array into a string?",
    options: {
      a: "concat()",
      b: "join()",
      c: "slice()",
      d: "split()"
    },
    answer: "b"
  },
  {
    id: 24,
    question: "Which method is used to split a string into an array?",
    options: {
      a: "join()",
      b: "splice()",
      c: "slice()",
      d: "split()"
    },
    answer: "d"
  },
  {
    id: 25,
    question: "Which method is used to convert all characters of a string to uppercase?",
    options: {
      a: "toUpperCase()",
      b: "toLowerCase()",
      c: "uppercase()",
      d: "capitalize()"
    },
    answer: "a"
  },
  {
    id: 26,
    question: "Which method is used to convert all characters of a string to lowercase?",
    options: {
      a: "toUpperCase()",
      b: "toLowerCase()",
      c: "lowerCase()",
      d: "smallCase()"
    },
    answer: "b"
  },
  {
    id: 27,
    question: "Which operator is used to find the remainder after division?",
    options: {
      a: "/",
      b: "*",
      c: "%",
      d: "//"
    },
    answer: "c"
  },
  {
    id: 28,
    question: "Which method is used to add two or more arrays together?",
    options: {
      a: "merge()",
      b: "join()",
      c: "concat()",
      d: "combine()"
    },
    answer: "c"
  },
  {
    id: 29,
    question: "Which method is used to check whether an array contains a specific value?",
    options: {
      a: "find()",
      b: "includes()",
      c: "contains()",
      d: "has()"
    },
    answer: "b"
  },
  {
    id: 30,
    question: "Which keyword is used to return a value from a function?",
    options: {
      a: "break",
      b: "continue",
      c: "return",
      d: "yield"
    },
    answer: "c"
  },
  {
    id: 31,
    question: "Which method is used to convert a string into a number?",
    options: {
      a: "Number()",
      b: "String()",
      c: "parseString()",
      d: "toText()"
    },
    answer: "a"
  },
  {
    id: 32,
    question: "Which method is used to convert a number into a string?",
    options: {
      a: "parseInt()",
      b: "Number()",
      c: "toString()",
      d: "toNumber()"
    },
    answer: "c"
  },
  {
    id: 33,
    question: "Which method is used to round a number to the nearest integer?",
    options: {
      a: "Math.ceil()",
      b: "Math.floor()",
      c: "Math.round()",
      d: "Math.random()"
    },
    answer: "c"
  },
  {
    id: 34,
    question: "Which method returns a random number between 0 and 1?",
    options: {
      a: "Math.random()",
      b: "Math.round()",
      c: "Math.floor()",
      d: "Math.max()"
    },
    answer: "a"
  },
  {
    id: 35,
    question: "Which keyword is used to create an object in JavaScript?",
    options: {
      a: "array",
      b: "object",
      c: "new",
      d: "class"
    },
    answer: "c"
  },
  {
    id: 36,
    question: "Which method is used to get all the keys of an object?",
    options: {
      a: "Object.keys()",
      b: "Object.values()",
      c: "Object.entries()",
      d: "Object.key()"
    },
    answer: "a"
  },
  {
    id: 37,
    question: "Which method is used to get all the values of an object?",
    options: {
      a: "Object.keys()",
      b: "Object.values()",
      c: "Object.entries()",
      d: "Object.value()"
    },
    answer: "b"
  },
  {
    id: 38,
    question: "Which method is used to remove whitespace from both ends of a string?",
    options: {
      a: "trim()",
      b: "slice()",
      c: "split()",
      d: "replace()"
    },
    answer: "a"
  },
  {
    id: 39,
    question: "Which method is used to extract a part of a string?",
    options: {
      a: "splice()",
      b: "slice()",
      c: "trim()",
      d: "push()"
    },
    answer: "b"
  },
  {
    id: 40,
    question: "Which method is used to replace part of a string with another value?",
    options: {
      a: "replace()",
      b: "slice()",
      c: "split()",
      d: "concat()"
    },
    answer: "a"
  },
  {
    id: 41,
    question: "Which method is used to find the index of an element in an array?",
    options: {
      a: "find()",
      b: "indexOf()",
      c: "includes()",
      d: "search()"
    },
    answer: "b"
  },
  {
    id: 42,
    question: "Which method is used to check if at least one element satisfies a condition?",
    options: {
      a: "every()",
      b: "map()",
      c: "some()",
      d: "filter()"
    },
    answer: "c"
  },
  {
    id: 43,
    question: "Which method creates a new array containing only elements that match a condition?",
    options: {
      a: "filter()",
      b: "find()",
      c: "map()",
      d: "reduce()"
    },
    answer: "a"
  },
  {
    id: 44,
    question: "Which method creates a new array by applying a function to every element?",
    options: {
      a: "filter()",
      b: "forEach()",
      c: "map()",
      d: "find()"
    },
    answer: "c"
  },
  {
    id: 45,
    question: "Which loop is specially used to iterate over array values?",
    options: {
      a: "for...in",
      b: "for...of",
      c: "while",
      d: "do...while"
    },
    answer: "b"
  },
  {
    id: 46,
    question: "Which method is used to execute a function for each element of an array?",
    options: {
      a: "map()",
      b: "filter()",
      c: "forEach()",
      d: "reduce()"
    },
    answer: "c"
  },
  {
    id: 47,
    question: "Which keyword is used to handle errors in JavaScript?",
    options: {
      a: "catch",
      b: "try",
      c: "throw",
      d: "try...catch"
    },
    answer: "d"
  },
  {
    id: 48,
    question: "Which method is used to convert a string to an integer?",
    options: {
      a: "Number()",
      b: "parseInt()",
      c: "parseFloat()",
      d: "toString()"
    },
    answer: "b"
  },
  {
    id: 49,
    question: "Which method is used to convert a string to a floating-point number?",
    options: {
      a: "parseInt()",
      b: "Number()",
      c: "parseFloat()",
      d: "toFixed()"
    },
    answer: "c"
  },
  {
    id: 50,
    question: "Which method is used to select the first element that matches a CSS selector?",
    options: {
      a: "getElementById()",
      b: "getElementsByClassName()",
      c: "querySelector()",
      d: "querySelectorAll()"
    },
    answer: "c"
  },
];

// copy of array
let originalQuestions = [...jsQuestions];

let optiondiv = document.getElementById("optiondiv");
let question = document.getElementById("question");

let optiona = document.getElementById("optiona");
let optionb = document.getElementById("optionb");
let optionc = document.getElementById("optionc");
let optiond = document.getElementById("optiond");

let nextbtn = document.getElementById("nextbtn");
let lockbtn = document.getElementById("lockbtn");

let timer = document.getElementById("timer");
let timerid; // for stop timer

let currentquestion = "";
let questionnumber = 0;

// nextbtn.addEventListener("click", () => {
function nextquetion() {
  // if (jsQuestions.length === 34) {
  //   console.log("finished");
  //   return;
  // }
  questionnumber++;

  let randomnumber = Math.floor(Math.random() * jsQuestions.length);
  // console.log(randomnumber);

  optiondiv.style.display = "block";
  nextbtn.style.display = "none";

  currentquestion = jsQuestions[randomnumber];
  jsQuestions.splice(randomnumber, 1);
  // console.log(randomnumber);
  // console.log(jsQuestions.length);

  question.innerText = `${questionnumber}. ${currentquestion.question}`;
  optiona.innerText = `A. ${currentquestion.options.a}`;
  optionb.innerText = `B. ${currentquestion.options.b}`;
  optionc.innerText = `C. ${currentquestion.options.c}`;
  optiond.innerText = `D. ${currentquestion.options.d}`;

  clearInterval(timerid); // for reset timer

  let timeleft = 30;
  timer.innerText = timeleft;
  timer.style.color = "black";

  timerid = setInterval(() => {
    timeleft--;
    timer.innerText = timeleft;

    if (timeleft <= 5) {
      timer.style.color = "red";
    } else if (timeleft <= 10) {
      timer.style.color = "orange";
    } else {
      timer.style.color = "black";
    }

    if (timeleft === 0) {
      clearInterval(timerid);

      optiona.disabled = true;
      optionb.disabled = true;
      optionc.disabled = true;
      optiond.disabled = true;

      lockbtn.disabled = true;

      let rightanswer = document.getElementById("option" + currentquestion.answer);
      // console.log(rightanswer);
      rightanswer.style.backgroundColor = "green";
      // alert("Time out game over");

      setTimeout(() => {
        alert("Time Out");
        alert("You Won : " + winningamount);
        resetGame();
      }, 2000);
      
    }
  }, 1000);

  // buttons re-enable
  optiona.disabled = false;
  optionb.disabled = false;
  optionc.disabled = false;
  optiond.disabled = false;

  // color reset
  optiona.style.backgroundColor = "";
  optionb.style.backgroundColor = "";
  optionc.style.backgroundColor = "";
  optiond.style.backgroundColor = "";

  // button reset
  selectedbutton = "";
  getselectedbutton = "";

  lockbtn.disabled = true;
  // });
};
nextbtn.addEventListener("click", nextquetion);

// for check answer
let selectedbutton = "";
// get button tag for change color on right or wrong answer
let getselectedbutton = "";

function selectoption() {
  // console.log(this.id);
  selectedbutton = this.id.replace("option", "");
  // console.log(selectedbutton);

  lockbtn.disabled = false;

  // yellow color reset on change option
  optiona.style.backgroundColor = "";
  optionb.style.backgroundColor = "";
  optionc.style.backgroundColor = "";
  optiond.style.backgroundColor = "";

  getselectedbutton = document.getElementById("option" + selectedbutton);
  // console.log(getselectedbutton);
  this.style.backgroundColor = "yellow";
}

lockbtn.addEventListener("click", () => {
  if (selectedbutton === "") {
    console.log("Please select an option.");
    // lockbtn.disabled = true;
    return;
  }

  // for stop timer
  clearInterval(timerid);

  lockbtn.disabled = true;

  optiona.disabled = true;
  optionb.disabled = true;
  optionc.disabled = true;
  optiond.disabled = true;

  if (selectedbutton === currentquestion.answer) {
    getselectedbutton.style.backgroundColor = "green";

    // level update
    currentlevel++;
    // on level update color highlight function
    winningamount = prizemoney[currentlevel - 1]
    updateslab();

    if (currentlevel === 16) {
      setTimeout(() => {
        alert("Congratulations You Won : " + winningamount);
        resetGame();
      }, 2000);
    } else {
      setTimeout(() => {
        nextquetion();
      }, 2000);
    }
    console.log("You won :", prizemoney[currentlevel - 1]);
  }
  else {
    getselectedbutton.style.backgroundColor = "red";
    // console.log(currentquestion.answer);

    let rightanswer = document.getElementById("option" + currentquestion.answer);
    // console.log(rightanswer);
    rightanswer.style.backgroundColor = "green";
    // console.log("game over");

    setTimeout(() => {
      alert("Game Over");
      alert("You Won : " + winningamount);
      resetGame();
    }, 2000);
  
  }
});

optiona.addEventListener("click", selectoption);
optionb.addEventListener("click", selectoption);
optionc.addEventListener("click", selectoption);
optiond.addEventListener("click", selectoption);

// for showing wining price money
let prizemoney = ["₹1,000", "₹2,000", "₹3,000", "₹5,000", "₹10,000", "₹20,000", "₹40,000", "₹80,000", "₹1,60,000", "₹3,20,000", "₹6,40,000", "₹12,50,000", "₹25,00,000", "₹50,00,000", "₹1 Crore", "₹7 Crore"];

let currentlevel = 0; // for storing current level
// console.log(prizemoney[currentlevel]);
let prelevel = 0; // for storing previews level
let winningamount = "0"; // for storing winning amount

function updateslab() {
  // for reset highlight color
  if (prelevel > 0) {
    document.getElementById("level" + prelevel).style.backgroundColor = "";
    document.getElementById("level" + prelevel).style.color = "";
  }
  // for get current level tag
  let currentprize = document.getElementById("level" + currentlevel);

  // for change color on current level
  currentprize.style.backgroundColor = "orange";
  currentprize.style.color = "white";

  // asign current value for previews variable
  prelevel = currentlevel;
}


function resetGame() {
  clearInterval(timerid);
  // Level reset
  currentlevel = 0;
  prelevel = 0;
  winningamount = "₹0";

  // Question number reset
  questionnumber = 0;

  // Highlight remove
  for (let i = 1; i <= 16; i++) {
    let level = document.getElementById("level" + i);
    level.style.backgroundColor = "";
    level.style.color = "";
  }

  // Reset questions
  jsQuestions.length = 0;
  jsQuestions.push(...originalQuestions);

  // Buttons reset
  optiona.disabled = false;
  optionb.disabled = false;
  optionc.disabled = false;
  optiond.disabled = false;

  optiona.style.backgroundColor = "";
  optionb.style.backgroundColor = "";
  optionc.style.backgroundColor = "";
  optiond.style.backgroundColor = "";

  timer.style.color = "black";
  nextbtn.style.display = "block";
  optiondiv.style.display = "none";

  selectedbutton = "";
  getselectedbutton = "";

  lockbtn.disabled = true;

  question.innerText = "Click Next Question";
}