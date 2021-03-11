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
        this.$dropdown = document.querySelector(selector)

        this.options = [...this.$dropdown.querySelectorAll(config.selectors.option)]
            .map($el => {
                const camelCasedOptionId = dataAttributeSnakeCaseToCamelCase(
                    config.selectors.optionId
                )
                
                const id = $el
                    .dataset[camelCasedOptionId]
                
                return {
                    $el,
                    id
                }
            })

        this.$placeholder = this.$dropdown.querySelector(config.selectors.data.placeholder)
        
        this.config = config
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
        this.$placeholder.textContent = this.options.find(opt => opt.id === optionId).$el.textContent
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