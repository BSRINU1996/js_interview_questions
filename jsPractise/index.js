
//2.different ways to create an object;

// const obj = new Object();

// obj.fisrtNmae = "Bali";
// obj.lastNmae = "SrinuVasuDev";
// obj.collegeNmae = "JNTUK";
// console.log(obj);


// const obj1 = Object();

// obj1.fisrtNmae = "Bali";
// obj1.lastNmae = "SrinuVasuDev";
// obj1.collegeNmae = "JNTUK";
// obj1.printIntroduction = function () {
//     console.log(`my name is ${this.lastNmae} and i am studied at ${this.collegeNmae}`)
// }
// console.log(obj1);
//first example for obj.create() method....

/*
            const obj1 = {
                fisrtNmae: "Bali",
                lastNmae: "SrinuVasuDev",
                collegeNmae: "JNTUK",
                printIntroduction: function () {
                    console.log(`my name is ${this.lastNmae} and i am studied at ${this.collegeNmae}`)
                }

            }
            obj1.printIntroduction();




            const obj2 = Object.create(obj1);
            // console.log(obj1);
            // console.log(obj2);
            obj2.lastNmae = "srinuVasuDev Bali ";
            // obj2.collegeNmae = "Gudlavalleru college";
            obj2.printIntroduction = function () {
                console.log(`my name is ${this.lastNmae} and i am studied at ${this.collegeNmae}`)
            }
            // console.log(obj2);
            obj2.printIntroduction();
*/

//Object.create() sratic method create a new object , using an existimg object as the prototype of the newly created object.



//second example
/*
                const person = {
                    isHuman: false,
                    name: 'ravi',
                    printIntroduction: function () {
                        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
                    }
                };
                person.printIntroduction();
                //My name is ravi. Am I human? false

                const me = Object.create(person);

                me.name = 'srinu'; // "name" is a property set on "me", but not on "person"
                me.isHuman = true; // inherited properties can be overwritten

                me.printIntroduction();
                //My name is srinu. Am I human? true
*/

//The Object.create() method creates a new object, using an existing object
//as the prototype of the newly created object.




//3.
//What are the common use cases of observables?
/*
Developers getting used to promises for AJAX calls always ask the same question: promises work fine, why do we need RxJS?

I will ask in return, do you know how to manage and scale applications with large data and high complexity? have you ever had
 trouble in handling complex parallel or sequential asynchronous calls?

In order to resolve those problems, I’d like to share the following most frequently used RxJS operators for Angular/React Projects:
 pipe, of, map, first, combineLatest, switchMap/mergeMap, and takeUntil. Besides the explanation, I will include example codes of real use cases.
*/

//4.***----------the Comma operator-------------***********
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

/*the comma(,) operator evaluates the each of the operands(from the leftto right) and returns the last operand.
let d = 2 + 5;
let a = (c, d);

console.log(1, c, d);
console.log(1, a);

let n = ((x = 1), (y = 2), (z = 123236));
console.log(n);
console.log(p = 7);
console.log(a);

if ((a = 1), (b = 9), (c = 0), (d = 2), (e = 0), (r = 9)) {
    console.log("yes, it is true!")
}
else {
    console.log("no, it is false!")
}

*/

//5.****------"use strict Mode"---------***\\

//Strict mode applies to entire scripts or to individual functions.
//It doesn't apply to block statements enclosed in {} braces; attempting to apply it to such contexts does nothing.
// eval code, Function code, event handler attributes, strings passed to setTimeout(), and related functions are either function bodies or entire scripts, and invoking strict mode in them works as expected.

