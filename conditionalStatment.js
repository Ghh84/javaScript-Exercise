/* 
Exercise 1: 
Write a script that will ask the user to input a number.Display the message "Bingo!" when the number is 
greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
*/

let number = prompt("enter a number", "100");
if (number > 90 && number < 110)  {
    console.log("Bingo!");
}
else{
    console,log("Miss");
}

/*
Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.
*/
let number1 = prompt("enter a number", "100");
let message = (number1 > 90 && number1 < 110) ? "Bingo!" : "Miss";
console.log(message);

