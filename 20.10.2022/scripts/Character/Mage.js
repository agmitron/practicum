import Potion from '../Item/Potion.js';
import Character from './Character.js';

class Mage extends Character {
  constructor({ position, container }) {
    super({
      health: 100,
      mana: 1000,
      inventory: [new Potion(10), new Potion(5)],
      step: 2.5,
      power: 1,
      skin: 'purple',
      position,
      container
    })
  }
}

export default Mage
