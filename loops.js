/*
 Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, 
 but in steps of 10; so 100, 90, 80... etc. 
 */
 let number = 100;
    while (number >= 0) {
        console.log(number);
        number -= 10;
    }
    /*
    using for loop
    */
    for (let i = 100; i >= 0; i -= 10) {
        console.log(i);
    }

/*
Exercise 2: Modify the previous program so that it asks the user for the first and last number 
it uses instead of 100 and 0 (hint: use the prompt dialog).

Check if the entered values are correct (that the initial value is greater than the final value).
 */
let firstNumber = prompt("Enter the first number", "100");
let lastNumber = prompt("Enter the last number", "0");
if (Number(firstNumber) > Number(lastNumber)) {
    console.log("Error");
} else {
    while (Number(firstNumber) >= Number(lastNumber)) {
        console.log(firstNumber);
        firstNumber -= 10;
    }
}
/*
Exercise 3: There are ten different numbers in the following numbers array:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Write a program that first writes out all these numbers on the console, then only those that are even 
(hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger 
than 10 and at the same time smaller than 60.
*/
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
//using for.. of loop
for (let number of numbers) {
    console.log(number);
}
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
for (let number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}
/*

Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt)
 and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as
you want into the movies array. Each element of the array will be an object, consisting of two fields:
title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program
should first print out to the console all movies that have a rating of less than 7, then those whose 
rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.:
*/

let movies = [];
let title;
let rating;
let movie;
while (true) {
    title = prompt("Enter the name of the movie", "Titanic");
    if (title === null) {
        break;
    }
    rating = prompt("Enter the rating of the movie", "7.8");
    if (rating === null) {
        break;
    }
    movie = {
        title: title,
        rating: rating
    };
    movies.push(movie);
}
for (let movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} - ${movie.rating}`);
    }
}
for (let movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} - ${movie.rating}`);
    }
}
