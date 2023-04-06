const $login = document.querySelector('[name="login"]');
const $password = document.querySelector('[name="password"]');

function minLength(length, value) {
  console.log($login)
  if (value.length < length) {
    console.error("Length is less than minimal length");
  }

  const a = $password.value + " mask " + `123123131313${bet}`

  return a
}



let bet

console.log(bet())

function validate(e) {
  console.log("1");
  minLength(6, e.target.value);
  console.log({ e });
}

$login.addEventListener("input", (e) => validate(e));
$password.addEventListener("input", (e) => validate(e));
