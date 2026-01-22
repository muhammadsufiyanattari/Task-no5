//************** Primitive ************//


// let myPrimitiveString ="myPrimitiveString";
// let myPrimitiveNumber = 5;
// let myPrimitiveBoolean = true;
// let myPrimitiveUndefined ;
// let myPrimitiveNull=null; ;
//Symbol jo react me use karte hen.
//BigIng jo bari Callculation ke liye use hota he.
// let myString=myPrimitiveString;//ye new array me copy ho gai
// console.log(myString);//console ki to first value a gi
// console.log(myPrimitiveString="updatedString");//ab me ne Orignal valueko change kar dya
// console.log(myString);


;
//primitive data type jo udate ho jae or jo first value se alag ho.


//**************Non Primitive ************//




// let myObject={name:"ali",age:20};
// let myObject2=myObject.name="Noman";//orignal object me change ho ga
// console.log(myObject);
// console.log(myObject2);
//Non primitive ki example dono value same ho gai Q ke ye by reference save hoti hen.
// let aar=[1,2,3,4];
// let aar2=aar;
// aar[0]=20;
// console.log(aar);
// console.log(aar2);

//##############   Mathematical operations  ###############//
// let min=10;
// let max=20;
// let myRandomNuber=Math.random()*(max-min+1)+min;
// console.log(Math.floor(myRandomNuber));

//############   Digital Clock ###############//

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// console.log(userName="Sufiyan");
// console.log(userName);

// let testNumber=2+3;
// let testNumber1=2*3;
// let testNumber2=2/3;
// let testNumber3=2-3;
// let myString= new String("string")
// // console.log(testNumber);
// console.log(myString.indexOf("s"));// index return karta he
// console.log(myString.replace("string","Change"));// replace karne ke lye
// console.log(myString.toLocaleUpperCase());


// let inputId=document.getElementById("myInp").value

// // console.log(inputId);
// console.log(testNumber);
// console.log(testNumber1);
// console.log(testNumber2);
// console.log(testNumber3);
// let myNum;
// myNum=5
// console.log((myNum+(1*2)+1)-12+4);
// let movieTicketRate=150;//Each
// let userInput=Number(prompt("Enter your Movie Ticket Quantity"))
// let Total=movieTicketRate*userInput
// console.log(`
//     1. Each Movie Ticket Price is ${movieTicketRate}.00
//     2. Your Ticket Quantity is ${userInput}.00
//       Total Amount in PKR is ${Total}.00
//     `);

// let tableLength=[0,1,2,3,4,5,6,7,8,9]
// for (let i = 1; i <=tableLength.length; i++) {
// document.write(`2 x ${i} = ${2*i}</br>`);

// document.write(`3 x ${i} = ${3*i}</br>`);

//     // console.log(i);
    
// }
// console.log("hello");



// 8.1.2026
// let arr=["Pakista", "india","nepal","bangladesh"]

//Shopping Card
// let product1=Number(prompt(`Islamin Cap Per Cap Rate is: 650/- Enter Quatity`))
// let product2=Number(prompt(`Islamin Books Per Book Rate is: 230/- Enter Quatity`))

 
// if (product1>0 || product2>0) {
//     document.write(`Islamin Cap Per Cap Rate is: 650/- </br> 
//         Quantity of Cap is ${product1} </br></br>
//         Total of Cap is ${650*product1}/- </br></br>
//         Islamin Book Per Cap Rate is: 230/- </br> 
//         Quantity of Book is ${product2} </br></br>
//         Total of Book is ${230*product2}/- </br></br>
        
//         `)
// }

// else if (product1==0||product2==0) {
//     document.write(`Islamin Cap Per Cap Rate is: 650/- </br> 
//         kya ap ko cap achi nahi Lagi</br>
//         Islamin Book Per Cap Rate is: 230/- </br> 
//         kya ap ko cap achi nahi Lagi
//         `)
// }
 

// let ObtainedMarks=Number(prompt(`Enter Obtained Marks`))
// let TotalMarks=Number(prompt(`Enter Total Marks`))
// let persontageFormula=ObtainedMarks/TotalMarks*100
// document.write(
    
//     `
//      <h1> Marks Sheet</h1>
//      <p>Total Marks is ${TotalMarks}</p>
//      <p>Obtained Marks is ${ObtainedMarks}</p>
//      <h3>Persontage is ${persontageFormula}%</h3> 

//     `
// )
// let dollar=Number(prompt("Please Enter in Amount In Dollar"))
 
// if (dollar>0) {
//     let convertInPKR=dollar*250
//     document.write(
//         `Amount in Dollar ${dollar}</br>
//         One Dollar is Equal in PKR is 250 Rupees<br/>
//         Total Amount in PKR ${convertInPKR}</br>`)
// }


 




// let testNumber=2-3+3*2

// // console.log(inputId);
// console.log(testNumber);
// console.log(testNumber);
// console.log(testNumber);
// console.log(testNumber);
// let cleanestCities = ["islamabad", "Mari", "sawat", "manshera", "mardan"];
// let cityToCheck=prompt("Eneter Cleanest City Name ").toLocaleLowerCase()
//  if (cityToCheck === cleanestCities[0]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[1]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[2]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[3]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[4]) {
//  alert("It's one of the cleanest cities");
//  }

// let arr=["banana","mango","peach","orange"]
// arr.push("leachi")
// arr.push("watermelon")
// arr.pop()
// arr.unshift("apple")
// arr.unshift("bari")
// arr.shift("bari")
// let copyArr=arr.slice(1,)//first index or secand index se ke agge jaha tak ke copy karhe us index se age ka nuber do
// console.log(copyArr);

