// console.log("testing")
// var saltContainer = "salt"
// let sugarContainer = "sugar"
// const maggiContainer ="maggi"

// saltContainer ="ponmo"


// console.log(saltContainer)
// console.log(sugarContainer)
// console.log(maggiContainer)
//logical operators
// operator  AND = &&
// operator OR = ||
// operator NOT = !
// example of logical operaors





// let age = 65
// let voting = (age <= 18 && age >= 100)? "not eligible" : "eligible"



// console.log(voting);
// //prompt()
// let name = prompt("Enter your name")
// console .log(name)
// //alert()
// alert("Hello " + name + "welcome to my website")

// let number = parseInt(prompt("Enter a number"));
// if (number  % 2 === 0) {
//     alert('${number} is a even number');
// }else {
//     alert ('${number} is a odd number');
// }

// let valueOne = parseInt(prompt("Enter your first Number"));
// let valueTwo = parseInt(prompt("Enter your second Number"));
// let ans = valueOne + valueTwo;
// alert(ans);


// if condition
// if (15>10) {
//     console.log("15 is greater than 10");
// }

//if else condition
// if( 44 > 100) {
//     console.log("44 is greater than 100");
// } else{
//     console.log("44 is not greater than 100");
// }

// if else if condition
// if( 10 >20) {
//     console.log("10 is greater than 20");
// } else(10<20) {

// }
// const name = "bola";
// const myStory = '${name} is a good girl, ${name} goes to school';
// console.log(myStory);

// const userNumber = parseInt(prompt("Enter a number"));

// if (userNumber > 0) {
//     alert('${userNumber} is a positive number');
// }else if ( userNumber === 0) {
//     alert('${userNumber} is invalid');
// } else if (isNaN(userNumber)) {
//     alert("This is not a number");
// } else {
//     alert('${userNumber} is a negative number');
// }

// const A = parseInt(prompt("Enter the first number"));
// const B = parseInt(prompt("Enter the second number"));
// if (A  >  B) {
//     alert('${A} is greater than ${B}')
// } else  

// const grade = parseInt(prompt("Enter your grade"));
// if (grade >= 0 && grade <= 39){
//     alert( "grade = F");

// }else if ( grade >= 40 && grade <=44) {
//     alert( "grade = E");
// }else if ( grade >= 45 && grade <=49) {
//     alert( "grade = D");
// }else if ( grade >= 50 && grade <=59) {
//     alert( "grade = C");
// }else if ( grade >= 60 && grade <=69) {
//     alert( "grade = B");
// }else if ( grade >= 70 && grade <=100) {
//     alert( "grade = A");
// } else {
//     alert( "grade =  invalid grade entered")
// }

// let weight = parseFloat(prompt("Enter y"))




// function
// create a function that takes a number from that take input from the User
// function getUserInput() {
//     let getUserInput = prompt("Enter any number");
//     return getUserInput;
// }
//  console.log(getUserInput());
// function subtractTwoNumber(a, b) {
//     return a - b;
// }
// let result = subtractTwoNumber(8,5);
// console.log(result);


// create a function that takes any number from a user and check if the number is greater than 6
// function checkNumber() {
//     let getUserInput = parseInt(prompt("Enter any number"));
//     if (getUserInput > 6) {
//         alert("The number is greater than 6");
//     } else if (getUserInput === 6) {
//         alert("The number is equal to 6");
//     } else {
//         alert("The number is less than 6");
//     }
//     }
//     checkNumber();


// create a function that takes any name with prompt and will return the number of characters in the name
// function getNameLength() {
//     let name = prompt("Enter your name");
//     let getNameLength =name.length;
//     alert("The number of characters in your name is:" + getNameLength);
//     return getNameLength;
// }
// getNameLength();


// create a function that takes four parameters and returns the highest number
// function getHighestNumber(a, b, c,d) {
//     let getHighestNumber = Math.max(a, b, c, d);
//     return getHighestNumber;
// }
// let result = getHighestNumber(2, 4, 6, 8);
// console.log("The highest number is:" + result);

// function checkEvenOrOdd() {
//     let number = parseInt(prompt("Enter a number"));
//     if (isNaN(number)) {
//         alert("This is not a valid number");
//     } else if (number % 2 === 0) {
//         alert(number + " is an even number");
//     } else {
//         alert(number + " is an odd number");
//     }
// }
// checkEvenOrOdd()

// Arrow Function
// const square = (a) => a * a
// console.log(square(6));


// Function
// write an arrow function that divides two numbers 
//  const divide = (a , b) => {
//      a = parseInt(prompt("enter first number"));
//      b = parseInt(prompt("enter second number"));
//     if (b === 0) {
//         alert ("undefined");
//     } else if (a === 0 || b === 0) {
//         return 0;
//     } else {
//         alert (a / b);
//     }
//  } 
//  divide();


//  const divide = (a , b) => a /b
//  console.log(divide(10,2));




//     function checkEvenOrOdd() {
//     let number = parseInt(prompt("Enter a number"));
//     if (isNaN(number)) {
//         alert("This is not a valid number");
//     } else if (number % 2 === 0) {
//         alert(number + " is an even number");
//     } else {
//         alert(number + " is an odd number");
//     }
// }
// checkEvenOrOdd()


// write a function that returns the largest of three numbers
// function largestOfThreeNumber() {
//     let a = parseInt(prompt("Enter first number"));
//     let b = parseInt(prompt("Enter second number"));
//     let c = parseInt(prompt("Enter third number"));
//     if (a > b && a > c) {
//         alert(a + " is the largest number");
//     } else if (b > a && b > c) {
//         alert(b + " is the largest number");
//     }else if (c > a && c > b) {
//         alert(c + " is the largest number");
//     } else {
//         alert("All numbers are equal");
//     }
// }
// largestOfThreeNumber();

//  write a function that reverse a string

// function checkString() {
//     let str = prompt("Enter a string");
//     let reversedStr = str.split("").reverse().join("");
//     alert("The reversed string is:"  + reversedStr);

// }
// checkString();


// write a function that returns the longest word in a sentence
// funtion longestWord() {
//     let sentence = prompt("Enter a sentence");

// }
 