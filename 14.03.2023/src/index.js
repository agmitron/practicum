import validate from "validate.js";
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const form = document.querySelector(".form");
const formFields = form.querySelectorAll(".form__field");
const timestamp = document.querySelector('#timestamp')

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

  const errors = validate(
    {
      email: form.elements.email.value,
      password: form.elements.password.value,
    },
    constraints
  );

  formFields.forEach((field) => {
    const input = field.querySelector(".form__input");
    const error = field.querySelector(".form__input-error");

    error.textContent = errors?.[input.name]
  });
});

setInterval(() => {
  timestamp.textContent = uuidv4();
}, 1000)