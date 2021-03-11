import Dropdown from './common.blocks/dropdown/dropdown.js'
import DropdownOptionCounter from './common.blocks/dropdown/__option/_counter/dropdown__option_counter.js'

// 1. Как должно выглядеть использование нашего плагина?

const mainDropdown = new Dropdown('.main__dropdown')

const counterDropdown = new Dropdown('.main__dropdown-with-counter', {
    dependencies: {
        option: [DropdownOptionCounter, {
            selectors: {
                counter: '.option__counter',
                increment: '.option__increment',
                decrement: '.option__decrement',
                placeholder: '.counter__placeholder'
            }
        }]
    }
})