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

const dropdown2 = new Dropdown('.main__dropdown3', {
    option: DropdownCounterOption,
    options: ['санки1', 'ледянки1', 'машина1']
})