<template>
  <div id="app">
    <Dropdown
      v-on:decrement="(what) => decrement('1', what)"
      v-on:increment="(what) => increment('1', what)"
      :options="dropdowns[1]"
    />

    <Dropdown
      v-on:decrement="(what) => decrement('2', what)"
      v-on:increment="(what) => increment('2', what)"
      :options="dropdowns[2]"
    />

    <Dropdown
      v-on:decrement="(what) => decrement('3', what)"
      v-on:increment="(what) => increment('3', what)"
      :options="dropdowns[3]"
    />
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";

export default {
  name: "App",
  components: {
    Dropdown,
  },
  data() {
    return {
      dropdowns: {
        1: {
          спальни: 1,
          кровати: 2,
        },
        2: {
          кухни: 1,
          санузлы: 2,
        },
        3: {
          кофемашины: 10,
          "стиральные машины": 0,
        },
      },
    };
  },
  methods: {
    increment(dropdown, what) {
      this.dropdowns[dropdown][what] = this.dropdowns[dropdown][what] + 1;
    },
    decrement(dropdown, what) {
      this.dropdowns[dropdown][what] = this.dropdowns[dropdown][what] - 1;
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
