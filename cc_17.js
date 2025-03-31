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
  const customer1 = new Customer("Henry", "Henry@usf.edu");
  customer1.addPurchase(120);
  customer1.addPurchase(80);
  console.log(`${customer1.name}'s Total Spent: $${customer1.getTotalSpent()}`);

// Task 2: Created Sales Rep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    // Add a customer object to the clients list
    addClient(customer) {
      this.clients.push(customer);
    }
  
    // Find a customer by name and return their total spent
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Create sales rep and add clients
  const rep = new SalesRep("Andre");
  rep.addClient(customer1);
  console.log(`${rep.name}'s Clients:`, rep.clients.map(c => c.name));
  console.log(`Total spent by Henry: $${rep.getClientTotal("Henry")}`);

// Task 3: Extended VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    // Override to include 10% loyalty bonus
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      return baseTotal * 1.10; 
      // Adds 10% bonus
    }
  }
  
  // Create a VIP customer
  const vipCustomer = new VIPCustomer("Lucas", "Lucksss@um.edu", "Gold");
  vipCustomer.addPurchase(300);
  vipCustomer.addPurchase(250);
  rep.addClient(vipCustomer);
  console.log(`${vipCustomer.name} (VIP ${vipCustomer.vipLevel}) Total Spent w/ Bonus: $${vipCustomer.getTotalSpent().toFixed(2)}`);

// Task 4: Finalized Reporting System
// Store all customers
const allCustomers = [customer1, vipCustomer];

// Calculate total revenue from all customers
const totalRevenue = allCustomers.reduce((acc, customer) => acc + customer.getTotalSpent(), 0);

// Find high-spending customers over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);

// Map to summary of name and total spent
const customerSummaries = allCustomers.map(customer => ({
  name: customer.name,
  totalSpent: customer.getTotalSpent().toFixed(2)
}));

// Required Logs
console.log("Total Revenue: $" + totalRevenue.toFixed(2));
console.log("High Spenders (>$500):", highSpenders.map(c => c.name));
console.log("Customer Summary:", customerSummaries);
