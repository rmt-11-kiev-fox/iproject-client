<template>
  <div class="card-container">
    <div class="floating-icon">
      <div class="status">On Going</div>
      <i class="fas fa-star favorite-icon"></i>
    </div>
    <div class="card-container__left">
      <img
        src="https://png.pngitem.com/pimgs/s/109-1093644_sepatu-nike-air-max-png-nike-air-max.png"
      />
    </div>
    <div class="card-container__middle">
      <div class="title">Nike Adidas</div>
      <div class="text">OB: 0</div>
      <div class="text">BID: Rp 50.000</div>
    </div>
    <div class="card-container__right">
      <div class="text">OB: 0</div>
      <div class="text">BID: Rp 50.000</div>
    </div>
    <div class="card-container__live-bid">
      <div class="text">Live Bidding</div>
      <i class="fas fa-play-circle icon"></i>
    </div>
  </div>
</template>

<script>


export default {
  name: "Card",
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
