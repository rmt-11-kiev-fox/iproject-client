<template>
  <div class="winner-container">
    <div class="floating-button" @click="resuffle">
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
  methods: {
    resuffle() {}
  },
  created() {
    this.$store.dispatch('getAuctionHandler', {
      ProductId: this.$route.params.id
    })
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
