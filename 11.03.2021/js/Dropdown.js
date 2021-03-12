import DropdownOption from './DropdownOption.js'

const defaultConfig = {
    option: DropdownOption
}

// [{$el: DOM, increment() {}, decrement() {}, counter}]

export default class Dropdown {
    constructor(selector, config = defaultConfig) {
        this._$el = document.querySelector(selector)
        this._options = config.options.map((opt, i) => new config.option(opt, i))
        
        const $menu = this._$el.querySelector('.dropdown__menu')

        console.log(this._options)
        this._options.forEach(opt => {
            $menu.append(opt.$el)
        })

        this._$placeholder = this._$el.querySelector('.dropdown__placeholder')

        this._setEventListeners()
    }

    get opened() {
        return !this._$el.classList.contains('dropdown_closed')
    }

    open() {
        this._$el.classList.remove('dropdown_closed')
    }

    close() {
        this._$el.classList.add('dropdown_closed')
    }

    toggle() {
        this._$el.classList.toggle('dropdown_closed')
    }

    select(optionId) {
        const $option = this._options.find(opt => opt.$el.dataset.optionId === optionId).$el
        this._$placeholder.textContent = $option.textContent
        console.log({$option})
        this.close()
    }

    _setEventListeners() {
        this._$placeholder.addEventListener('click', () => {
            this.toggle()
        })

        this._$el.addEventListener('click', e => {
            const isOption = e.target.classList.contains('dropdown__option')

            if (isOption) {
                this.select(e.target.dataset.optionId)
            }
        })
    }
}