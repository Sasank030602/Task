            // 1. Use Switch to print day name based on number, number should taken from user using prompt

// function printDayName() {
    // let dayNumber = Number(prompt("Enter a number (1-7):"), 7);
    // switch (dayNumber) {
    //     case 1:
    //         console.log("Sunday");
    //         break;
    //     case 2:
    //         console.log("Monday");
    //         break;
    //     case 3:
    //         console.log("Tuesday");
    //         break;
    //     case 4:
    //         console.log("Wednesday");
    //         break;
    //     case 5:
    //         console.log("Thursday");
    //         break;
    //     case 6:
    //         console.log("Friday");
    //         break;
    //     case 7:
    //         console.log("Saturday");
    //         break;
    //     default:
    //         console.log("Invalid input! Please enter a number between 1 and 7.");
    // }
// }
// printDayName();



            // 2. Create and array of 5 numbers and print all using for loop and print user specfied number by taking a number from user using prompt

// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// let index = Number(prompt("Enter index number (0 to 4):"));
// if (index >= 0 && index < numbers.length) {
//     console.log("Element at index " + index + " is: " + numbers[index]);
// } else {
//     console.log("Invalid index!");
// }



            // 3. Create a Function to find square of a number

// function square(number) {
//     return number * number;
// }
// let num = Number(prompt("Enter a number:"));
// console.log("Square is: " + square(num));



            // 4. Create a Funtion to find cube of a number

// function cube(number) {
//     return number * number * number;
// }
// let num = Number(prompt("Enter a number:"));
// console.log("Cube is: " + cube(num));



            // 5. convert the square and cube functions they should in all formats (function expression, declartion, arrow functions)

// const squareExp = function(n) {
//     return n * n;
// };

// const cubeExp = function(n) {
//     return n * n * n;
// };

// function squareDecl(r) {
//     return r * r;
// }

// function cubeDecl(r) {
//     return r * r * r;
// }

// const squareArrow = (s) => s * s;
// const cubeArrow = (s) => s * s * s;

// let num = Number(prompt("Enter a number:"));
// let r = Number(prompt("Enter a number:"));
// let s = Number(prompt("Enter a number:"));

// console.log("Using Function Expression:");
// console.log("Square:", squareExp(num));
// console.log("Cube:", cubeExp(num));

// console.log("Using Function Declaration:");
// console.log("Square:", squareDecl(r));
// console.log("Cube:", cubeDecl(r));

// console.log("Using Array Function:");
// console.log("Square:", squareArrow(s));
// console.log("Cube:", cubeArrow(s));



            // 6. Create an array with names and greet each name using a function

// let names = ["Sasank", "Jayanth", "Nikhil", "Jeethendra", "Sukesh"];
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// let i = 0;
// while(i < names.length){
//     greet(names[i]);
//     i++;
// }
// console.log("Hello, _______" + "!")
// for (let i = 0; i < names.length; i++) {
//     greet(names[i]);
// }



            // 7. Need create your own function and switch case

// function calculator (a, b, operator) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = a + b;
//             break;
//         case "-":
//             result = a - b;
//             break;
//         case "*":
//             result = a * b;
//             break;
//         case "/":
//             result = a / b;
//             break;
//         default:
//             result = "Invalid Operator"
//     }
//     return result;
// }
// let a = Number(prompt("Enter a First Number:"));
// let b = Number(prompt("Enter a Second Number:"));
// console.log(calculator(a, b, "+"));
// console.log(calculator(a, b, "-"));
// console.log(calculator(a, b, "*"));
// console.log(calculator(a, b, "/"));





