<template>
  <div class="col-2 mb-4 left_bar_dark">
    <div class="row">
      <form class="mt-4">
        <input
          class="form-control"
          type="search"
          placeholder="Animal Name"
          v-model="keyword"
          @keydown.enter.prevent=""
        >
      </form>
    </div>
    <hr>
    <div class="row mx-4 mt-4">
      <clock :color="'white'" v-if="!skippedTime"></clock>
      <clock :color="'white'" :time="skippedTime" v-else></clock>
    </div>
    <div class="row">
      <form class="my-4 col-6">
        <input
          class="form-control"
          type="search"
          placeholder="HH:MM"
          v-model="skipUntil"
          @keydown.enter.prevent="skipTime"
        >
      </form>
      <button class="btn btn-success h-75 my-4 col-5" @click.prevent="skipTime">Skip Time</button>
    </div>
    <div class="row text-light">
      <button v-if="skippedTime" class="btn btn-success h-75 w-75 ms-3 mb-4 col-5" @click.prevent="backToNormal">Back to Normal Time</button>
      <p>{{ err_time }}</p>
    </div>
    <div class="row text-light">
      <p>Notes:</p>
      <p>- After 6 PM Nocturnal Animals Will Appear and Diurnal Animals Will Disappear</p>
      <p>- After 6 AM Diurnal Animals Will Appear and Nocturnal Animals Will Disappear</p>
      <p>- Some Animals Is Always Appear</p>
    </div>
  </div>
</template>

<script>
import clock from 'vue-clock2'
export default {
  name: 'Leftbar',
  components: {
    clock
  },
  data () {
    return {
      skipUntil: '',
      skippedTime: '',
      err_time: ''
    }
  },
  computed: {
    isDark () {
      return this.$store.state.isDark
    },
    types () {
      return this.$store.state.types
    },
    keyword: {
      get () {
        return this.$store.state.keyword
      },
      set (value) {
        this.$store.commit('SET_KEYWORD', value)
      }
    }
  },
  methods: {
    backToNormal () {
      this.skippedTime = ''
      this.skipUntil = ''
      const hour = new Date().getHours()
      if (+hour >= 18 || +hour < 6) {
        this.$store.commit('SET_ISDARK', true)
      } else {
        this.$store.commit('SET_ISDARK', false)
      }
    },
    skipTime () {
      const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(this.skipUntil)
      if (isValid) {
        this.err_time = ''
        const hour = this.skipUntil.slice(0, 2)
        if (+hour >= 18 || +hour < 6) {
          this.$store.commit('SET_ISDARK', true)
        } else {
          this.$store.commit('SET_ISDARK', false)
        }
        this.skippedTime = this.skipUntil
      } else {
        this.err_time = 'Wrong Time Format'
      }
    }
  },
  created () {
    this.skippedTime = ''
    this.err_time = ''
  }
}
</script>

<style>
.left_bar {
  background-color: rgba(134, 134, 134, 0.692);
}
.left_bar_dark {
  background-color: rgba(0, 0, 0, 0.74);
}
</style>
