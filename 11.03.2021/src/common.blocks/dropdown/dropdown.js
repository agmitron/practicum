const defaultOptions = {
    selectors: {
        option: '.dropdown__option',
        menu: '.dropdown__menu',
        placeholder: '.dropdown__placeholder'
    }
}

export default class Dropdown {
    constructor(selector = '.dropdown', options = defaultOptions) {
        this.dropdown = {
            $el: document.querySelector(selector),
            state: {
                opened: false
            }
        }

        
    }
}