// arr.splice(0,0,"suitpotato")
// console.log(arr);
// let dollar=Number(prompt("Please Enter in Amount In Dollar"))
 
// if (dollar>0) {
//     let convertInPKR=dollar*250
//     document.write(
//         `Amount in Dollar ${dollar}</br>
//         One Dollar is Equal in PKR is 250 Rupees<br/>
//         Total Amount in PKR ${convertInPKR}</br>`)
// }


//  for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    
//  }
// Palindrome checker: enter a word or phrase to check (non-alphanumeric ignored)
// let palInput = prompt("Enter a word or phrase to check for palindrome:");
// if (palInput !== null) {
//     const normalized = palInput.toLowerCase().replace(/[^a-z0-9]/g, "");
//     const isPalindrome = normalized === normalized.split("").reverse().join("");
//     document.write(`<p>"${palInput}" is ${isPalindrome ? "" : "not "}a palindrome.</p>`);
// }
// for student

// ---------- Password generator ----------
// document.addEventListener('DOMContentLoaded', () => {
//     const pwLengthInput = document.getElementById('pw-length');
//     const pwLower = document.getElementById('pw-lower');
//     const pwUpper = document.getElementById('pw-upper');
//     const pwNumber = document.getElementById('pw-number');
//     const pwSymbol = document.getElementById('pw-symbol');
//     const generateBtn = document.getElementById('generate-btn');
//     const output = document.getElementById('pw-output');
//     const copyBtn = document.getElementById('copy-btn');

//     function getRandomInt(max) {
//         if (window.crypto && crypto.getRandomValues) {
//             const arr = new Uint32Array(1);
//             crypto.getRandomValues(arr);
//             return arr[0] % max;
//         }
//         return Math.floor(Math.random() * max);
//     }

//     const chars = {
//         lower: 'abcdefghijklmnopqrstuvwxyz',
//         upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//         number: '0123456789',
//         symbol: '!@#$%^&*()_+[]{}|;:,.<>?'
//     };

//     function generatePassword(length, options) {
//         let pool = '';
//         if (options.lower) pool += chars.lower;
//         if (options.upper) pool += chars.upper;
//         if (options.number) pool += chars.number;
//         if (options.symbol) pool += chars.symbol;
//         if (!pool) return '';

//         let pass = '';
//         for (let i = 0; i < length; i++) {
//             pass += pool.charAt(getRandomInt(pool.length));
//         }
//         return pass;
//     }

// //     generateBtn.addEventListener('click', () => {
// //         const length = Number(pwLengthInput.value) || 12;
// //         if (length < 1) {
// //             alert('Please enter a valid length');
// //             return;
// //         }
// //         const options = {
// //             lower: pwLower.checked,
// //             upper: pwUpper.checked,
// //             number: pwNumber.checked,
// //             symbol: pwSymbol.checked
// //         };
//         if (!options.lower && !options.upper && !options.number && !options.symbol) {
//             alert('Select at least one character type');
//             return;
//         }
//         output.value = generatePassword(length, options);
//     });

//     copyBtn.addEventListener('click', async () => {
//         const text = output.value;
//         if (!text) return;
//         try {
//             if (navigator.clipboard && navigator.clipboard.writeText) {
//                 await navigator.clipboard.writeText(text);
//             } else {
//                 const ta = document.createElement('textarea');
//                 ta.value = text;
//                 document.body.appendChild(ta);
//                 ta.select();
//                 document.execCommand('copy');
//                 document.body.removeChild(ta);
//             }
//             alert('Password copied to clipboard');
//         } catch (e) {
//             alert('Copy failed');
//         }
//     });
// });

let arr=["lemon","orange","Grayfruit"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
    
}
let arr2=["orange","Grayfruit"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(arr2.pop());
    // console.log(arr2.push("lemon mint"));
    
    
}
// reson of block level element return element is no define
 
// console.log(element); element is not define



//distructurning in array or object
//let sapose
// let obj={
//     myName:"mhammad",
//     className:"Unversity Secand Semister",
//     campusName: "Zone East",
//     rollNumber: "93"

// }
// let {myName,className,campusName,rollNumber="33"}=obj

// console.log(myName);
// console.log(className);
// console.log(rollNumber);

//========== TIME COUNTER (STOPWATCH) ==========//
let timerInterval = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

function formatTime(h, m, s) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// function updateDisplay() {
//     const display = document.getElementById('timer-display');
//     if (display) {
//         display.textContent = formatTime(hours, minutes, seconds);
//     }
// }

// function startTimer() {
//     if (timerInterval) return;
//     timerInterval = setInterval(() => {
//         seconds++;
//         if (seconds === 60) {
//             seconds = 0;
//             minutes++;
//             if (minutes === 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//         updateDisplay();
//     }, 1000);
// }

// function pauseTimer() {
//     clearInterval(timerInterval);
//     timerInterval = null;
// }

// function resetTimer() {
//     clearInterval(timerInterval);
//     timerInterval = null;
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     updateDisplay();
// }

// // Usage Example:

// startTimer(); // To start the timer
// pauseTimer();  // To pause the timer
// resetTimer();   //To reset the timer
//  updateDisplay(); //- To display time in HTML element with id="timer-display"

//========== COUNTER ==========//
let counterValue = 0;
const counterDisplay = document.getElementById('counter-display');
const increaseBtn = document.getElementById('counter-increase');
const decreaseBtn = document.getElementById('counter-decrease');
const resetBtn = document.getElementById('counter-reset');

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}

increaseBtn.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

decreaseBtn.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
})



// And  than go on React js in nest class 
//first lesson in react 
// react is javascript librery 
