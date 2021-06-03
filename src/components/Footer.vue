<template>
  <div>
    <div class="container d-flex justify-content-between border-bottom">
      <img class="col-1 " src="../../resources/logo3.png" alt="" />
      <div class="d-flex justify-content-evenly">
        <nav class=" mt-3">
          <div id="footer-link" class="d-flex flex-grow-1 justify-content-lg-evenly fs-5" >
            <a @click="toHome" class="nav-link active" aria-current="page" href="#">Home</a>
            <a @click="toHome" class="nav-link" href="#about">About</a>
            <a @click="toHome" class="nav-link" href="#search">Search</a>
            <a @click="toContact"  class="nav-link" href="#">Contact</a>
          </div>
        </nav>
      </div>
      <div class="d-flex justify-content-evenly">
        <nav class="mt-3">
          <div id="footer-icon" class="d-flex justify-content-center">
            <a class="nav-link" href="https://www.instagram.com/mdwikycahyo_/" target="_blank"><i class="bi bi-instagram"></i></a>
            <a class="nav-link" href="https://web.facebook.com/dwikycahyo/" target="_blank"><i class="bi bi-facebook"></i></a>
            <a class="nav-link" href="https://www.linkedin.com/in/mdwikycahyow/" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-evenly">
        <nav class="mt-5 mb-5">
          <div id="footer-link" class="d-flex flex-grow-1 justify-content-lg-evenly" >
            <form @submit.prevent="subscriber">
              <div class="input-group mb-3 mt-3">
                <label class="p-2 me-5 fs-5" style="color: white;font-family: Righteous;">Subscribe Now</label>
                <input v-model="subscriberEmail" style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;font-family: Righteous; background-color: rgb(201, 201, 201);" type="email" class="form-control p-2" placeholder="Your Email" aria-describedby="button-addon2" oninvalid="this.setCustomValidity('Enter your email here')" oninput="this.setCustomValidity('')">
                <button style="border-top-right-radius: 10px;border-bottom-right-radius: 10px" class="btn btn-warning" type="submit" id="button-addon2"><i class="bi bi-arrow-right-short"></i></button>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <h5 v-if="subscriberHandler" style="color: white; font-family: Varela Round; text-align: left; text-align: center; margin-top: -30px">Thank you for your interest!</h5>
      <footer class="mt-5 mb-1" style="color: rgb(173, 173, 173); text-align: center; font-weight: bold;">
        &copy; Copyright 2021, Muhammad Dwiky Cahyo
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      subscriberEmail: ''
    }
  },
  methods: {
    toHome () {
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
    },
    toContact () {
      if (this.$router.currentRoute.name !== 'Contact') {
        this.$router.push('/contact')
      }
    },
    subscriber () {
      this.subscriberEmail = ''
      this.$store.commit('SET_SUBSCRIBER', true)
    }
  },
  computed: {
    isHome () {
      return this.$store.state.isHome
    },
    subscriberHandler () {
      return this.$store.state.subscriber
    }
  },
  created () {
    this.$store.commit('SET_SUBSCRIBER', false)
  }
}
</script>

<style>
#footer-link a {
  color: white;
  font-family: Righteous;
  font-size: larger;
}

#footer-link a:hover {
  background-color: #ffc107;
}

#footer-icon a {
  color: white;
}

#footer-icon a:hover {
  background-color: #ffc107;
}
</style>
