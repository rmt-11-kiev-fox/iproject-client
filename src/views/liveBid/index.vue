<template>
  <div>
    <div class="floating-button">
      <i class="fas fa-backspace icon"></i> Dashboard
    </div>
    <div class="live-bid-container">
      <Product />
      <Standing />
      <Bid />
    </div>
  </div>
</template>

<script>
import Product from "./components/product/index";
import Standing from "./components/standings/index";
import Bid from "./components/bid/index";

export default {
  name: "LiveBid",
  components:{
    Product,
    Standing,
    Bid
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
