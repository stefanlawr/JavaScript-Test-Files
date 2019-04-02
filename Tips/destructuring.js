const turtle = {
  name: 'Bob',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10,
  diet: 'berries'
}

// Bad Code

function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

// Good Code

const foo = ({
  name,
  meal,
  diet
}) => {
  return `Feed ${name} ${meal}kilos of ${diet}`;
}

// OR

const bar = (animal) => {
  const {
    name,
    meal,
    diet
  } = animal;
  return `Feed ${name} ${meal}kilos of ${diet}`;
}
