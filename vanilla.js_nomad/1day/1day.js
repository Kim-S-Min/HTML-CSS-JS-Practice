//alert('Im Working. Im JS. Im Beautiful. Im worth it');
//console.log('Im Working. Im JS. Im Beautiful. Im worth it');

//a = 221;
//b = a - 5;
//console.log(b);

//let a = 221;
//let b = a - 5;
//a = 4;
//console.log(b, a)

//const a = 221;
//let b = a - 5;
//a = 4;
//console.log(b, a)

//var a = 221;
//var b = a - 5;
//a = 4;
//console.log(b, a);

// to do : finish this
/*
to do : finish this
to do : finish this
to do : finish this
to do : finish this
*/
/*
const what = "Fish Man"

console.log(what);
*/

// const what = true(1) false(0)

/*
Boolean
Num
const wat = 6666;
*/


//Float
//const wat = 55.1;


/*
//Array or Object
//const daysOfWeek = Fuck
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);
*/

/*
const something = "Something";
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Say", "Sun", something];
console.log(dayOfWeek[432]);
console.log(dayOfWeek[0, 1, 2]);
console.log(dayOfWeek);
*/

/*
const kimInfo = ["Ksm", "55", "true", "seoul"];
console.log(kimInfo);
*/

/*
const nicoInfo = {
  name:"Nico",
  age:33,
  gender:"Male",
  isHandsome:true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    {
      name:"Kimchi", 
      fatty: false 
    }, 
    {
      name:"Cheese burger", 
      fatty: true 
    }
  ]
}
console.log(nicoInfo);

nicoInfo.gender = "Female"

console.log(nicoInfo.gender);
console.log(nicoInfo.favFood[0].name);
console.log(nicoInfo.favFood);
console.log(nicoInfo.favFood[0]);
*/

/*
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true
}
console.log(nicoInfo, console);
*/

/*
function sayHello(potato, age) { 
  // argument를 지정해주어서 nicolas를 출력
  console.log('Hello!', potato, "you have", age, "years of age");
}

sayHello("Nicolas", 15);
*/

/*
function sayHello(name, age) {
  console.log("Hello " + name + ' you are ' + age + " years old");
  // JavaScript
  console.log(`Hello ${name} you are ${age} years old`);
  // ES6
  return `Hello ${name} you are ${age} years old`;
  // return값이 없다면 원하는값을 얻지못할것이다
}
// sayHello("Nicolas", 15);

const greeNicolas = sayHello("Nicolas", 14)
*/

/*
const calculator = {
  plus: function(a, b) {
    return a + b;
  }
}

// console.log(greeNicolas)
const plus = calculator.plus(5, 5)
console.log(plus)
*/

/*
const title = document.querySelector("#title");
const title = document.getElementById("title");
//console.log(title);
//console.error("FUCK");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(document);
document.title = 'I own you now';
*/

/*
const title = document.querySelector("#title");

function handleClick() {
    // console.log(event);
   // console.log("I have been resized");
    title.style.color = "blue";
}

// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
*/


/*
if(10 === "10") {
    console.log("hi");
} else if("10" === "11") {
    console.log("lalalala");
} else {
    console.log("ho");
}

if(20 > 5 || "ncolas" === "nicolas") {
    console.log("yes");
} else {
    console.log("no");
}

const age = prompt("How old are you");
console.log(age);

if(age >= 18 && age <= 21) {
    console.log("I can drink but you should not");
} else if(age > 21) {
    console.log("go ahed");
} else {
    console.log("you suck!")
}
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
}
title.addEventListener("click", handleClick);
init();

function handleOffline() {
    console.log("lalalal");
}
function handleOnline() {
    console.log("byby");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

    /*
    const title = document.querySelector("#title");

    const CLICKED_CLASS = "clicked";

    function handleClick() {
        const hasClass = title.classList.contains(CLICKED_CLASS);
        if (!hasClass) {
            title.classList.add(CLICKED_CLASS);
        }else {
            title.classList.remove(CLICKED_CLASS);
        }
    }

    function init() {
        title.addEventListener("click", handleClick);
    }
    init();
    */

    
    const title = document.querySelector("#title");

    const CLICKED_CLASS = "clicked";

    function handleClick() {
        title.classList.toggle(CLICKED_CLASS);
    }

    function init() {
        title.addEventListener("click", handleClick);
    }
    init();
    

