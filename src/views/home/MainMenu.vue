<template>
  <div class="justify-content-center " >
    <h1 class="mt-5">Welcome to Renaissance Game</h1>
    <p>{{quote}}</p>
    <div class='box-menu mt-5 pt-3 mx-auto'>
      <div class="mt-auto mb-auto">
        <div class="mt-5">
          <a class="btn btn-dark btn-menu" @click.prevent='startGame' href="">Start Game</a>
        </div>
        <div class="mt-5">
          <a class="btn btn-dark btn-menu" @click.prevent="getProfile" href="">Profile</a>
        </div>
        <div class="mt-5">
          <a class="btn btn-dark btn-menu" @click.prevent="logout" href="">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      quote: ''
    }
  },
  components: {
  },
  methods: {
    startGame () {
      this.$router.push('/game/pickTopic')
    },
    getProfile () {
      this.$router.push('/profile/user/userHistory')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  created () {
    this.$store.dispatch('fetchQuote')
      .then((data) => {
        this.quote = data.data
      })
  }

}
</script>

<style>

</style>
