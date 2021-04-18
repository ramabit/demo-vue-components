<template>
  <div id="app">

    <!-- Dropdown component with options-->
    <custom-select
        @valueChanged="redirectToPage"
        :options="menuOptions"
        inline-template
    >
      <div class="c-custom-select">
        <div class="selector" @click="toggleOptionVisible()">
          <div class="label">
            <span>{{ value }}</span>
          </div>
          <div class="arrow" :class="{ 'expanded' : optionsVisible }"></div>
          <div v-if="optionsVisible">
            <ul>
              <li
                  :class="{ 'current': item === value }"
                  v-for="(item, index) in options"
                  :key="index"
                  @click="select(item)"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </custom-select>

    <!-- Select amount of tabs to show -->
    <div class="u-margin--top-2bu">
      Insert the amount of desired user's tabs to load:
       <input v-model="tabs" placeholder="Insert amount of tabs">
    </div>

    <!-- Users tabs -->
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
      menuOptions: [
          'Main page',
          'Account',
          'Settings',
          'Logout'
      ]
    }
  },
  methods: {
    redirectToPage(option) {
      // TODO implement redirect to page
      console.log('redirect to: ', option)
    }
  }
}
</script>
