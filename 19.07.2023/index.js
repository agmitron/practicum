class Dropdown {
  constructor(selector) {
    this.$root = document.querySelector(selector);
    this.isOpen = false;

    this.state = {};

    const $options = this.$root.querySelectorAll(".dropdown__option");

    $options.forEach(($option) => {
      const $text = $option.querySelector(".dropdown__option-text");
      const $count = $option.querySelector(".dropdown__option-count");

      this.state[$text.textContent.toUpperCase()] = Number($count.textContent);
    });

    this.#setEventListeners();
  }

  open() {
    this.$root.classList.add("dropdown_open");
    this.isOpen = true;
  }

  close() {
    this.$root.classList.remove("dropdown_open");
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  increment(what) {
    this.state[what] = this.state[what] + 1;

    return this.state[what];
  }

  decrement(what) {
    const current = this.state[what];

    if (current <= 0) {
      return current;
    }

    this.state[what] = current - 1;
    return this.state[what];
  }

  #setEventListeners() {
    const $expand = this.$root.querySelector(".dropdown__expand-button");
    const $value = this.$root.querySelector(".dropdown__value-text");

    $expand.addEventListener("click", () => {
      this.toggle();
    });

    this.$root.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown__option-control")) {
        const action = event.target.textContent;
        const what = event.target.parentElement
          .querySelector(".dropdown__option-text")
          .textContent.toUpperCase();

        const $count = event.target.parentElement.querySelector(
          ".dropdown__option-count"
        );

        switch (action) {
          case "-": {
            const value = this.decrement(what);
            $count.textContent = value;
            break;
          }
          case "+": {
            const value = this.increment(what);
            $count.textContent = value;
            break;
          }
          default: {
            console.error("Какой-то не тот control. Допустимы только + и -");
            break;
          }
        }

        const dropdownValue = Object.entries(this.state)
          .filter(([key, value]) => value > 0)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
        
        $value.textContent = dropdownValue
      }
    });
  }
}

const dropdown = new Dropdown(".dropdown_first");
const dropdown2 = new Dropdown(".dropdown_second");
const dropdown3 = new Dropdown(".dropdown_third");

document.addEventListener('click', (event) => {
  const closest = event.target.closest('.dropdown')

  if (closest === null) {
    [dropdown, dropdown2, dropdown3].forEach(dropdown => {
      dropdown.close()
    })
  }
})