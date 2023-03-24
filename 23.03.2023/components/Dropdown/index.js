class Dropdown {
  constructor(
    selector,
    {
      items = [],
      isOpen = false,
      isDisabled = false,
      value = "",
      onChange = () => {},
      onOpen = () => {},
      onClose = () => {},
    }
  ) {
    this.isOpen = isOpen;
    this.isDisabled = isDisabled;
    this.items = items;
    this._value = value;
    this.onChange = onChange;
    this.onOpen = onOpen;
    this.onClose = onClose;

    this.$container = document.querySelector(selector);
    this.$button = this.$container.querySelector(
      ".dropdown__current-item-button"
    );
    this.$menu = this.$container.querySelector(".dropdown__menu");
    this.$value = this.$container.querySelector(".dropdown__current-item-text");

    this._setEventListeners();
    this.render();
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
    this.$value.textContent = v;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.$menu.classList.remove("dropdown__menu_closed");
    this.$button.classList.remove("dropdown__current-item-button_closed");
    this.onOpen();
  }

  close() {
    this.isOpen = false;
    this.$menu.classList.add("dropdown__menu_closed");
    this.$button.classList.add("dropdown__current-item-button_closed");
    this.onClose();
  }

  change(v) {
    this.value = v;
    this.onChange();
  }

  render() {
    this.items.forEach((content) => {
      const $item = this._createItem(content);
      this.$menu.insertAdjacentElement("beforeend", $item);
    });

    this.$value.textContent = this.value || (this.items[0] ?? "-");

    return this.$container;
  }

  _setEventListeners() {
    this.$button.addEventListener("click", () => {
      this.toggle();
    });
  }

  _createItem(content) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.addEventListener("click", () => {
      if (!this.isDisabled) {
        this.change(content);
        this.close();
      }
    });

    li.classList.add("dropdown__item");

    if (this.isDisabled) {
      li.classList.add("dropdown__item_disabled");
    }

    span.textContent = content;

    li.append(span);

    return li;
  }
}

export default Dropdown;
