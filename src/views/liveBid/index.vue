<template>
  <div>
    <div class="floating-button" @click="$router.push('/')">
      <i class="fas fa-backspace icon"></i> Dashboard
    </div>
    <div class="live-bid-container">
      <Product :data="getData" />
      <Standing :data="getData" />
      <Bid v-if="didMount" />
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
  data() {
    return {
      didMount: false
    }
  },
  async created() {
    await this.$store.dispatch('getDetailProduct', {
      productId: this.$route.params.id
    })
    this.didMount = true
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
