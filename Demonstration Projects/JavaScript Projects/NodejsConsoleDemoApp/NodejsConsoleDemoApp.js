/* Created by Daniel Mckenna
 * A simple console application written in JavaScript for use in Node.js
 * Writes a series of messages to the console showcasing fundamental techniques including:
 *  string manipulation
 *  functions
 *  conditionals
 *  loops
*/

// enable strict mode to prevent any accidental undeclared variables/objects from being used
'use strict';

// import packages/libraries
import createPrompt from 'prompt-sync'; // enables to the ability to prompt the user for input via the console

// a function showcasing string manipulation techniques
function testStringManipulation() {
    console.log("**********STRING TECHNIQUES**********");
    console.log("We will now begin to demonstrate string manipulation techniques in JavaScript via the console");

    // write a message using string concatenation
    console.log("This message was made using " + "string concatenation");

    // write a message using string concatenation from a variable
    let concatenationStr = "string concatenation";
    console.log("This message was made using " + concatenationStr + " from a variable");

    // write a message to the console using string interpolation
    // note that string interpolation uses backticks (`) as opposed to single quotes (') or double quotes (")
    let interpolationStr1 = "string";
    let interpolationStr2 = "interpolation";
    console.log(`This message was made using ${interpolationStr1} ${interpolationStr2}`);

    // write a message to the console that includes double quotes via the escape character
    console.log("This message uses \\ as an escape character in order to print \"double quotes\" to the console");

    // write a multi-line message to the console using the \n newline character
    console.log("\nThis is a multi-line message\nthat was made using\nthe \\n newline character\n");

    // write a multi-line message to the console using backticks (`)
    console.log(`This is a multi-line message
                 that was made using backticks
                 `);

    // display the total number of letters in the word "Cranberries"
    let testString1 = "Cranberries";
    console.log("The total number of letters in the word \"" + testString1 + "\" is " + (testString1.length).toString());

    // loop through each letter in the test string and display their position number and value
    for (let i = 0; i < testString1.length; i++) {
        console.log("The letter in position " + (i + 1).toString() + " of the word \"Cranberries\" is " + testString1[i]);
    }

    // check if a given string appears within another string
    // if so then return the position of the first instance of the substring
    if (testString1.includes("berries")) {
        console.log("The word \"berries\" appears in the word \"Cranberries\" at position " + ((testString1.indexOf("berries") + 1)).toString());
    }
    else {
        console.log("The word \"berries\" does NOT appear in the test string");
    }
}

// test user input via the console
function testUserInput() {
    let prompt = createPrompt(); // create a prompt object
    let userNumber = prompt("Please enter your favorite number: ");

    // validate the user's input (if any)
    // use recurrsion to re-prompt the user for input if any errors were found
    if (!userNumber) {
        console.log("Input cannot be empty")
        testUserInput();
    }
    // validate that the user's input is a number
    else if (isNaN(userNumber)) {
        console.log("Input must be a number")
        testUserInput();
    }
    else {
        console.log("The number you entered is: " + userNumber);
    }
}

// statements to be executed
testStringManipulation(); // begin testing string manipulation techniques
testUserInput(); // begin testing user input via the console