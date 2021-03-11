import Dropdown from './common.blocks/dropdown/dropdown.js'

// 1. Как должно выглядеть использование нашего плагина?

const mainDropdown = new Dropdown('.main__dropdown', {
    selectors: {
        option: '.dropdown__option',
        menu: '.dropdown__menu',
        placeholder: '.dropdown__placeholder'
    }
})

mainDropdown.open()
mainDropdown.close()
mainDropdown.toggle()
mainDropdown.select()