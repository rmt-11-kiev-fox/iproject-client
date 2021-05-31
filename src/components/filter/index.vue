<template>
  <div class="filter-container">
    <i class="fas fa-times-circle filter-icon" @click="filterToggleHandler"></i>
    <div class="item-container">
      <label>Status :</label>
      <div class="item-flex">
        <div class="item">All</div>
        <div class="item">On Going</div>
        <div class="item">Sold Out</div>
      </div>
    </div>
    <div class="item-container">
      <label>Urutkan :</label>
      <div class="item-flex">
        <div class="item">Terbaru</div>
        <div class="item">Termurah</div>
        <div class="item">Termahal</div>
      </div>
    </div>
    <div class="item-container">
      <label>OB :</label>
      <div class="item-flex">
        <input placeholder="masukan minimal bid" />
        <input placeholder="masukan maxinaml bid" />
      </div>
    </div>
  </div>
</template>

<script>
// import DatePick from "vue-date-pick";
// import "vue-date-pick/dist/vueDatePick.css";

export default {
  props: ["filterToggleHandler"],
  name: "Filter",
  components: {
    // DatePick,
  },
  data() {
    return {
      date: "2019-01-01",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
