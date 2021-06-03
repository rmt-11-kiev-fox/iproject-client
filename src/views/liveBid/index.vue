<template>
  <div>
    <div class="floating-button" @click="$router.push('/')">
      <i class="fas fa-backspace icon"></i> Dashboard
    </div>
    <div class="live-bid-container">
      <Loader v-if="!didMount" />

      <Product :data="getData" v-if="didMount" />
      <Standing :data="getData" v-if="didMount" />
      <Bid v-if="didMount" />
      <div class="winner-overlay__container" v-if="didMount && !getData.status">
        <img
          :src="
            getData.winner === getUsername
              ? 'http://res.cloudinary.com/dfh39qfib/image/upload/v1622651493/srkr3e6s6mvbotqppc1t.png'
              : 'http://res.cloudinary.com/dfh39qfib/image/upload/v1622652065/q0mpuiayxrq5sawmt3x6.png'
          "
        />

        <div
          class="text"
          v-if="getData.winner === getUsername"
          @click="confirmationHandler"
        >
          Confirmation
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './components/product/index'
import Standing from './components/standings/index'
import Bid from './components/bid/index'
import Loader from '@/components/loader/index'

export default {
  name: 'LiveBid',
  components: {
    Product,
    Standing,
    Bid,
    Loader
  },
  data() {
    return {
      didMount: false
    }
  },
  methods: {
    confirmationHandler() {
      const { UserId, name, image, currentBid } = this.getData
      const obj = {
        sellerId: UserId,
        price: currentBid,
        image,
        name
      }
      this.$store.dispatch('addHistoryHandler', obj)
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
    },
    getUsername() {
      return this.$store.state.userName
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
