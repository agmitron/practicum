const $dropdown = document.querySelector(".dropdown");
const $dropdownButton = $dropdown.querySelector(
  ".dropdown__current-item-button"
);
const $dropdownMenu = $dropdown.querySelector(
  '.dropdown__menu'
)

$dropdownButton.addEventListener('click', () => {
  $dropdownMenu.classList.toggle('dropdown__menu_closed')
  $dropdownButton.classList.toggle('dropdown__current-item-button_closed')
})