/*
//1. "usestrict in script"
"use strict"
let name2 = "shiva";
console.log(name2);

let name3 = "srinu";
console.log(name3);
// "use strict"

let name1 = 'madhu';
console.log(name1);



if (true) {
    name3 = "srinuvasuDev"
} else {

}
console.log(name3)

//2."use strict" in an function
function test() {
    console.log("use-strict mode practising")
    let id = 123424
    "use strict"
    let num = 1243;
    console.log(num);      //1243
    // num2 = 480569
    // console.log(num2);   //Uncaught ReferenceError: num is not defined
}
test();
--------------------------------
function getAge() {
    'use strict';
    age = 26;
    console.log(age);
}

getAge();
//Uncaught ReferenceError: age is not defined

with use strict , you can make sure that you accedentally declare global variables.
we never declared the variable age , (as we used "use strict") , it throws refence error.
if we didnt use "use strict" it would have worked.since the property age would have gotten added to the global object.

----------------------------------------


//3. Duplicate Parameter name
//The "use strict" directive can only be applied to the body of functions with simple parameters.
//Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.
function rest(a, b, c, ...d) {
    // "use strict"
    console.log(d);
}
rest(1, 2, 3, 4, 5, 6, 7, 8)

function f1(a, b, c, d, a) {
    console.log(a, b, c, d, a)
}
f1('Hello', "Devs! ", 'Iam ', "srinuVsuDev", " Hi")

    //Uncaught SyntaxError: Duplicate parameter name not allowed in this context

    * /


//*********----Shallow copy v/s Deep copy -------******/

/*

let arr = [1, 20, 50, 199, 200];

let arr1 = arr;
console.log(arr1);

arr1[3] = 100;

console.log(arr1);

console.log(arr);

console.log(obj1);


console.log("deep copy")

let obj1 = {
    name10: "bali",
    name11: "srinu",
    name12: "vasuDev",
    name13: "sreenu"

}
console.log(obj1);


// let obj2 = obj1;
let obj2 = Object.assign({}, obj1)


obj2.name13 = "srinuVasuDev";
console.log(obj2);
console.log(obj1);


let obj3 = { ...obj1 }
console.log(obj3);

obj3.name13 = "srinuVasuDev";
console.log(obj3)
console.log(obj1)
//rest operator does deep copy

*/

//DOM manipualtion

/*

let h2lement = document.createElement("h2");
h2lement.textContent = "I am an web developer";

document.body.appendChild(h2lement);

let h1element = document.createElement("h1");
h1element.textContent = "this is JavaScript";


let containerElement = document.createElement("div");
containerElement.appendChild(h1element);
console.log(containerElement);
document.body.appendChild(containerElement);

let paraGraph = document.createElement("p");
paraGraph.textContent = "this is paragraph element";
containerElement.appendChild(paraGraph);

let h3ele = document.createElement("h3");
h3ele.textContent = "i am a content in the  h3 element ";
containerElement.appendChild(h3ele);

let h4ele = document.createElement("h4");
h4ele.classList.add("h4ele");
document.body.appendChild(h4ele);
h4ele.textContent = "i am a content in the h4 element ";

let buttonElement = document.createElement("button");

buttonElement.textContent = "Click Here "
containerElement.appendChild(buttonElement);

let buttonNokku = document.createElement("button");

buttonNokku.textContent = "next topic";
document.getElementById("maindiv").appendChild(buttonNokku);


buttonNokku.onclick = function () {
    document.getElementById("mainh1").textContent = "DOM Practise session....";
    console.log("i am testing")
}

*/











// console.log(inputValue);

//**print the input text value on UI */

/*
let btnEle = document.createElement("button");
btnEle.textContent = "Submit";
let loginCont = document.getElementById("login-container");
loginCont.appendChild(btnEle);

btnEle.onclick = function () {
    let inputElement = document.getElementById("userId");
    let inputValue = inputElement.value;
    outPutEle = document.createElement("p");
    let finalText = "Hello  " + inputValue + " " + "we are verifying your credintials";
    // outPutEle.textContent = srinu;
    outPutEle.textContent = finalText;
    loginCont.appendChild(outPutEle);
    // loginCont.textContent = srinu;
    // document.body.appendChild(outPutEle);
    //document.body.textContent = inputValue; //doesnt work


}
*/







//check  and uncheck with buttons.....
/*
function checkOpt() {
    document.getElementById("hyd").checked = true
}
function checkOpt1() {
    document.getElementById("bang").checked = true
}
function checkOpt2() {
    document.getElementById("mumbai").checked = true
}
function checkOpt3() {
    document.getElementById("ind").checked = true
}
function checkOpt4() {
    document.getElementById("chennai").checked = true
}
function unCheckOpt1() {
    document.getElementById("bang").checked = false
}
function unCheckOpt2() {
    document.getElementById("mumbai").checked = false
}
function unCheckOpt3() {
    document.getElementById("ind").checked = false
}
function unCheckOpt4() {
    document.getElementById("chennai").checked = false
}
*/

//removeChild method DOM manipulation.....

