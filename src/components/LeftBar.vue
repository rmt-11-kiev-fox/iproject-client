<template>
  <div class="col-2 mb-4" :class="{ left_bar: !isDark, left_bar_dark: isDark }">
    <div class="row mx-4 mt-4">
      <clock :color="clockColor" v-if="!skippedTime"></clock>
      <clock :color="clockColor" :time="skippedTime" v-else></clock>
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
    <div class="row" :class="{ 'text-light': isDark }">
      <button v-if="skippedTime" class="btn btn-success h-75 w-75 ms-3 mb-4 col-5" @click.prevent="backToNormal">Back to Normal Time</button>
      <p>{{ err_time }}</p>
    </div>
    <div class="row" :class="{ 'text-light': isDark }">
      <p>Notes:</p>
      <p>- After 6 PM Nocturnal Animals Will Appear and Diurnal Animals Will Disappear</p>
      <p>- After 6 AM Diurnal Animals Will Appear and Nocturnal Animals Will Disappear</p>
      <p>- Some Animals Is Always Appear</p>
    </div>
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
    <div class="row my-4">
      <router-link
        :to="'/home/favorites'"
        :class="{
          type_opt: $route.params.type !== 'favorites',
          type_choosed: $route.params.type === 'favorites'
        }"
      >
        <h4>
          My Favorite Animals
        </h4>
      </router-link>
    </div>
    <div class="row my-4 w-75">
      <h4 class="type_opt">Type:</h4>
      <router-link
        to="/home"
        :class="{
          type_opt: $route.params.type,
          type_choosed: !$route.params.type
        }"
        class="ms-4"
        >All
      </router-link>
      <router-link
        :to="'/home/' + type"
        v-for="(type, i) in types"
        :key="i"
        :class="{
          type_opt: $route.params.type !== type,
          type_choosed: $route.params.type === type
        }"
        class="ms-4"
        >{{ type }}
      </router-link>
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
    clockColor () {
      if (!this.isDark) {
        return 'black'
      } else {
        return 'white'
      }
    },
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
.type_opt {
  cursor: pointer;
  color: aliceblue;
}
.type_choosed {
  cursor: pointer;
  color: rgb(107, 109, 0);
}
</style>
