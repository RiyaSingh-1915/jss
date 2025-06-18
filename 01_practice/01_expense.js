const expense = [
{ item: "Tea", amount: 10, catergory: "drink", date:"2025-06-18"},
{ item: "Pizza", amount: 5, catergory: "food", date:"2025-09-19"},
{ item: "Movie", amount: 2, catergory: "entertainment", date:"2025-09-11"},
{ item: "Hotel", amount: 2, catergory: "stay", date:"2025-07-19"},
{ item: "Bus", amount: 2, catergory: "travel", date:"2025-04-19"}
]    

let totalSpent = 0;
let categoryCounts = {};

expense.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.item}`);
    console.log(`Amount:₹ ${item.amount}`);
    console.log(`Category: ${item.category}`);
    console.log(`Date: ${item.date}`);

totalSpent += item.amount;

if (categoryCounts[item.category]){
    categoryCounts[item.category]++;
}else{
categoryCounts[item.category] = 1;
    }
});  

console.log("=========== Summary =============");
console.log(`Total Amount Spent: ₹ ${totalSpent}`);

console.log("Category Breakdown:");
for (let category in categoryCounts){
    console.log(`${category}: ${categoryCounts[category]} item(s)`);
}