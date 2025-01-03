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

/*
LAB 3 Loops
Scenario

We can improve our contact list program a bit by using loops. You can now try to display not only the
 first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what
 they want to do. The user can choose to:

    display the first contact (first)
    display the last contact (last)
    display all contacts (all)
    add a new contact (new)
    exit the program (quit)

After executing the selected action, the program will give the opportunity to choose again. The program 
should end the actions only after the user gives a specified command, for example quit.
*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "maxwell@ghh.fi",
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "raja@vanttaa.fi",
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "hellen,richards@rahsi.fi",
}];
let choice; 
while (true) {
    choice = prompt("Enter your choice", "first");
    if (choice === "quit") {
        break;
    }
    if (choice === "first") {
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } else if (choice === "last") {
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    } else if (choice === "all") {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    } else if (choice === "new") {
        let newName = prompt("Name of new contact, enter the name ", "Rahsi");
        let newPhone = prompt("Phone number, enter the number", "07450394");
        let newEmail = prompt("Email , enter email", "abb@nokia.fi");
        if (newName === null || newPhone === null || newEmail === null) {
            console.log("Error");
        } else {
            let newContact = {
                name: newName,
                phone: newPhone,
                email: newEmail
            };
            contacts.push(newContact);
        }
    }
}