/*
let ele1 = document.createElement('h1');
document.getElementById("rm-child").appendChild(ele1);
ele1.textContent = "i am the first child of rm-child parent div"

let remButton41 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton41);
remButton41.textContent = "remChild1";

remButton41.onclick = function () {
    document.getElementById('rm-child').removeChild(ele1)
}


let ele2 = document.createElement('h1');
document.getElementById('rm-child').appendChild(ele2);
ele2.textContent = "i am the second child of rm-child parent div"

let remButton42 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton42);
remButton42.textContent = "remChild2";

remButton42.onclick = function () {
    document.getElementById('rm-child').removeChild(ele2)
}


let ele3 = document.createElement('h1');
document.getElementById('rm-child').appendChild(ele3);
ele3.textContent = "i am the third child of the rm-child parent div";

let remButton43 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton43);
remButton43.textContent = "remChild3";

remButton43.onclick = function () {
    document.getElementById('rm-child').removeChild(ele3)
}



let ele4 = document.createElement('h1');
document.getElementById('rm-child').appendChild(ele4);
ele4.textContent = "i am the fourth child of the rm-child parent div";


let remButton44 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton44);
remButton44.textContent = "remChild4";

remButton44.onclick = function () {
    document.getElementById('rm-child').removeChild(ele4)
}





let ele5 = document.createElement('h1');
document.getElementById('rm-child').appendChild(ele5);
ele5.textContent = "i am the fifth child of the rm-child parent div";


let remButton45 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton45);
remButton45.textContent = "remChild5";

remButton45.onclick = function () {
    document.getElementById('rm-child').removeChild(ele5)
}


let ele6 = document.createElement('h1');
document.getElementById('rm-child').appendChild(ele6);
ele6.textContent = "i am the sixth child of the rm-child parent div";


let remButton46 = document.createElement("button");
document.getElementById('rm-child').appendChild(remButton46);
remButton46.textContent = "remChild6";

remButton46.onclick = function () {
    document.getElementById('rm-child').removeChild(ele6)
}


//apllying for loop for the removing the child elements
//not working

// let arr = [ele1, ele2, ele3, ele4, ele5, ele6];
// for (let i = 0; i < arr.length; i++) {
//     // x = arr[i];
//     remButton.onclick = function () {
//         document.getElementById('rm-child').removeChild(arr[i]);
//     }
// }

// remButton.onclick = function () {
//     document.getElementById('rm-child').removeChild(ele3)
// }
//only one for one element removal , button is working....

*/

//sort method javascript
/*
let arr = ["srinu", "madhu", "bali", "javascript", 'raectJS'];
console.log(arr.sort());
console.log(arr)
let arr1 = [1, 2, 3, 4, 12, 13, 14, 15, 16];
let ArrSorted = arr1.sort((a, b) => b - a);
console.log(ArrSorted);
// this is not reuired to assign the sorted value onther value because this sort method sorts the elements of an array in-place;
console.log(arr1);

let arr3 = [12, 34, 67, 47, 236, 79, 4, 29, 94, 37, 85, 19, 92, 38, 47, 75, 67, 79];
arr3.sort((a, b) => a - b);
console.log(arr3);
console.log('normal with style %cback to normal %c', 'color:orange;background-color:green;font-size:25px');
console.log('normal with style back to normal');
*/




//applying css to the console.log
// console.log("%ci am Bali Srinu, cureently aspiring to be the frontend developer. my skills are javascript, reactJS, reduxand materialUI ", 'color:violet;background:yellow; fontstyle:italic; font-weight:bold; font-size:25px');





/*------
HOISTING  & TEMPORAL DEAD ZONE
------
// console.log(l);   // Uncaught ReferenceError: l is not defined
console.log(b);     //undefined  becoz memory is allocated to "b " but it is not yet allocated.
console.log(a);   //Uncaught ReferenceError: Cannot access 'a' before initialization and "a " is in a temporal dead zone for a time being.
let a = 100;
var b = 200;

//


console.log(d)     //undefined
var d;

// x = 4;
// console.log(x)
// let x;
console.log(j);   //undefined
var j = 93476;  // output is "undefined" becoz only declarations can be hoisted but not initializations.


// console.log(f);    //Cannot access 'f' before initialization...you can only access this variable "f" only after it is initialised or after it is  assigned a  value;
// let f = 93476;

//so the correct one is
// let o = 93476;
// console.log(o);


j = 4563984;
console.log(j + 1);     //4563985
var j;

j = 4563984;
console.log(j + 1);      //4563985

let y;
y = 897675;
console.log(y);        //897675

let c = 897675;
console.log(c);                //897675


h = 6523
console.log()      //index.js:480 Uncaught ReferenceError: Cannot access 'h' before initialization
let h;

console.log(r);
let r = 897675;      //Uncaught ReferenceError: Cannot access 'r' before initialization

//types of errors





/*
setAttribute method
*/
/*
let inpEle = document.getElementById("userId")
console.log(inpEle);
inpEle.setAttribute("for", "idnumber")

let divEle = document.getElementById("login-container")

let labelEle = document.createElement("label");
divEle.appendChild(labelEle);
*/


