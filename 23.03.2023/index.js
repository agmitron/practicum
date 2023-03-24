import AppliableDropdown from "./components/AppliableDropdown/index.js";
import Checkbox from "./components/Checkbox/index.js";
import Dropdown from "./components/Dropdown/index.js";
import Rating from "./components/Rating/index.js";

const dropdown = new Dropdown(".dropdown", {
  items: ["1", "2", "3", "4"],
  // isDisabled: true,
  // onChange: () => alert('onChange'),
  // onOpen: () => alert('onOpen'),
  // onClose: () => alert('onClose'),
});

const dropdown2 = new AppliableDropdown(".dropdown", {});

console.log(dropdown2);

// const components = [
//   new Checkbox(),
//   new Dropdown(),
//   new AppliableDropdown(),
//   new Rating(),
// ];

// components.forEach((component) => {
//   component.render()
// });

dropdown._setEventListeners()

// dropdown.isOpen
// dropdown.isDisabled
// dropdown.open()
// dropdown.close()
// dropdown.toggle()
// dropdown.change('new value')
