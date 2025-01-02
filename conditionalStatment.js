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

/*
LAB 2 Conditional Statement 

Scenario

During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by
 the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what 
 they want to do with the list. They will have a choice of:

    showing the first contact (first)
    showing the last contact (last)
    adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing 
(name, phone, or email) don't add the contact.
*/
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let choice = prompt("Enter your choice", "first");
if (choice === "first") {
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
} else if (choice === "last") {
    let last = contacts.length - 1;
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
}
else if (choice === "new") {
    let newName = prompt("Name of new contact, enter the name ");
    let newPhone = prompt("Phone number, enter the number");
    let newEmail = prompt("Email , enter email");
    if (newName && newPhone && newEmail) {
        let newContact = { name: newName, phone: newPhone, email: newEmail }
        contacts.push(newContact)
    }
    else {
        console.log("Error");
    }
}