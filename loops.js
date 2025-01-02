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
    

