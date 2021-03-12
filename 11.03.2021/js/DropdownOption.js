export default class DropdownOption {
    constructor(value, id, templateSelector = '.dropdown__option-template') {
        this.templateSelector = templateSelector
        this.$el = this.getTemplate(value, id)
    }

    getTemplate(value, id) {
        const $template = document.querySelector(this.templateSelector)
        const $option = $template.content
            .querySelector('.dropdown__option')
            .cloneNode(true)
        
        console.log({$option})

        $option.textContent = value 
        $option.setAttribute('data-option-id', id)

        return $option
    }
}