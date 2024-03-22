/* Created by Daniel Mckenna
 * This is a simple console application written in JavaScript for use in Node.js
 * This application will write a series of messages to the console showcasing fundamental techniques including:
 *  string manipulation
 *  user input
 *  functions
 *  arrays
 *  conditionals
 */

'use strict';

// write a simple message to the console
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

// write a multi-line message to the console using the \n newline character
console.log("This is a multi-line message\nthat was made using\nthe \\n newline character");

// write a multi-line message to the console using backticks (`)
console.log(`This is a multi-line message
that was made using backticks`);