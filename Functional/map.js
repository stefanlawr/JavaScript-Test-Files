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

// For Loop Method
let names = [];
for (let i = 0; i < animals.length; i++) {
	names.push(animals[i].name);
}

// With callback function
const names_map = animals.map(function(animals) {
	return `${animals.name} is a ${animals.species}`;
});

// Implicit
const names_map_es6 = animals.map(
	animals => `${animals.name} is a ${animals.species}`,
);

console.log(names);
console.log(names_map_es6);
console.log(names_map);
