import Dropdown from './common.blocks/dropdown/dropdown.js'

// 1. Как должно выглядеть использование нашего плагина?

const mainDropdown = new Dropdown('.main__dropdown')

const myDropdown = new Dropdown('.mydropdown', { selectors: { stylesClasses: { dropdown_closed: 'mydropdown_closed' } } })
