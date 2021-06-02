<template>
  <div>
    <div class="floating-button" @click="$router.push('/')">
      <i class="fas fa-backspace icon"></i> Dashboard
    </div>
    <div class="live-bid-container">
      <Product :data="getData" />
      <Standing />
      <Bid />
    </div>
  </div>
</template>

<script>
import Product from './components/product/index'
import Standing from './components/standings/index'
import Bid from './components/bid/index'

export default {
  name: 'LiveBid',
  components: {
    Product,
    Standing,
    Bid
  },
  created() {
    this.$store.dispatch('getDetailProduct', {
      productId: this.$route.params.id
    })
  },
  computed: {
    getData() {
      return this.$store.state.detailProduct
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
