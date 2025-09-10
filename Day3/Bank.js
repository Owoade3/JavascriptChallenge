const bankName = "Owaj_FinTech";
const customerRecord = [
  { id: 1, name: "Obabiolorunkosi", balance: 5000 },
  { id: 2, name: "Oba", balance: 2000 },
  { id: 3, name: "biolorunkosi", balance: 1000 },
];

const transactions = [
  { id: Math.random, customerId: 1, type: "savings", amount: 2000 },
  { id: Math.random, customerId: 2, type: "credit", amount: 20000 },
  { id: Math.random, customerId: 3, type: "debit", amount: 600 },
];
const Greetings = (customerName) => {
  console.log(`welcome to  ${bankName} ${customerName}`);
};
Greetings("Ayomide");
const addition = (num1, num2) => {
  console.log(num1 + num2);
};
const substract = (num1, num2) => {
  console.log(num1 - num2);
};
addition(89, 9);
substract(100, 20);

console.log("object");
// Function for Listing all Customers Name
function customersName() {
  customerRecord.map((customer) => {
    console.log(customer.name);
  });
}
// Function to find Customers
const findCustomers = (value) => {
  customerRecord.map((d, i) => {
    if (d.id === value) {
      console.log(d);
    }
  });
};
// Function to add New transaction into the array
function addTransaction(id, customerId, type, amount) {
  transactions.push({
    id: id,
    customerId: customerId,
    type: type,
    amount: amount,
  });
}
// A loop to Print all traansactions
function printAllTransaction() {
  for (let t of transactions) {
    console.log(t);
  }
}
// Functio to count all transactins
function countTransaction() {
  return transactions.length;
}
//function to update the transaction
function updateTransaction() {
  for (let t of transactions) {
    console.log(t);
  }
}
// Functio to desposit money
function depositMoney(Id, Amount) {
  transactions.map((d, i) => {
    if (d.customerId === Id) {
      if (Amount >= 0) {
        d.amount += Amount;
      }

      return;
    }
  });
  let update = updateTransaction();
  console.log(update);
}
console.log(transactions);
// Function to withrdraw money
function withDraw(customerId, Amt) {
  transactions.find((d, i) => {
    if (d.amount <= 0) {
      console.log("No enough fund");
    }
    if (d.customerId === customerId) {
      if (d.amount >= Amt) {
        d.amount -= Amt;
      }
      return;
    }
  });
  let update = updateTransaction();
  console.log(update);
}
// Function to find Customer currnt balace money
function currentBalance(customerId) {
  transactions.map((d) => {
    if (d.customerId === customerId) {
      console.log(d.amount);
    }
  });
}
// Function to find Customer currnt balace money
function getCutomerTrans(customerId) {
  return transactions.filter((t) => t.customerId === customerId);
}
// consoles
customersName();
findCustomers(3);
addTransaction(1, 4, "money", 500);
console.log(transactions);
printAllTransaction();
countTransaction();
console.log(countTransaction());
depositMoney(3, 1100);
withDraw(1, 3000);
withDraw(2, 300);
depositMoney(2, 100000000000000000000000000000);
console.log(transactions);
updateTransaction();
currentBalance(1);
console.log("trabsacyion 1", getCutomerTrans(1));
