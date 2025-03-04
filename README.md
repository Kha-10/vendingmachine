Vending Machine

A simple command-line-based vending machine built with Node.js using the readline module. It simulates the process of inserting money, selecting a drink, and making a purchase. The available drinks and their prices are pre-configured, and users can purchase drinks if they have sufficient funds.

Features

Allows users to insert money in predefined amounts: $5, $10, $15, $20.
Displays available drinks with their prices.
Prompts users to select a drink after inserting money.
Ensures sufficient balance before making a purchase.
Allows users to purchase another drink or exit.
Requirements

Node.js version 12.x or later.
How to Use

Clone or download the repository.
Open a terminal in the project directory.
Run the script:
node vendingMachine.js
Follow the on-screen prompts:
Insert money in predefined amounts ($5, $10, $15, $20).
Choose a drink from the list (Coca Cola, Pepsi, Orange).
If your balance is sufficient, the drink will be dispensed.
Decide if you want another drink or exit the vending machine.
Available Drinks & Prices

Coca Cola - $3.35
Pepsi - $2.10
Orange - $2.85
Example Interaction

Insert money ($5, $10, $15, $20): 10
Balance: $10.00

Available Drinks:
Coca Cola - $3.35
Pepsi - $2.10
Orange - $2.85

Select a drink: Pepsi
Pepsi purchased! Remaining balance: $7.90

Do you want another drink? (yes/no): yes
...
License

This project is licensed under the MIT License.