export default class DropdownOption {
    constructor(value, id, templateSelector = '.dropdown__option-template') {
        this.templateSelector = templateSelector
        this.$el = this.getTemplate(value, id)
        this.selected = false
    }

    getTemplate(value, id) {
        const $template = document.querySelector(this.templateSelector)
        const $option = $template.content
            .querySelector('.dropdown__option')
            .cloneNode(true)
        
        $option.childNodes[0].textContent = value
        $option.setAttribute('data-option-id', id)

        return $option
    }

    select() {
        this.selected = true
    }

    get value() {
        return this.$el.textContent
    }
}