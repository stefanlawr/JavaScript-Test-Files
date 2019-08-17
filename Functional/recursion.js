const recursive = num => {
  if (num === 0) {
    return;
  }
  recursive(num - 1);
};

recursive(10);

let categories = [{
    id: "animals",
    parent: null
  },
  {
    id: "mammals",
    parent: "animals"
  },
  {
    id: "cats",
    parent: "mammals"
  },
  {
    id: "dogs",
    parent: "mammals"
  },
  {
    id: "chihuahua",
    parent: "dogs"
  },
  {
    id: "labrador",
    parent: "dogs"
  },
  {
    id: "persian",
    parent: "cats"
  },
  {
    id: "siamese",
    parent: "cats"
  }
];

const makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(x => x.parent === parent)
    .forEach(x => (node[x.id] = makeTree(categories, x.id)));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));