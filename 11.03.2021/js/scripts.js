import Dropdown from './Dropdown.js'
import DropdownCounterOption from './DropdownCounterOption.js'
import DropdownOption from './DropdownOption.js'

const dropdown = new Dropdown('.main__dropdown', {
    option: DropdownOption,
    options: ['отель', 'прокат', 'кафе']
})

const dropdown1 = new Dropdown('.main__dropdown2', {
    option: DropdownCounterOption,
    options: ['санки', 'ледянки', 'машина']
})