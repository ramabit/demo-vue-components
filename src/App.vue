<template>
  <div id="app">

    <span>
      Insert the amount of desired user's tabs to load:
       <input v-model="tabs" placeholder="Insert amount of tabs">
    </span>

    <users-tabs class="u-margin--top-1bu" :amount="parseInt(tabs)"></users-tabs>

<!-- Test insert more than 1 tabs component at the time -->
<!--    <users-tabs class="u-margin&#45;&#45;top-1bu" :amount="8"></users-tabs>-->
  </div>
</template>

<script>

import UsersTabs from "./components/UsersTabs";
export default {
  name: 'App',
  components: {UsersTabs},
  data() {
    return {
      tabs: 3,
    }
  },
}
</script>
