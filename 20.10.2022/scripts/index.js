import Character from './Character/Character.js'
import Mage from './Character/Mage.js'
import Item from './Item/Item.js'

const gameContainer = document.querySelector('.game')

console.log({ gameContainer })

fetch('https://sdasda.ru/character/1')
  .then(res => res.json())
  .then(data => {
    const player = new Character({
      name: data.name,
      position: { x: data.position.x, y: data.position.y },
      inventory: data.inventory,
      step: 5,
      mana: 100,
      health: 100,
      power: 5,
      skin: 'yellow',
      container: gameContainer
    })

    player.render()
  })

player.render()

const npc = new Character({
  position: { x: 20, y: 0 },
  intentory: [],
  step: 1,
  mana: 100,
  health: 50,
  power: 1,
  skin: 'blue',
  container: gameContainer
})

npc.render()

const mage = new Mage({ position: { x: 150, y: 0 }, container: gameContainer })

mage.render()

const stone = new Item({ effect: () => { }, health: 10 })

player.attack(stone)
player.attack(mage)
player.attack(npc)

setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    mage.move('right')
    mage.render()
  }
}, 5000)

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': {
      const newPosition = player.move('left')
      player.render()
      console.log({ newPosition })
      break
    }

    case 'ArrowRight': {
      const newPosition = player.move('right')
      player.render()
      console.log({ newPosition })
      break
    }

    case ' ': {
      player.jump()
      break
    }

    default: {
      break
    }
  }
})
