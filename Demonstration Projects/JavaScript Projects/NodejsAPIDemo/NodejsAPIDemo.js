/* Created by Daniel Mckenna
 * This is a JavaScript application that calls an API and returns the results to the console
 * This application was written in pure JavaScript for execution in the console via Node.js
 */

/* We will be invoking the "/films/:id/" Endpoint of the "swapi" API and pass in the ID number for the movie "The Phantom Menace"
 * We will then extract the opening text crawl of the movie from the returned results and display them on the console. */

'use strict';

const myURL = "https://swapi.dev/api";
const myMovieID = "4";
const myEndpoint = `/films/${myMovieID}/`;
const myAPI_path = myURL + myEndpoint;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

try {
    const result = await fetch(myAPI_path, requestOptions);
    const resultObj = await result.json();
    console.log(resultObj.opening_crawl);
}
catch(err) {
    console.error("An error occurred when trying to call the API");
    throw err;
}