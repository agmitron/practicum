// const dropdown = new Dropdown()
// const dropdown2 = new Dropdown()
// const dropdown3 = new Dropdown()
// const dropdown4 = new Dropdown()

// dropdown.isOpen
// dropdown.beds
// dropdown.bedrooms
// dropdown.addBed() // dropdown.beds = dropdown.beds + 1
// dropdown.removeBed() // dropdown.beds = dropdown.beds - 1

// dropdown2.isOpen
// dropdown2.beds
// dropdown2.bedrooms

class Coral {
  constructor(size, color) {
    this.size = size
    this.color = color
  }

  breath() {
    console.log('breath', this)
  }
  eat() {
    console.log('eat', this)
  }
  die() {
    console.log('die', this)
  }
}

const coral = new Coral(10, "blue")
const coral2 = new Coral(40, "red")
const coral3 = new Coral(24, "black")

// coral.breath()
// coral2.breath()
// coral3.die()
// coral.eat()
// coral3.eat()

class Human extends Coral {
  
  walk() {
    console.log('walk', this)
  }
}

const human = new Human(100, "violet")

// human.die()
// human.walk()

// coral.walk()

class CoffeeMachine {
  on() {
    // ...

    console.log('enable coffemachine')
  }
}

class WashingMachine {
  on() {
    // ...
  }
}

class Lamp {
  on() {
    // ...
  }
}

class TV {
  on() {
    // ...
  }
}

class Fridge {
  on() {
    // ...

    console.log('enable fridge')
  }
}

const hometech = [new CoffeeMachine(), new Fridge(), new Lamp(), new TV()]

hometech.forEach(device => {
  device.on()
})

dropdownOptions.forEach(option => {
  option.addEventListener('click', event => {
    const device = createFromEvent(event)

    device.on()
  })
})