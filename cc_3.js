// Task 1: Product Price Management

// Declare an array prices using let and initialize it with at least five numerical values
let prices = [10.99, 20.49, 15.00, 25.75, 30.00];

// Add a new price to the array
prices.push(18.99);

// Remove the first price from the array
prices.shift();

console.log(prices); // Output the updated prices array

// Task 2: Modifying Customer Orders

// Declare an array orders with at least five numerical values representing quantities
let orders = [2, 5, 3, 8, 6];

// Increase the third order quantity by 5
orders[2] += 5;

// Calculate the total number of all orders
let totalOrders = orders.reduce((total, order) => total + order, 0);

console.log(orders); // Output the updated orders array
console.log(totalOrders); // Output the total number of all orders