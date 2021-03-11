import DropdownOption from '../dropdown__option.js'

export default class DropdownOptionCounter extends DropdownOption {
    constructor($el, optionIdSelector, config) {
        super($el, optionIdSelector)



        this.$counter = this.$el.querySelector(config.selectors.counter)
        this.$placeholder = this.$el.querySelector(config.selectors.placeholder)
        this.counter = Number(this.$placeholder.textContent)
        this.config = config

        this._setEventListeners()
    }

    increment() {
        this.counter = Number(this.counter) + 1
        this.render()
    }

    decrement() {
        if (this.counter - 1 < 0) {
            const $decrement = this.$counter.querySelector(this.config.selectors.decrement)
            
            console.log('no more little')
        }

        this.counter = Number(this.counter) - 1
        this.render()
    }

    render() {
        this.$placeholder.textContent = this.counter
    }

    _setEventListeners() {
        super._setEventListeners()
        this.$counter.addEventListener('click', e => {
            const { selectors } = this.config
            const decrement = e.target.matches(selectors.decrement)
            const increment = e.target.matches(selectors.increment)
            if (decrement) {
                return this.decrement()
            }

            if (increment) {
                return this.increment()
            }
        })
    }
}