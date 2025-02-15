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

// Task 3: Employee Performance Tracking

// Declare an object employee with properties: name, role, performanceScore, and isActive
let employee = {
    name: "John Doe",
    role: "Software Engineer",
    performanceScore: 85,
    isActive: true
};

// Update the performanceScore property
employee.performanceScore = 90;

// Add a new property promotionEligible with a boolean value
employee.promotionEligible = true;

console.log(employee); // Output the updated employee object


// Task 4: Customer Feedback Records

// Declare an array feedback containing at least three objects, each with properties: customerName, feedbackText, and rating
let feedback = [
    { customerName: "Alice", feedbackText: "Great service!", rating: 5 },
    { customerName: "Bob", feedbackText: "Good quality.", rating: 4 },
    { customerName: "Charlie", feedbackText: "Satisfactory experience.", rating: 3 }
];

// Add a new feedback object to the array
feedback.push({ customerName: "David", feedbackText: "Could be better.", rating: 2 });

console.log(feedback); // Output the updated feedback array