/*Object-Prevent-extensions  Object.preventExtensions*/
//HOW DO YOU PREVENT AN OBJECT TO EXTEND.....
/*
const Obj1 = {};
// Object.preventExtensions(Obj1);

try {
    Object.defineProperty(Obj1, "NAME", {
        value: 42
    });
} catch (e) {
    console.log(e);
}
console.log(Obj1)

Object.defineProperty(Obj1, "id", { value: 12435 });
console.log(Obj1);
Object.defineProperty(Obj1, "school", { value: "bhashyam public school" })

console.log(Obj1);
Object.preventExtensions(Obj1);
Object.defineProperty(Obj1, "salary", { value: 2000000 })
console.log(Obj1);
*/


//counter in javaScript

/*
let counetrEle = document.getElementById("countValue")
console.log(counetrEle);
function increFunction() {
    // let current = counetrEle.textContent;
    let updatedValue = parseInt(counetrEle.textContent) + 1;
    counetrEle.textContent = updatedValue;
    // console.log(typeof (current));
    if (updatedValue > 0) {
        counetrEle.style.color = "green";
    } else if (updatedValue < 0) {
        counetrEle.style.color = "green";
    } else {
        counetrEle.style.color = "orange";
    }
}

function resetFunction() {
    let resetValue = 0;
    counetrEle.textContent = resetValue;
    counetrEle.style.color = "orange";

}

function decreFunction() {
    let updatedValue = parseInt(counetrEle.textContent) - 1;
    counetrEle.textContent = updatedValue;
    counetrEle.style.color = "red";
}

console.log(document.getElementById("test").textContent);
document.getElementById("test").textContent = "test";
console.log(document.getElementById("test"))

*/

//Get User Current Location
//***********************// */
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition()
// }
//******************//


//input elements and math functions
// let floatV = Math.random()
// console.log(Math.random())
// let numb = Math.ceil(floatV * 100)
// let number = Math.round(floatV * 100);
// let numb1 = Math.floor(floatV * 100);
// let Numb = Math.trunc(floatV * 100)
// console.log(numb)
// console.log(number)
// console.log(numb1)
// console.log(Numb)


/*printing the input valut on UI */
/*
let buttonEle = document.createElement("button");
console.log(buttonEle)
buttonEle.textContent = "submit";
let mainDiv = document.getElementById("login-container");
mainDiv.appendChild(buttonEle);




buttonEle.onclick = function () {
    inputValue = document.getElementById("userId").value;
    outPutEle = document.createElement("h1");
    let finalText = "Hello  " + inputValue + " " + "we are verifying your credintials";

    outPutEle.textContent = finalText;
    mainDiv.appendChild(outPutEle);
}
*/

//*Guess Number *//

// let inpNumb = document.getElementById("userInput").value;
// let randomNum = Math.round(Math.random() * 100)
// console.log(randomNum);
// let resEle = document.getElementById("result");
/*
function guessNumFunction() {
    let inpNumb = parseInt(document.getElementById("userInput").value);
    let randomNum = Math.round(Math.random() * 100)
    console.log(randomNum);
    let resEle = document.getElementById("result");


    if (inpNumb < randomNum) {
        resEle.textContent = "your numbewr is too small "
        resEle.style.color = "red";
    } else if (inpNumb > randomNum) {
        resEle.textContent = "your numbewr is too big "
        resEle.style.color = "green";
    } else {
        resEle.textContent = "your number is exactly matched! "
    }
    <hr />

}
*/
//tip calculator
/*
function calculateTipTotal() {

    let billAmount = document.getElementById("billAmount").value;
    let perTip = document.getElementById("percentageTip").value;
    console.log(billAmount);
    console.log(perTip);
    let calculatedTip = (perTip / 100) * billAmount;
    console.log(calculatedTip);
    let totalAmount = parseInt(billAmount) + parseInt(calculatedTip);
    console.log(totalAmount);
    document.getElementById("tipAmount").innerHTML = calculatedTip;
    document.getElementById("totalAmount").innerHTML = totalAmount;



}

*/

