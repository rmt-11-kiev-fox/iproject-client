<template>
  <TimerStart/>
</template>

<script>
import TimerStart from './TimerStart'

export default {
  name: 'GameStart',
  components: {
    TimerStart
  },
  computed: {
    topic () {
      return this.$store.state.topic
    }
  },
  methods: {
    formatTimeLeft (time) {
      const minutes = Math.floor(time / 60)
      let seconds = time % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style>

</style>
