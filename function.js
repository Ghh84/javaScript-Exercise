// create a function that calculate the factorial of a number. The function should take a number as
//  an argument and return the factorial of the number.

function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6

// create a function that takes a string as an argument and returns the reverse of the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // olleh
