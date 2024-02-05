// Day 3: Intro to Conditional Statements

/* Task
Given an integer,N, perform the following conditional actions:
If N is odd, print Weird
If N is even and in the inclusive range of 2 to 5, print Not Weird
If N is even and in the inclusive range of 6 to 20, print Weird
If N is even and greater than 20, print Not Weird
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Write your code here, Solve the challenge

function main() {
    const N = parseInt(readLine().trim(), 10);
    if (N % 2 !==0 || (N >= 6 && N<= 20)){
        console.log("Weird")
    } else {
        console.log("Not Weird")
    }
}
