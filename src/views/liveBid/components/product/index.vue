<template>
  <div class="product-container">
    <img :src="data.image" />
    <div class="item-container">
      <div class="name">{{ data.name }}</div>
      <div class="info">
        <div class="text">OB : {{ data.ob }}</div>
        <div class="text">BID : {{ data.bid }}</div>
        <div class="text">BIN : {{ data.bin }}</div>
      </div>
    </div>
    <div class="due-date-container">
      <div class="text" v-if="timeFormatted">
        <vue-countdown
          :time="timeFormatted * 1000"
          v-slot="{ hours, minutes, seconds }"
          v-if="counting"
          @end="onCountdownEnd"
        >
          Remaining：{{ hours }} : {{ minutes }} : {{ seconds }}
        </vue-countdown>
      </div>
    </div>
    <div class="icon-container">
      <i class="fas fa-info-circle icon"></i>
      <i class="fas fa-comment icon"></i>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  props: ['data'],
  name: 'product',
  components: {
    VueCountdown
  },
  methods: {
    onCountdownEnd() {
      this.counting = false
    }
  },
  data() {
    return {
      counting: true
    }
  },
  computed: {
    timeFormatted() {
      const seconds = new Date()
      const dataInSeconds = new Date(this.data.updatedAt)

      if (this.data.dueDate - (seconds - dataInSeconds) / 1000 < 0) {
        return false
      } else {
        return this.data.dueDate - (seconds - dataInSeconds) / 1000
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