//Objects....
/*
const person = {
    "1name": "srinu",
    $name: "dollar",
    _college: "IIT",
    name: "serlutkgh",
    "7dghg": "drgesthj",
    "@khjfdg": "likug",
    id23: 8765,
    "bali srinu": "myname",
    balisreenu: "myName",
    "1": "mahesh movie name",
    "my choice": "javascript"

}


console.log(person)
console.log(person.$name);
console.log(person.id23);
console.log(person.balisreenu);
// console.log(person."7dghg");
//uncaught SyntaxError: Unexpected string (at index.js:698:2
//Dot notation can be used for  only the valid identifiers...
//Use Dot notation when the key is valid identifier.
// console.log(person.1);
//so try to use invalid identifiers only in exceptional cases.

let Person1 = {
    name: 'John',
    aGE: 25
};
let key = "name";
console.log(Person1[key]);
console.log(Person1.key);

let myclg = "_college"
console.log(myclg);
console.log(person[myclg]);

let Id = "id23";
console.log(Id);    //id23
console.log(person[Id]);    //8765

let Obj = {
    father: "Father is the breadWinner of thew family",
    mother: "Mother is the house-wife",
    son: "Son is doiong a job in software industry",
    girlfriend: "GirlFriend name is Priya ",
    lover: "Lover",
    "1stjob": "globallogic"

}
let BVR = "father";
let Saraswathi = "mother";
let srinuVsuDev = "son";
let priya = "girlfriend";
console.log(Obj[BVR]);
console.log(Obj["father"]);
console.log(Obj[Saraswathi]);
console.log(Obj["mother"]);

console.log(Obj[srinuVsuDev]);
console.log(Obj["son"]);

console.log(Obj["lover"]);
console.log(Obj["lover"]);

console.log(Obj[priya]);
console.log(Obj["girlfriend"]);

console.log(Obj["1stjob"]);
console.log(Obj["1stjob"]);
//console.log(Obj.1stjob)   // use  dot notation only when the identifier is valid.


Obj.gender = "male";
console.log(Obj);
Obj["rank"] = "superior";
console.log(Obj);


//in javascript all objects interact by reference when setting them equal to each other.
let c = { greeting: "hello" };
let d;
d = c;
console.log(d);
console.log(c);
c.greeting = "hey!";
console.log(c);
console.log(d);
//when you change one object , you chnage all of them.

let Obj9 = {
    name: "srinu",
    id: 1234,
    age: 25,
    gender: "male",
    firstjob: "globallogic"
}
let Obj8;
Obj8 = Obj9;
Obj9["age"] = 26;
Obj9["id"] = 9876;
Obj9["firstjob"] = "TCS";

console.log(Obj8);

//new keyWord
let b = new Number(8);
console.log(b);            //{8}
console.log(typeof b);    //object
//new Number() is an built-in function constructor . Although it looks like a numebr , its not really a number: it has bunch of extra features and is an object.

console.log(Boolean(b === 8)); //false
console.log(Boolean(b == 8)); //true
When we use the == operator , it only checks whether it has the same value.
When we use the === operator , both value and the type should be the same.
*/

// console.log(XMLHttpRequest)

//AJAX CALLS

/*
let btn = document.getElementById("special");
let dataEle = document.getElementById("data");

console.log(typeof srinu);

btn.addEventListener("click", loadData);

function loadData() {
    let srinu = new XMLHttpRequest();
    srinu.open("GET", 'test.txt', true);  //there are five parameters in the this Open() method, they are 1.'GET'/"POST" 2.URL 3.async 4.username, 5.password.
    srinu.send();
    srinu.onprogress = function () {
        dataEle.innerText = "please Wait loading";
    }
    srinu.onload = function () {
        dataEle.innerText = srinu.responseText;
    }
    //.onprogress() and .onload() are the two events which are system generated which play a role while data or request is coming from webserver....

}
*/









































