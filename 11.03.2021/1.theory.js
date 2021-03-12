class Animal {
    constructor() {}

    eat() {}

    say() {
        console.log('Я животное')
    }
}

class Cat extends Animal {
    say() {
        super.say()
        console.log('Meow')
    }
}

class Dog extends Animal {
    say() {
        super.say()
        console.log('Bark')
    }
    
    seat() {}
}

class Human extends Animal {
    say() {
        super.say()
        console.log('Дай денег')
    }

    jump() {}
}

const sayables = [new Cat(), new Dog(), new Human()]

function animalSay(sayables) {
    sayables.forEach(s => s.say())
}

animalSay(sayables)