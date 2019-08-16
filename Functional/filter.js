// A Filter creates a new filtered array from an array passed into the function

let animals = [
	{
		name: 'Fluffle',
		species: 'rabbit',
	},
	{
		name: 'Doggo',
		species: 'dog',
	},
	{
		name: 'Woofer',
		species: 'dog',
	},
	{
		name: 'Fishy Boi',
		species: 'fish',
	},
	{
		name: 'Bob',
		species: 'cat',
	},
	{
		name: 'Bubble',
		species: 'fish',
	},
];

let dogs1 = [];

// So this foor loop does the same thing as
// For each loop
for (let animal of animals) {
	if (animal.species === 'dog') {
		dogs1.push(animal);
	}
}

// Callback function
let dogs = animals.filter(function(animal) {
	return animal.species === 'dog';
});

// Declaring a function to use in filter/reject
let isDog = function(animal) {
	return animal.species === 'dog';
};
let output = animals.filter(isDog);
let otherAnimals = animals.reject(isDog);

// This filter statement
let dogs2 = animals.filter(animal => animal.species === 'dog');

console.log(`for loop:`);
console.log(dogs1);
console.log(`\nfilter:`);
console.log(dogs2);

/*
  In JavaScript, Functions are values. This can be taken advantage of by dividing your code into small, simple functions and composing them together.
  Less Code, Less bugs.
*/
