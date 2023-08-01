<template>
  <div id="app">
    <Dropdown
      v-for="(options, i) of dropdowns"
      :key="i"
      v-bind:options="options"
      :value="dropdownsValues[i]"
      v-on:increment="(what) => increment(i, what)"
      v-on:decrement="(what) => decrement(i, what)"
    />
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";

export default {
  name: "App",
  data() {
    return {
      dropdowns: [
        { спальни: 0, кровати: 1, детские: 5 },
        { спальни: 2, кровати: 1 },
        { спальни: 0, кровати: 1, детские: 5 },
        { спальни: 4, кровати: 1, кухни: 5 },
        { спальни: 0},
        { кровати: 1, кухни: 5 },
      ],
    };
  },
  computed: {
    dropdownsValues() {
      return this.dropdowns.map((dropdown) =>
        Object.entries(dropdown)
          .filter(([, value]) => value !== 0)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")
      );
    },
  },
  components: {
    Dropdown,
  },
  mounted() {
    console.log(this.dropdownsValues);
  },
  methods: {
    decrement(index, what) {
      if (this.dropdowns[index][what] <= 0) {
        return;
      }

      this.dropdowns[index][what] = this.dropdowns[index][what] - 1;
    },
    increment(index, what) {
      this.dropdowns[index][what] = this.dropdowns[index][what] + 1;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>
