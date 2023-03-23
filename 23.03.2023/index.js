import Dropdown from './Dropdown.js'

const $dropdown = document.querySelector(".dropdown");
const $dropdownButton = $dropdown.querySelector(
  ".dropdown__current-item-button"
);
const $dropdownMenu = $dropdown.querySelector(
  '.dropdown__menu'
)

const dropdown = new Dropdown('.dropdown', {
  onChange: ({content, i}) => alert(`Privet, ${content} #${i}`),
  items: ['one', 'two', 'three'],
  isOpen: true
})

console.log(dropdown)
