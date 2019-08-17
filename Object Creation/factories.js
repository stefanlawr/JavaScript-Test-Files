// Class Example
class Dog {
  constructor() {
    this.sound = 'woof';
  }
  talk() {
    console.log(this.sound);
  }
}
const sniffles = new Dog();
sniffles.talk(); // Outputs 'Woof'

// If you assigned sniffles.talk() to a button, it will break because the 'this' keyword
// will not be sniffles, it will refer something else (perhaps the DOM element?)

// We can use bind() to bind the 'this' keyword, however that doens't feel intuitive.
// sniffles.talk().bind(sniffles);

// (_ => sniffles.talk());

// Factory Function
const dog = () => {
  const sound = 'Woof';
  return {
    talk: () => console.log(sound)
  }
}

const snuffles = dog();
snuffles.talk();

// Factory functions are functions that create objects
// Uses a closure, doesn't need the 'this' keyword, 'sound' is private to the dog