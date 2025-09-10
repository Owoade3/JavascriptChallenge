const bankName = "Owaj_FinTech";
const customerRecord = [
  { id: 1, name: "Obabiolorunkosi", balance: 5000 },
  { id: 2, name: "Oba", balance: 2000 },
  { id: 3, name: "biolorunkosi", balance: 1000 },
];

const transactions = [
  { id: Math.random, customerId: 1, type: "withdraw", amount: 2000 },
  { id: Math.random, customerId: 2, type: "withdraw", amount: 20000 },
  { id: Math.random, customerId: 3, type: "deposit", amount: 600 },
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
customerRecord.map((d, i) => {
    if (d.id === Id) {
      if (Amount >= 0) {
        d.balance += Amount;
        
      }
      return;
      
    }
  });
  transactions.push({
        id: Math.random(),
        customerId: Id,
        type: "deposit",
        amount: Amount,
      });
}
console.log(transactions);
// Function to withrdraw money
function withDraw(customerId, Amt) {
  customerRecord.find((d, i) => {
    if (d.balance <= 0) {
      console.log("No enough fund");
    }
    if (d.id === customerId) {
      if (d.balance >= Amt) {
        d.balance -= Amt;
      }
      return;
    }
  });
  transactions.push({
    id: Math.random(),
    customerId: customerId,
    type: "withdraw",
    amount: Amt,
  });
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

// A loop to Print all the balance  of Customers
function printAllBalance() {
  customerRecord.map((customer) => {
    console.log(`Customer Name: ${customer.name}, Balance: ${customer.balance}`);
  });
}

// A function to calculate total deposit for a customer
function getTotalDeposit(customerId) {
  return transactions
    .filter((t) => t.customerId === customerId && t.type === "deposit")
    .reduce((acc, t) => acc + t.amount, 0);
}

// A function to calculate total withdrawal for a customer
function getTotalWithdrawal(customerId) {
  return transactions
    .filter((t) => t.customerId === customerId && t.type === "withdraw")
    .reduce((acc, t) => acc + t.amount, 0);
}
// A Function to calculat net balance 
function netBalance(customerId) {
  const totalDeposit = getTotalDeposit(customerId);
  const totalWithdrawal = getTotalWithdrawal(customerId);
  return totalDeposit - totalWithdrawal;
}
// adding bonus for customer with balance above 10000
function addBonus() {
  customerRecord.map((d) => {
    if (d.balance > 10000) {
      d.balance += 500;
      console.log(`Bonus added to ${d.name}, new balance: ${d.balance}`);
    }
  });
}
// function to return all Customers balance in array
function allCustomersBalance() {
  return customerRecord.map((customer) => customer.balance);
}
// Functionto check if a cusomer is rich or poor
function isRichOrPoor(customerId) {
  const customer = customerRecord.find((d) => d.id === customerId);
  if (customer) {
    if (customer.balance > 10000) {
      console.log(`${customer.name} is rich`);
    } else {
      console.log(`${customer.name} is poor`);
    }
  }
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
console.log(withDraw(2, 300));
console.log("balance");
printAllBalance();
depositMoney(1, 20000);
depositMoney(2, 5000);
depositMoney(3, 7000);
depositMoney(3, 3000);
printAllBalance();
console.log("total deposit", getTotalDeposit(2));
console.log("total withdraw", getTotalWithdrawal(2));
console.log(netBalance(2));
console.log(netBalance(1));
console.log(netBalance(3));
addBonus();
withDraw(1, 22500);
printAllBalance();
console.log(allCustomersBalance());
isRichOrPoor(2);
isRichOrPoor(3);
isRichOrPoor(1);

