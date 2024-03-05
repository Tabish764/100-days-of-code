"use strict";
//🚀 Day 4 Challenge: Start Coding! 🚀
// This program prints my favourite number
let favouriteNumber = 7;
let message = `My favorite number is ${favouriteNumber}`;
console.log(message);
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
const names = ['Ali', 'Saad', 'Aqib'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
