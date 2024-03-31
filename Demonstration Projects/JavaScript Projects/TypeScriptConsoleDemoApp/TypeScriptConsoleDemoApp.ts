/* Created by Daniel Mckenna
 * This is a simple TypeScript application showcasing fundamental programming techniques via the console
 * This application was coded in TypeScript, compiled into native JavaScript, and then executed in Node.js */

import { Console } from "console";

// This function will display basic string manipulation techniques in TypeScript/JavaScript to the console
function testStringManipulation() {
    console.log("**********Testing String Manipulation Techniques**********");
    console.log("We will now begin testing string manipulation techniques");
    let stringMessage1 = "This message was made in a variable";
    let stringMessage2: string = "This message was made in a variable using Type Annotation to explicitly define it as a string";
    let stringMessage3: string = "string concatenation";
    let stringMessage4: string = "string interpolation";
    console.log(stringMessage1);
    console.log(stringMessage2);
    console.log("This message was made using " + stringMessage3);
    console.log(`This message was made using ${stringMessage4}`);
    console.log("**********Finished Testing String Manipulation Techniques**********");
}

// display examples of arrow functions to the console
function testingArrowFunctions() {
    console.log("**********Testing Arrow Functions**********");
    console.log("We will now begin testing Arrow Functions");
    console.log(simpleArrowFunctionTest()); // test a simple arrow function
    console.log(complexArrowFunctionTest("This message was made in a ", "multi-line arrow fuction")); // test a complex arrow function
    console.log("**********Finished Testing Arrow Functions**********");
}

// a single-line arrow function with no parameters that returns a string
const simpleArrowFunctionTest = () => "This message was made in a single-line arrow function";

// a multi-line arrow function with two string parameters that returns a concatenated string
const complexArrowFunctionTest = (str1: string, str2: string) => {
    return str1 + str2;
}

// creates an array of 10 random integers with values between 1-100 and displays their values to the console
function testArrays() {
    console.log("**********Testing Arrays**********");
    console.log("We will now create an array of 10 numbers and assign a random number value to each element in the array");
    let myArray: number[] = new Array(10); //declare an array of 10 strings

    // loop through the array and assign a random number to each element
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = generateRandomInt(1, 100); // get a random integer between 1-100 and assign it to the current position in the array
        console.log("The value of the element at position " + (i + 1) + " of the array is " + myArray[i]);
    }

    console.log("**********Finished Testing Arrays**********");
}

// returns a random integer between the two specified parameters
function generateRandomInt(minVal: number, maxVal: number) {
    const minCeiling = Math.ceil(minVal);
    const maxFloor = Math.floor(maxVal);

    return Math.floor(Math.random() * (maxFloor - minCeiling) + minCeiling);
}

// Our 'Main' function containing the execution order of our program
function mainFunction() {
    console.log("The TypeScriptConsoleDemoApp program has started...")
    console.log("We will now begin to showcase fundamental TypeScript programming techniques...")
    testStringManipulation(); // test string manipulation techniques
    testingArrowFunctions(); // test arrow functions
    testArrays(); // test arrays

    console.log("The TypeScriptConsoleDemoApp program has finished...")
}

// run the program
mainFunction();