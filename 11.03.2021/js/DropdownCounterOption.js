import DropdownOption from './DropdownOption.js';

export default class DropdownCounterOption extends DropdownOption {
    constructor(value, id) {
        super(value, id, '.dropdown__option-with-counter-template')
    }
}
