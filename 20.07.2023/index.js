class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log("eat");
  }

  fly() {
    console.log("fly");
  }
}

class Dog extends Animal {
  bark() {
    console.log("ГАВ");
  }
}

const dog = new Dog("barsik");
const dog1 = new Dog("borya");

// console.log({ dog });

console.log(dog.__proto__)
console.log(Dog.prototype)
