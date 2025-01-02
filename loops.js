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


