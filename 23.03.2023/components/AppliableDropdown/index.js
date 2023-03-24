import Dropdown from '../Dropdown/index.js';

class AppliableDropdown extends Dropdown {
  constructor(selector, config) {
    super(selector, config);
  }

  clear() {
    this.value = ''
  }

  apply() {
    
  }
}

export default AppliableDropdown;
