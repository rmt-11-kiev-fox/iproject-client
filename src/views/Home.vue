<template>
  <div>
    <div style="height: 1980px">
      <div class="h-25 bg-warning" :style="{ backgroundImage: 'url(' + require('../../resources/background.jpg') + ')', 'background-size': 'auto'}">
        <Navbar/>
      </div>
      <div class="h-75 bg-light">
        <div class="h-75 bg-light border-bottom" :style="{backgroundImage: 'url(' + require('../../resources/home-bg.jpg')+ ')', 'background-size': '100%'}">
          <!--------------------------------------------- ABOUT --------------------------------------------->
          <div id="about" class="container h-40 text-center">
            <h2 class="fs-1 pt-4" style="font-family: 'Righteous', cursive;">About</h2>
            <h3 class="fs-3 text" style="font-family: 'Righteous', cursive; color: grey;">What is GeeHive?</h3>
            <div class="d-flex mt-5 ms-5 me-5 ps-3 pe-3 ">
              <img class="col-3" src="../../resources/search.jpg" alt="" />
              <h4 class="text-start p-5 mt-3" style="color: black; font-family: Varela Round;">Using the word <i>BeeHive</i> as the reference, GeeHive <i>(Gift-Hive)</i> is an app to helps users find gift ideas or just great products for themself. Utilizing inputs from the user, the app will be displaying some products that are connected to the World Number 1 E-commerce.<br>
              <h5 class="text-muted mt-2"><i>Disclaimer: All product data is from the <b>Amazon product listing in Q2 2020</b>. From the results given, we might found differences in the product's name, price, rating, or even availability.</i></h5>
              </h4>
            </div>
          </div>
          <!--------------------------------------------- ABOUT --------------------------------------------->
          <!--------------------------------------------- SEARCH --------------------------------------------->
          <div id="search" class="container h-60 text-center">
            <h2 class="fs-1 pt-4" style="font-family: 'Righteous', cursive;">Search</h2>
            <h3 class="fs-3 text" style="font-family: 'Righteous', cursive; color: grey;">Let's try!</h3>
            <!-- SEARCH CONTAINER -->
            <SearchBox/>
          </div>
          <!--------------------------------------------- SEARCH --------------------------------------------->
        </div>
        <div  class="container-fluid h-25 bg-dark">
          <Footer/>
        </div>
      </div>
    </div>
    <HFooter style="width: 100%"/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    SearchBox,
    HFooter
  },
  created () {
    this.$store.commit('SET_HERO_TEXT', true)
    this.$store.commit('SET_IS_HOME', true)
  }
}
</script>

<style>
.text{
  position: relative;
  text-align: center;
  float: center;
  clear: center;
}

.text::after {
  content: "";
  position: absolute;
  border-top: 4px solid #ffc107;
  margin-bottom: -30px;
  left: 47%;
  bottom: 0%;
  width: 5%;
  height: 0px;
}

.form-group {
  border-radius: 25px;
  width: 70%;
}

.checked {
  color: orange;
}

.img-product {
  width: 270px;
  height: 270px;
}

.text-contact{
  position: relative;
  text-align: left;
  float: center;
  clear: center;
}
.text-contact::after {
  content: "";
  position: absolute;
  border-top: 4px solid #ffc107;
  margin-bottom: -10px;
  left: 1%;
  bottom: 0%;
  width: 10%;
  height: 0px;
}
</style>
