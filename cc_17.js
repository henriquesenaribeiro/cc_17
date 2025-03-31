// Task 1: Created Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`New customer created: ${this.name}`);
    }
  
    // Adds a purchase to the customer's history
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // Calculates total amount spent
    getTotalSpent() {
      return this.purchaseHistory.reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  // Create a customer and log total spent
  const customer1 = new Customer("Fabiana", "fabiana@usf.edu");
  customer1.addPurchase(120);
  customer1.addPurchase(80);
  console.log(`${customer1.name}'s Total Spent: $${customer1.getTotalSpent()}`);
