"use strict";
//Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let personName = 'Tabish Raza';
console.log(`Hello ${personName} would you like to learn some TypeScript today?`);
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() +personName.slice(1).toLowerCase());
