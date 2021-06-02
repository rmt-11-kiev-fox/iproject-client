<template>
  <div style="height: 1200px">
    <div class="h-25 bg-warning" :style="{ backgroundImage: 'url(' + require('../../resources/background.jpg') + ')', 'background-size': 'auto'}">
      <Navbar/>
    </div>
    <div id="search" class="container h-40 text-center mt-5 mb-5">
      <div class="d-flex">
            <div class="container-sm">
              <h2 class="fs-1 pt-2 text-contact" style="font-family: 'Righteous', cursive; color: black;">My Contact</h2>
              <h5 class="fs-5 mt-3" style="color: black; font-family: Varela Round; text-align: left;">Let me know your opinion about this site!</h5>
              <form @submit.prevent="sendEmail">
                <div class="mb-3 row pt-2">
                  <label for="full-name" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Full name</label>
                  <div class="col-sm-10">
                    <input v-model="fullname" id="full-name" style="color: black; font-family: Varela Round;" type="text" class="form-control" placeholder="Full name" required>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="email" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Your email</label>
                  <div class="col-sm-10">
                    <input v-model="email" id="email" style="color: black; font-family: Varela Round;" type="email" class="form-control" placeholder="Your email" required>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="message" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Message</label>
                  <div class="col-sm-10">
                    <textarea v-model="message" id="message" style="color: black; font-family: Varela Round;" class="form-control" rows="5" placeholder="Nice work!" required></textarea>
                  </div>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-warning" style="font-family: 'Righteous', cursive;">SUBMIT</button>
                </div>
              </form>
            </div>
            <img class="col-3" src="../../resources/map.jpg" alt="" style="width: 50%;"/>
          </div>
          <div class="d-flex justify-content-between mt-4 border-top border-dark border-3">

            <div class="d-flex">
              <div class="me-3">
                <i class="bi bi-geo-alt" style="font-size: 3rem;"></i>
              </div>
              <div class="text-start mt-2">
                <h5 class="fs-4" style="font-family: 'Righteous', cursive; color: black;">Location:</h5>
                <h6 class="fs-5" style="color: black; font-family: Varela Round; text-align: left;">Medan, Indonesia.</h6>
              </div>
            </div>

            <div class="d-flex">
              <div class="me-3">
                <i class="bi bi-envelope" style="font-size: 3rem;"></i>
              </div>
              <div class="text-start mt-2">
                <h5 class="fs-4" style="font-family: 'Righteous', cursive; color: black;">Email:</h5>
                <h6 class="fs-5" style="color: black; font-family: Varela Round; text-align: left;">mdwikycahyo@gmail.com</h6>
              </div>
            </div>

            <div class="d-flex">
              <div class="me-3">
                <i class="bi bi-telephone" style="font-size: 3rem;"></i>
              </div>
              <div class="text-start mt-2">
                <h5 class="fs-4" style="font-family: 'Righteous', cursive; color: black;">Phone:</h5>
                <h6 class="fs-5" style="color: black; font-family: Varela Round; text-align: left;">+62 821 6495 7664</h6>
              </div>
            </div>

          </div>
    </div>
    <div class="container-fluid h-30 bg-dark" style="margin-bottom: -4px">
        <Footer/>
    </div>
    <HFooter/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Contact',
  data () {
    return {
      fullname: '',
      email: '',
      message: ''
    }
  },
  components: {
    Navbar,
    Footer,
    HFooter
  },
  methods: {
    sendEmail () {
      const payload = {
        fullname: this.fullname,
        email: this.email,
        message: this.message
      }
      this.$store.dispatch('sendEmail', payload)
      this.fullname = ''
      this.email = ''
      this.message = ''
    }
  },
  created () {
    this.$store.commit('SET_HERO_TEXT', false)
    this.$store.commit('SET_IS_HOME', false)
  }
}
</script>

<style>

</style>
