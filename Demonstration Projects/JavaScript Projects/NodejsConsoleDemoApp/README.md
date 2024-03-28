# NodejsConsoleDemoApp by Daniel P. Mckenna
This is a simple console application written in JavaScript for use in Node.js
It that showcases fundamental techniques in modern JavaScript including:
- String manipulation
- Conditionals
- Loops
- Functions
- User input through the console via an npm package

*An important note about console input functionality in JavaScript:*
JavaScript does NOT natively support (or at least not comfortably) user input to the console as of 2024
A work around to comfortably allow user input via the console is to import the "prompt-sync" package from npm
Visual Studio was used to add the "prompt-synch" package to the project which then automatically updated package.json
I also needed to manually add the "type" attribute to package.json and set it's value to "module"