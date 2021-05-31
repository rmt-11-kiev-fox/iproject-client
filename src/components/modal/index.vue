<template>
  <div class="overlay-modal">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "OverlayModal",
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
