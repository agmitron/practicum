class Dropdown {
  constructor(
    selector,
    { onChange = () => {}, items = [], disabled = false, isOpen = false }
  ) {
    this.$wrapper = document.querySelector(selector);
    this.$button = this.$wrapper.querySelector(
      ".dropdown__current-item-button"
    );
    this.$menu = this.$wrapper.querySelector(".dropdown__menu");
    this.$state = this.$wrapper.querySelector(".dropdown__current-item-text");
    this.onChange = onChange;
    this.items = items;
    this.isOpen = isOpen;
    this.isDisabled = disabled;
    this.state = items[0] ?? "-";

    this._setEventListeners();
    this.render();
  }

  render() {
    this.items.forEach((content, i) => {
      const $item = this._createItem(content, i);
      this.$menu.insertAdjacentElement("beforeend", $item);
    });

    this.$state.textContent = this.state;

    if (this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isOpen = true;
    this.$menu.classList.remove("dropdown__menu_closed");
    this.$button.classList.remove("dropdown__current-item-button_closed");
  }

  close() {
    this.isOpen = false;
    this.$menu.classList.add("dropdown__menu_closed");
    this.$button.classList.add("dropdown__current-item-button_closed");
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.$menu.classList.toggle("dropdown__menu_closed");
    this.$button.classList.toggle("dropdown__current-item-button_closed");
  }

  _setEventListeners() {
    this.$button.addEventListener("click", () => {
      this.toggle();
    });
  }

  _createItem(content, i) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.addEventListener("click", () => {
      this._updateState(content);
      this.close();
      this.onChange({ content, i });
    });

    li.classList.add("dropdown__item");
    span.textContent = content;

    li.append(span);

    return li;
  }

  _updateState(newState) {
    this.$state.textContent = newState;
  }
}

export default Dropdown;
