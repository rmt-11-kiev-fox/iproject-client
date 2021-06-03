<template>
  <div class="winner-container">
    <div class="floating-button">
      <i class="fas fa-crown icon"></i>Standings
    </div>
    <transition-group name="flip-list" tag="div">
      <div
        class="floating-button child"
        v-for="(item, idx) in getAuctionData"
        :key="item.id"
      >
        {{ idx + 1 }}. {{ item.username }} [ Rp {{ item.price }}]
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'Standings',
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getAuctionHandler', {
      ProductId: this.$route.params.id
    })
  },
  destroyed() {
    this.$store.commit('AUCTION_DATA', [])
  },
  computed: {
    getAuctionData() {
      return this.$store.state.auctionData
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
