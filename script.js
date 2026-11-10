
// SpendWise Budget Tracker

// 1. Variables
let budget = 0;
let expense = 0;
let remainingBalance = 0;

// 2. Collect user input
budget = Number(prompt("Enter your total budget:"));
expense = Number(prompt("Enter your total expenses:"));

// 3. Budget calculation function
function calculateBalance(budget, expense) {
    return budget - expense;
}

// 4. Calculate remaining balance
remainingBalance = calculateBalance(budget, expense);

// 5. Display results in the console
console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KSh " + budget);
console.log("Total Expenses: KSh
