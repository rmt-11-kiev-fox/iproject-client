<template>
  <div class="input-bid-container">
    <!-- <div class="item">OB</div> -->
    <div class="flex flex-center mb-2">
      <div class="item minus" @click="changePriceHandler(-bid)">
        - {{ bid }}
      </div>
      <div class="item val">Jumlah Penawaran : Rp {{ currentPrice }}</div>
      <div class="item add" @click="changePriceHandler(bid)">+ {{ bid }}</div>
      <div class="item button" @click="bidHandler">
        <i class="fas fa-paper-plane"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bid',
  data() {
    return {
      currentPrice: 0,
      bid: 0
    }
  },
  computed: {
    getDetailData() {
      return this.$store.state.detailProduct
    }
  },
  created() {
    this.bid = this.getDetailData.bid
    this.currentPrice = this.getDetailData.currentBid
  },
  methods: {
    changePriceHandler(val) {
      if (val < 0) {
        if (this.currentPrice + val >= this.getDetailData.ob) {
          this.currentPrice += val
        }
      } else {
        this.currentPrice += val
      }
    },
    bidHandler() {
      const obj = {
        ProductId: this.getDetailData.id,
        price: this.currentPrice
      }
      this.$store.dispatch('postAuctionHandler', obj)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
