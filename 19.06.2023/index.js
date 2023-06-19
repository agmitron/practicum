const form = document.querySelector(".form");
const formFields = form.querySelectorAll(".form__field");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

formFields.forEach(function (field) {
  const input = field.querySelector(".form__input");
  const error = field.querySelector(".form__error");

  input.addEventListener("input", function () {
    console.log({ validity: input.validity, input });

    if (!input.validity.valid) {
      field.classList.add("form__field_invalid");
      error.textContent = input.validationMessage;
    } else {
      field.classList.remove("form__field_invalid");
      error.textContent = "";
    }
  });
});
