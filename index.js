const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const drinks = {
  "Coca Cola": 3.35,
  "Pepsi": 2.10,
  "Orange": 2.85
};
const validMoney = [5, 10, 15, 20];

function askForMoney(balance = 0) {
  rl.question("Insert money ($5, $10, $15, $20): ", (input) => {
    let money = parseFloat(input);
    if (!validMoney.includes(money)) {
      console.log("Invalid amount. Try again.");
      return askForMoney(balance);
    }
    balance += money;
    console.log(`Balance: $${balance.toFixed(2)}`);
    selectDrink(balance);
  });
}

function selectDrink(balance) {
  console.log("\nAvailable Drinks:");
  for (let drink in drinks) {
    console.log(`${drink} - $${drinks[drink].toFixed(2)}`);
  }

  rl.question("Select a drink: ", (choice) => {
    if (!drinks.hasOwnProperty(choice)) {
      console.log("Invalid choice. Try again.");
      return selectDrink(balance);
    }

    let price = drinks[choice];
    if (balance >= price) {
      balance -= price;
      console.log(`${choice} purchased! Remaining balance: $${balance.toFixed(2)}`);
      askForAnother(balance);
    } else {
      console.log(` Not enough money! ${choice} costs $${price.toFixed(2)}.`);
      askForMoney(balance);
    }
  });
}

function askForAnother(balance) {
  rl.question("\nDo you want another drink? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === "yes") {
      selectDrink(balance);
    } else {
      console.log("Thanks for using the vending machine!");
      rl.close();
    }
  });
}

// Start the vending machine script
askForMoney();