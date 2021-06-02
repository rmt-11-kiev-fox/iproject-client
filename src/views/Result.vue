<template>
    <div style="height: 2000px">
      <div class="h-20 bg-warning" :style="{ backgroundImage: 'url(' + require('../../resources/background.jpg') + ')', 'background-size': 'auto', 'height': '300px'}">
        <Navbar/>
      </div>
      <div class="h-110" :style="{backgroundImage: 'url(' + require('../../resources/home-bg.jpg')+ ')', 'background-size': '100%'}">
        <!--------------------------------------------- RESULT --------------------------------------------->
        <div id="result" class="h-60 container text-center">
          <h2 class="fs-1 pt-4" style="font-family: 'Righteous', cursive;">Result</h2>
          <h3 class="fs-3 text" style="font-family: 'Righteous', cursive; color: grey;">Here are some recommendations</h3>
          <!-- Product Container -->
          <div class="row row-cols-md-4 mt-5 mb-5">
            <!-- CARD PRODUCT -->
            <div v-for="(product, index) in dataProducts" :key="index" class="col">
              <div class="card m-2" style="width:20rem; height:40rem;">
                <div class="p-4 text-start">
                  <img :src=product.imageurl class="card-img-top img-product mb-3" alt="product image from amazon">
                  <!-- <div style="width:100px; overflow: hidden"> -->
                  <h5 class="card-title">{{product.name.slice(0,40)}}</h5>
                  <!-- </div> -->
                  <h6  class="card-subtitle mb-2 text-muted fs-6">By {{product.brand}}</h6>
                  <h6 v-if="product.price" class="card-subtitle mb-2 fs-5" style="color: rgb(255, 133, 2);">$ {{product.price}}</h6>
                  <h6 v-else class="card-subtitle mb-2 fs-5" style="color: rgb(255, 133, 2);">Price: Not Available</h6>
                  <h6 v-if="product.price" class="card-subtitle mb-2">{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((dollarToday*product.price).toFixed(2))}}</h6>
                  <h6 v-else class="card-subtitle mb-2 text-muted">Harga: Tidak Tersedia</h6>
                  <p class="text-muted">Today's Exchange Rate: <br><i>$1 = {{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dollarToday)}} <br> From: free.currencyconverterapi.com</i></p>
                  <div class="d-flex" id="review-star">
                    <div v-if="product.countRating">
                      <div class="me-1">
                        <span v-for="rate in product.rating" :key="rate*-1" class="fa fa-star checked"></span>
                        <span v-for="unrate in (5 - product.rating)" :key="unrate" class="fa fa-star"></span>
                      </div>
                    </div>
                    <div v-else class="me-1">
                      <span v-for="empty in 5" :key="empty*7" class="fa fa-star"></span>
                    </div>
                    <p class="align-canter">{{product.countRating}}</p>
                  </div>
                  <div class="d-grid" >
                    <a :href=product.url target="_blank" style="text-decoration: none"><button type="button" class="btn btn-warning" style="width: 100%">Check on Amazon.com <i class="fa fa-amazon" aria-hidden="true"></i></button></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- SEARCH AGAIN -->
        <div id="search" class="container h-60 text-center" style="height: 600px">
          <h3 class="fs-3 text" style="font-family: 'Righteous', cursive; color: grey;">Search again?</h3>
          <SearchBox/>
        </div>
        <!--------------------------------------------- RESULT --------------------------------------------->
        <div class="container-fluid h-20 bg-dark">
          <Footer/>
        </div>
      </div>
      <HFooter  style="margin-top: -5px"/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Result',
  components: {
    Navbar,
    Footer,
    SearchBox,
    HFooter
  },
  computed: {
    dataProducts () {
      return this.$store.state.results
    },
    dollarToday () {
      return this.$store.state.exchangeRate
    }
  },
  created () {
    this.$store.commit('SET_HERO_TEXT', false)
    this.$store.commit('SET_IS_HOME', false)
    this.$store.commit('SET_IS_RESULT', true)
    if (!this.$store.state.results.length) {
      this.$router.push('/')
    }
    this.$store.dispatch('exchangeRate')
  }
}
</script>

<style>

</style>
