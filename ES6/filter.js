// A Filter creates a new filtered array from an array passed into the function

var animals = [
	{ name: 'Fluffle', species: 'rabbit' },
	{ name: 'Doggo', species: 'dog' },
	{ name: 'Woofer', species: 'dog' },
	{ name: 'Fishy Boi', species: 'fish' },
	{ name: 'Bob', species: 'cat' },
	{ name: 'Bubble', species: 'fish' },
];

let dogs1 = [];

// So this foor loop does the same thing as
// For each loop
for (let animal of animals) {
	if (animal.species === 'dog') {
		dogs1.push(animal);
	}
}

// This filter statement
let dogs2 = animals.filter(animal => animal.species === 'dog');

console.log(`for loop:`);
console.log(dogs1);
console.log(`\nfilter:`);
console.log(dogs2);
