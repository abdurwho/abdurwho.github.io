// 1. Ways to print in JavaScript
// console.log('Hello, JavaScript');
// alert("Welcome to my JavaScript Tutorial");
// document.write('This is a paragraph written in JavaScript');

// 2. JavaScript console API
// console.log("Hello world",6+4,"Another log");
// console.warn('This is a warning');
// console.error('This is an error');

// 3. Variables
// What are variables? Containers to store value.

/* multi
line 
comment */

// var number1 = 35;
// var number2 = 55;
// console.log(number1+number2);
// const pi = 3.14;

// 4. Data types in JavaScript
// Numbers
// var num1 = 455;
// var num2 = 56.76;

// Strings
// var str1 = 'This is a string';
// var str2 = 'This is also a string';

// Objects
// var marks = {
//     john: 67,
//     joseph: 75,
//     noah: 99
// };

//Booleans
// var tru = true;
// var fls = false;

// Undefined and Null
// var und; //undefined
// var nul = null;

// Array
// var arr = [1,2,"string",4,5];

/*
At a very high level, there are 2 types of data types in JavaScript:
1. Primitive data types: number, string, boolean, undefined, null and symbols.
2. Reference data types: arrays, objects.
*/

// 5. Operators in JavaScript

// Arithmetic operators
// var a = 34;
// var b = 56;
// console.log("value of a + b is ", a + b);
// console.log("value of a - b is ", a - b);
// console.log("value of a * b is ", a * b);
// console.log("value of a / b is ", a / b);

// Assignment operators
// var c = b;
// c += 2; // c = c + 2;
// c -= 2; // c = c - 2;
// c *= 2; // c = c * 2;
// c /= 2; // c = c / 2;
// console.log(c);

// Comparison operators
// ==, <=, >=, >, <

// Logical operators
// &&, ||, !

// 6. Functions

// function avg(a,b) {
//     return (a + b)/2;
// }
// console.log(avg(5,35));

// 7. Conditionals

// function age(user_age){
//     if (user_age == null) return "Enter a valid age";
//     else if (user_age <=0) return '???';
//     else if (user_age < 8) return "Too young!";
//     else  return "Good to go!";
// }

// var arr1 = [1,2,3,4,5,6,7,8,9,10];
// for(var i=0; i<arr1.length; i++){
//     if(i==2) break;
//     console.log(arr1[i]);
// }

// arr1.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// while(j<arr1.length){
//     console.log(arr1[j]);
//     j++;
// }

// let j = 10;
// do{
//     console.log(arr1[j]);
//     j++;
// } while(j<arr1.length);

// 8. Array Methods

// let myArr = ['Fan','Camera',34,null,true];
// console.log(myArr);
// myArr.pop();
// myArr.push('Car');
// myArr.shift();
// myArr.unshift('Car');
// console.log(myArr.toString());/
// myArr.sort();    //sorts according to dictionary order
// console.log(myArr);

// 9. String Methods

// let myString = "I love playing basketball playing playing playing";
// console.log(myString.length);
// console.log(myString.indexOf("playing"));
// console.log(myString.lastIndexOf("play"));
// console.log(myString.slice(0,10));
// let d = myString.replace("love","hate").slice(0,25);     //only replaces first occurrence
// console.log(d);

// 10. Date

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());

// 11. DOM Manipulation

// document.location
// document.URL
// document.title
// document.scripts
// document.images
// document.domain
// document.querySelector('.container');
// document.querySelectorAll('.container');
// and many more..

// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'green';
// elemClass[1].classList.add('bg-primary');
// elemClass[1].classList.remove('container');
// console.log(elem.innerHTML);
// console.log(elemClass.innerText);

// let tn = document.getElementsByTagName('div');
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = "This paragraph was created using JavaScript";
// createdElement.style.fontFamily = "Arial";
// createdElement.style.fontStyle = "italic";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is bold was text created using JavaScript";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(createdElement); --> removes an element

// 12. JavaScript Events

// function clicked() {
//   console.log("You've clicked the button");
// }

// window.onload = function () {
//   console.log("Document loaded");
// };

// firstContainer.addEventListener("click", function () {
//   console.log("Clicked on container");
// });

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Mouse over container");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse out of container");
// });

// prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function () {
//   document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//   console.log("Mouse up after click from container");
// });

// firstContainer.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> Clicked on above container. </b>";
//   console.log("Mouse down clicked on container");
// });

// 13. Arrow functions

// function summ(a,b){
//     return a+b;
// }

// summ = (a,b)=>{
//     return a+b;
// }

// 14. setTimeout and setInterval functions

// logDo = ()=>{
//     console.log('Set Timeout successfully');
// }
// clr = setTimeout(logDo,2500);
// clearInterval(clr);

// clr = setInterval(logDo,2500);
// clearTimeout(clr);

// 15. Local Storage

// localStorage
// localStorage.setItem('Name', 'John');
// localStorage.getItem('Name');
// localStorage.removeItem('Name');
// localStorage.clear();

// JSON

// obj = {name: "John", length: 1, a : {this: 'that'} };
// jso = JSON.stringify(obj);       // to convert anything to JSON format
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse('{"name": "John", "length": 1, "a" : {"this": "that"}}');
// console.log(parsed);

const btn = document.getElementById("click");
const btn_default = btn.innerHTML;

var btn_i = 0;
btn.addEventListener("click", (e) => {
  var ele = document.querySelectorAll(".container")[1];
  if (btn_i % 2 == 0) {
    btn.innerText = "Undo";
    ele.style.background = "green";
  } else {
    btn.innerHTML = btn_default;
    ele.style.background = "transparent";
  }
  btn_i++;
  console.log("button clicked");
});

const togglebtn = document.getElementById("togglebutton");
var togglebtn_i = 0;
togglebtn.addEventListener("click", (e) => {
  let divs = document.querySelectorAll(".container");
  if (togglebtn_i % 2 == 0) {
    togglebtn.innerText = "Light Mode";
    divs.forEach((e) => {
      e.style.border = "2px solid white";
    });
    document.querySelector("body").classList.add("bg-darkk");
  } else {
    togglebtn.innerText = "Dark Mode";
    divs.forEach((e) => {
      e.style.border = "2px solid black";
    });
    document.querySelector("body").classList.remove("bg-darkk");
  }
  togglebtn_i++;
});
