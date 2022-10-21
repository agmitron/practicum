import Item from './Item.js'

class Potion extends Item {
  constructor(health) {
    super({
      effect: (character) => {
        character.health = character.health + health
      }
    })
  }

  use(character) {
    this.effect(character)
  }
}

export default Potion