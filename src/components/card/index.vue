<template>
  <div class="card-container">
    <div class="floating-icon">
      <div class="status" :class="!counting && 'red-status'">
        <vue-countdown
          :time="timeFormatted * 1000"
          v-slot="{ hours, minutes, seconds }"
          v-if="counting"
          @end="onCountdownEnd"
          >Remaining：{{ hours }} : {{ minutes }} : {{ seconds }}</vue-countdown
        >
        <div class="end" v-if="!counting">Ended</div>
      </div>
      <i class="fas fa-star favorite-icon" v-if="!isHistory"></i>
    </div>
    <div class="card-container__left">
      <img :src="data.image" />
    </div>
    <div class="card-container__middle">
      <div class="title">{{ data.name }}</div>
      <div class="text">{{ data.category }}</div>
      <div class="text highlight">
        Last Offer : Rp {{ isHistory ? data.price : data.currentBid }}
      </div>
    </div>

    <div
      class="card-container__live-bid"
      @click="liveBiddingHandler"
      v-if="!isHistory"
    >
      <div class="text">Live Bidding</div>
      <i class="fas fa-play-circle icon"></i>
    </div>
    <div class="winner" v-if="isHistory">Winner: {{ data.winnerName }}</div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  props: ['data', 'isHistory'],
  name: 'Card',
  components: {
    VueCountdown
  },
  data() {
    return {
      counting: true
    }
  },
  computed: {
    timeFormatted() {
      const seconds = new Date()
      const dataInSeconds = new Date(this.data.createdAt)
      if (this.data.dueDate - (seconds - dataInSeconds) / 1000 < 0) {
        return 0
      } else {
        return this.data.dueDate - (seconds - dataInSeconds) / 1000
      }
    }
  },
  methods: {
    onCountdownEnd() {
      this.counting = false
    },
    liveBiddingHandler() {
      this.$router.push(`/live-bid/${this.data.id}`)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
