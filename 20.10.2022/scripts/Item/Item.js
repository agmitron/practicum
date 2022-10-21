class Item {
  constructor({ effect, health }) {
    this.effect = effect
    this.health = health
  }

  use() {
    return this.effect()
  }
}

export default Item