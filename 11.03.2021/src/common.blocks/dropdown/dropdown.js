const defaultConfig = {
    selectors: {
        data: {
            option: '.dropdown__option',
            menu: '.dropdown__menu',
            placeholder: '.dropdown__placeholder',
            optionId: '[data-option-id]',
        },
        stylesClasses: {
            dropdown_closed: 'dropdown_closed',
        }
    },
}

export default class Dropdown {
    constructor(selector = '.dropdown', config = defaultConfig) {
        this.config = {
            ...defaultConfig,
            selectors: {
                ...defaultConfig.selectors,
                ...config.selectors
            }
        }

        this.$dropdown = document.querySelector(selector)


        this.options = [...this.$dropdown.querySelectorAll(this.config.selectors.data.option)]
            .map($el => {
                const camelCasedOptionId = dataAttributeSnakeCaseToCamelCase(
                    this.config.selectors.data.optionId
                )

                const id = $el
                    .dataset[camelCasedOptionId]

                return {
                    $el,
                    id
                }
            })


        this.$placeholder = this.$dropdown.querySelector(this.config.selectors.data.placeholder)

        this.#setEventListeners()
    }

    open() {
        this.$dropdown.classList.remove(this.config.selectors.stylesClasses.dropdown_closed)
    }

    close() {
        this.$dropdown.classList.add(this.config.selectors.stylesClasses.dropdown_closed)
    }

    toggle() {
        this.$dropdown.classList.toggle(this.config.selectors.stylesClasses.dropdown_closed)
    }

    select(optionId) {
        if (!optionId) return
        const $option = this.options.find(opt => opt.id === optionId).$el
        this.$placeholder.textContent = $option.textContent
    }

    #setEventListeners() {
        this.$dropdown.addEventListener('click', e => {
            const isPlaceholder = e.target.matches(this.config.selectors.data.placeholder)
            const isOption = e.target.matches(this.config.selectors.data.option)

            if (isPlaceholder) {
                this.toggle()
            }

            if (isOption) {
                const camelCasedOptionId = dataAttributeSnakeCaseToCamelCase(
                    this.config.selectors.data.optionId
                )
                const optionId = e.target.dataset[camelCasedOptionId]
                
                this.select(optionId)
                this.close()
            }
        })
    }
}

function dataAttributeSnakeCaseToCamelCase(snakeCaseString = '') {
    return snakeCaseString
        .replace('[', '')
        .replace(']', '')
        .split('-')
        .filter(substring => substring !== 'data')
        .map((substring, i) => {
            if (i === 0) return substring
            return substring[0].toUpperCase() + substring.slice(1)
        })
        .join('')
}