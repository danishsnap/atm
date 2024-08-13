#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Fast cash", "Withdraw", "Check balance"],
        },
    ]);
    if (operationAns.operation === "Fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select amount",
                type: "list",
                choices: [500, 1000, 3000, 5000, 7500, 10000, 15000],
            },
        ]);
        if (myBalance < amountAns.amount) {
            console.log("Your required amount is not available due to low balance");
        }
        else if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Amount withdrawl completed successfully");
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (myBalance < amountAns.amount) {
            console.log("Your required amount is not available due to low balance");
        }
        else if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Amount withdrawl completed successfully");
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log("Your balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect pin code please try again with correct pin code");
}
