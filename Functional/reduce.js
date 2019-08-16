const orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 },
];

// For Loop Method
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}

// Reduce Method
let totalAmount_Reduce = orders.reduce(function(sum, order) {
	console.log(`Sum: ${sum}, Order: ${Object.values(order)}`);
	return sum + order.amount;
}, 0);

// Implicit
const totalAmount_Implicit = orders.reduce(
	(sum, order) => sum + order.amount,
	0,
);

console.log(totalAmount);
console.log(totalAmount_Implicit);
console.log(totalAmount_Reduce);
