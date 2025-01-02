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

/*
Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two
numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user 
input is valid, calculate the result and show it to the user. If the user input is invalid, display a 
message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.
isNaN method to check if you get the correct number after conversion. For example, calling 
Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
*/
let number2 = prompt("enter a number", "100");
let number3 = prompt("enter a number", "100");
let operation = prompt("enter a operation", "+");
let result;
if (Number.isNaN(Number(number2)) || Number.isNaN(Number(number3))) {
    console.log("Error");
} else {
    switch(operation){
        case "+":
            result = Number(number2) + Number(number3);
            break;
        case "-":
            result = Number(number2) - Number(number3);
            break;
        case "*":
            result = Number(number2) * Number(number3);
            break;
        case "/":
            result = Number(number2) / Number(number3);
            break;
        default:
            console.log("Error");
    }
    console.log(result);
}
