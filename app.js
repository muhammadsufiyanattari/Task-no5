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
let min=10;
let max=20;
let myRandomNuber=Math.random()*(max-min+1)+min;
console.log(Math.floor(myRandomNuber));
