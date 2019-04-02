const foo = {
  name: 'Stefan',
  age: '20',
  student: true
};
const bar = {
  name: 'Dom',
  age: '22',
  student: true
};
const baz = {
  name: 'Bob',
  age: '30',
  student: false
};

// Bad Debugging
console.log(foo);
console.log(bar);
console.log(baz);

// Computed Property Names
console.log({
  foo,
  bar,
  baz
});

// CSS Styles Applied to 
console.log('%c Friends', 'color: green; font-weight: bold');
console.log({
  foo,
  bar,
  baz
});

// console.table
console.table({
  foo,
  bar,
  baz
});

// console.time()
console.time('loop');
let i = 0;
while (i < 1000000) {
  i++
}
console.timeEnd('loop');

// Stack Trace Logs
const deleteMe = () => console.trace('cya database');
deleteMe();
