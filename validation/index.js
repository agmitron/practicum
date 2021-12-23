const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')

const validationConfig = {
  inputErrorClass: 'input_type_error'
}

const showInputError = (formElement, inputElement, { inputErrorClass }, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
  errorElement.textContent = errorMessage
  inputElement.classList.add(inputErrorClass)
}

const hideInputError = (formElement, inputElement, { inputErrorClass }) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
  errorElement.textContent = ''
  inputElement.classList.remove(inputErrorClass)
}

inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    if (!e.currentTarget.validity.valid) {
      showInputError(form, e.currentTarget, validationConfig, e.currentTarget.validationMessage)
    } else {
      hideInputError(form, e.currentTarget, validationConfig)
    }
  })
})
