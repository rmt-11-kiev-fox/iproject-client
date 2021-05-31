<template>
  <div class="user-menu__container">
    <div
      class="user-menu__container-item"
      v-for="item in arr"
      :key="item.title"
      :class="item.title === activeTab && 'active-tab'"
      @click="changeTabHandler"
    >
      <i class="fas icon" :class="item.icon"></i>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeTab"],
  data() {
    return {
      arr: [
        { title: "Dashboard", icon: "fa-home" },
        { title: "Favorite", icon: "fa-star" },
        { title: "List Product", icon: "fa-stream" },
        { title: "On Going", icon: "fa-eye" },
        { title: "Transaction", icon: "fa-shopping-cart" },
        { title: "Chat", icon: "fa-comment" },
      ],
    };
  },
  methods: {
    changeTabHandler() {},
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
