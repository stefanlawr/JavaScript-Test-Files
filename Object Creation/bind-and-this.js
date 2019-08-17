const dog = {
  sound: 'woof',
  talk: () => {
    console.log(this.sound);
  }
}

dog.talk(); // woof
let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);
boundFunction();