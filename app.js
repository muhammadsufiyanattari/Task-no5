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

//############ Star Book Task ###########//
//Ans no 1
// alert("Hello EveryOne")

// Ans no 2
// let userName="Muhammad"
// document.write(userName)

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
let dollar=Number(prompt("Please Enter in Amount In Dollar"))
 
if (dollar>0) {
    let convertInPKR=dollar*250
    document.write(
        `Amount in Dollar ${dollar}</br>
        One Dollar is Equal in PKR is 250 Rupees<br/>
        Total Amount in PKR ${convertInPKR}</br>`)
}


 