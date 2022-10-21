class Character {
  constructor({ health, mana, position, inventory, step, power, skin, container }) {
    this.health = health
    this.mana = mana
    this.position = position
    this.inventory = inventory
    this.step = step
    this.power = power
    this.skin = skin

    this._container = container
    this._element = null
  }

  move(direction) {
    switch (direction) {
      case 'left': {
        this.position.x = this.position.x - this.step
        return this.position
      }

      case 'right': {
        this.position.x = this.position.x + this.step
        return this.position
      }

      default: {
        throw new Error(`Unknown direction: ${direction}`)
      }
    }
  }

  attack(attackable) {
    attackable.health = attackable.health - 1
  }

  jump() { }

  render() {
    if (!this._element) {
      const div = document.createElement('div')

      div.style.backgroundColor = this.skin
      div.style.left = this.position.x + 'px'

      div.textContent = `Health: ${this.health};`

      div.classList.add('hero')

      this._container.appendChild(div)

      this._element = div
      return div
    }

    this._element.style.backgroundColor = this.skin
    this._element.style.left = this.position.x + 'px'
  }
}

export default Character
