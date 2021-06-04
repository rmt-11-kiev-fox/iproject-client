<template>
  <div>
    <Navbar/>
    <TodayData v-if="$route.name == 'Home'"/>
    <!-- <Bar/> -->


    <div class="badge bg-dark text-wrap" style="width: 20rem;">
  {{ quote.quote }} <br> <br> {{ quote.author }}
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Bar from '../components/Chart'
import TodayData from '../components/TodayData'

export default {
  name: 'Home',
  components: {
    Navbar, Footer, TodayData
  },
  created () {
    this.$store.dispatch('fetchTodayData')
    this.$store.dispatch('fetchQuote')
  },
  computed: {
    quote () {
      return this.$store.state.quote
    }
  }
}
</script>
