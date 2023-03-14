import validate from "validate.js";

const form = document.querySelector(".form");
const inputs = form.querySelectorAll(".form__input");

const constraints = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters",
    },
  },
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = validate(
    {
      email: form.elements.email.value,
      password: form.elements.password.value,
    },
    constraints
  );

  inputs.forEach((input) => {
    const errors = result?.[input.name] ?? [];

    const $error = form.querySelector(`.form__input-error_type_${input.name}`);

    $error.textContent = errors.join('')
  });
});
