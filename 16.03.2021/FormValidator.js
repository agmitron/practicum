const defaultOptions = {
    selectors: {
        input: '.form__input',
        submitButton: '.form__submit-button'
    }
}

class FormValidator {
    constructor(options = defaultOptions, $form) {
        this.options = options
        this.$form = $form
        this.$inputs = this.$form.querySelector(options.selectors.input)
        this.$submitBtn = this.$form.querySelector(options.selectors.submitButton)
    }

    _setEventListeners() {
        this.$form.addEventListener('input', e => {
            const $input = e.target
            this._validate($input)
        })
    }

    _validate($input) {
        const isValid = $input.validity.valid && $input.value.length >= 2

        if (!isValid) {
            this._showErrors()
            this._disableSubmitButton() 
        } else {
            this._enableSubmitButton()
        }
    }

    _showErrors() {}

    _disableSubmitButton() {
        this.$submitBtn.disabled = true
    }

    _enableSubmitButton() {
        this.$submitBtn.disabled = false
    }

    enableValidation() {
        this._setEventListeners()
    }
}

const validator1 = new FormValidator(null, document.querySelector('form'))