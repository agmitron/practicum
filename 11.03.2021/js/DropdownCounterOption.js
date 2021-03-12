import DropdownOption from './DropdownOption.js';

export default class DropdownCounterOption extends DropdownOption {
    constructor(value, id) {
        super(value, id, '.dropdown__option-with-counter-template')

        this.$placeholder = this.$el.querySelector('.counter__placeholder')
        this.counter = +this.$placeholder.textContent 

        this._setEventListeners()
    }

    increment() {
        this.counter++
        this.render()
    }

    decrement() {
        if (this.counter <= 0) {
            return 
        }

        this.counter--
        this.render()
    }

    render() {
        this.$placeholder.textContent = this.counter
    }

    select() {
        super.select()
        
        if (this.counter <= 0) {
            this.selected = false
        }
    }

    _setEventListeners() {
        this.$el.addEventListener('click', e => {
            const decrement = e.target.classList.contains('counter__decrement')
            const increment = e.target.classList.contains('counter__increment')

            if (decrement) {
                return this.decrement()
            }

            if (increment) {
                return this.increment()
            }
        })
    }

    get value() {
        const title = this.$el.childNodes[0].textContent
        const counterValue = this.$placeholder.textContent

        return `${title}: ${counterValue}`
    }
}
