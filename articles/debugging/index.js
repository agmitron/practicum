const person = {
  speed: 5,
  position: {
    x: 10,
    y: 0
  },
  health: 50,
  actions: {
    eat: () => alert('Ням-ням'),
    jump: () => alert('Прыг-скок'),
    sleep: "zZZZzzzzZZzzzz"
  }
}

person.actions.sleep()