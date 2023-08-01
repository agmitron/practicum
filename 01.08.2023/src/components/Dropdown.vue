<template>
  <label
    class="dropdown dropdown_first"
    v-bind:class="{ dropdown_open: isOpen }"
  >
    <div class="dropdown__value">
      <span class="dropdown__value-text">{{value}}</span>
      <button class="dropdown__expand-button" v-on:click="toggle"></button>
    </div>
    <ul class="dropdown__options">
      <li
        v-for="(value, key) in options"
        class="dropdown__option"
        v-bind:key="key"
      >
        <span class="dropdown__option-text">{{ key }}</span>
        <button class="dropdown__option-control" @click="() => decrement(key)">-</button>
        <span class="dropdown__option-count">{{ value }}</span>
        <button class="dropdown__option-control" @click="() => increment(key)">+</button>
      </li>
    </ul>
  </label>
</template>

<script>
export default {
  name: "MyDropdown",
  props: {
    options: Object,
    value: {
      type: String,
      default: "Пусто"
    }
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    increment(what) {
      this.$emit("increment", what);
    },
    decrement(what) {
      this.$emit("decrement", what);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 266px;
  width: 100%;
}

.dropdown__value,
.dropdown__options {
  border: 1px solid #1f204180;
}

.dropdown__value {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
}

.dropdown__options {
  display: none;
  flex-direction: column;
  row-gap: 7px;
  padding: 7px 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: none;
}

.dropdown__option {
  padding: 0 7px 0 15px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}

.dropdown__option-control {
  background-color: transparent;
  border: 1px solid #1f204180;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #1f204180;
  cursor: pointer;
}

.dropdown__option-text {
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 0;
  margin-right: auto;
}

.dropdown__expand-button {
  background-image: url(../assets/arrow.svg);
  display: flex;
  align-items: center;
  background-position: center;
  width: 44px;
  height: 44px;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transform: rotateX(180deg);
}

.dropdown_open .dropdown__expand-button {
  transform: none;
}

.dropdown_open .dropdown__options {
  display: flex;
}
</style>
