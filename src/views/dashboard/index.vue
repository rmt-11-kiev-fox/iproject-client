<template>
  <div>
    <FilterBar></FilterBar>
    <div class="dashboard-container__right-body">
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "../../components/card/index";
import FilterBar from "../../components/filterBar/index";

export default {
  name: "Dashboard",
  components:{
    Card,
    FilterBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles.scss";
</style>
