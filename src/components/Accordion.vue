<template>
  <div>
    <div class="c-accordion--button l-flex-positioning--space-between" @click="toggleShowContent">
      {{title}}
      <svg-icon
          icon-name="chevron-down-outline"
          :added-classes="'u-color--blue w-dropdown-arrow ' + (!showContent ? 'w-dropdown-arrow--closed' : '')"
      />
    </div>
    <div class="c-accordion--panel" v-show="showContent">
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    toggleShowContent() {
      this.showContent = !this.showContent;
    }
  }
}
</script>
