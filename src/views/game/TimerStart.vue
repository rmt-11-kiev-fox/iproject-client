<template>
<div>
  <h3 class="mt-5">Creating game, please wait...</h3>
  <div class="base-timer mx-auto my-5">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      {{shownTime}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TimerStart',
  data () {
    return {
      TIME_LIMIT: 600,
      timePassed: 0,
      timeLeft: 600,
      timerInterval: null,
      shownTime: 0
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
  },
  created () {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1
      this.timeLeft = this.TIME_LIMIT - this.timePassed
      this.shownTime = this.formatTimeLeft(this.timeLeft)
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval)
        this.$router.push(`/game/question/${this.questionNumber}`)
      }
    })
  },
  computed: {
    questionNumber () {
      return this.$store.state.questionNumber
    }
  }

}
</script>

<style>
.base-timer {
  position: relative;
  height: 300px;
  width: 300px;
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__label {
  position: absolute;

  /* Size should match the parent container */
  width: 300px;
  height: 300px;

  /* Keep the label aligned to the top */
  top: 0;

  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 48px;
}
</style>
