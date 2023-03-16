class Animal {
  constructor(canFly = false, speed = 1, sayHello = () => {}) {
    this.isSleeping = false;
    this.isHungry = false;
    this.canFly = canFly;
    this.earLength = 10;
    this.position = { x: 0, y: 0 };
    this.speed = speed;
    this.sayHello = sayHello
  }

  jump() {
    this.y = this.y + speed * 10

    setTimeout(() => {
      this.y = 0
    }, 500)
  }

  move(direction) {
    if (direction === "left") {
      this.x = this.x - 1;
    } else {
      this.x = this.x + 1;
    }
  }
}

class Human {
  jump() {
    this.y = this.y + speed * 10

    setTimeout(() => {
      this.y = 0
    }, 500)
  }
}

class Bird extends Animal {
  constructor(speed) {
    super(true, speed)
  }

  fly() {
    alert('I believe I can fly')
  }
}

class Fish extends Animal {
  constructor(speed) {
    super(false, speed);
    this.canSwim = true;
  }

  swim() {
    alert('Swimming...')
  }
}


// function add(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b
//   }

//   return Number(a) + Number(b)
// }

// function concat(list1, list2, ...lists) {
//   // list1 = [1, 2, 3]
//   // list2 = [4, 5, 6]
//   // [1,2,3,4,5,6]

//   for (const list of lists) {

//   }
//   return [...list1, ...list2]
// }

// concat([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3])


const shuka = new Fish(4)
const salmon = new Fish(40)
const tuna = new Fish(15)

const zhavoronok = new Bird(10)
const eagle = new Bird(1000)
const chicken = new Bird(5)

const dog = new Animal(false, 0, () => alert('Я собака'))
const cat = new Animal(false, 0, () => alert('Я кот'))
const snake = new Animal(false, 0, () => alert('Я змея'))
const pig = new Animal()

const human = new Human()

const animals = [shuka, salmon, tuna, zhavoronok, eagle, chicken, dog, cat, snake, pig, human]

for (const animal of animals) {
  animal.jump()

  animal.sayHello()
}
