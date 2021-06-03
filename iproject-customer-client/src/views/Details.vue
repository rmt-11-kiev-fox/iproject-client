<template>

  <div class="container-fluid" id="cart-section">
      <div class="row">
        <div class="col-md-10 col-11 mx-auto">
          <div class="row mt-5 gx-3">
            <!-- left Side -->
            <div class="col-md-12 col-lg-8 col-11 mx-auto main-cart mb-lg-0 mb-5 shadow">
                <div class="col-md-12 col-8 col-11 mx-auto main-cart mb-lg-0 mb-5 shadow d-flex justify-content-center align-items-center product-cart">
                  <img :src="selected.image_url" class="img-fluid" alt="">
                </div>
                <div class="mt-4 mb-3">
                  <h3>{{selectedArtWork.title}}</h3>
                  <h6>{{selectedArtWork.artist}}</h6><br>
                  <hr/>
                  <p>Category: {{category}}</p>
                  <p>Description: {{selectedArtWork.description}}</p>
                </div>


            </div>
            <!-- right side -->
            <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
              <div class="right-side p-3 shadow bg-white"><h2>{{selectedArtWork.status}}</h2>
                <div v-if="selectedArtWork.status !== 'available'" class="price-indiv d-flex justify-content-between">
                  <p>Start Bid</p>
                  <p>{{formatTime(selectedArtWork.startBid)}}</p>

                </div>
                <div v-else class="price-indiv d-flex justify-content-between">
                  <p>Current Time</p>
                  <!-- <p>{{formatTime(selectedArtWork.startBid)}}</p> -->
                  <CountDown
                  :time="formatTime(selectedArtWork.endBid)"
                  />

                </div>
                <div class="price-indiv d-flex justify-content-between">
                  <p>End Bid</p>
                  <p>{{formatTime(selectedArtWork.endBid)}}</p>
                </div>

                 <div class="total-amount d-flex justify-content-between font-weight-bold">
                   <p>Current Price</p>
                   <p>$ <span id="total-cart-amt">{{ selected.currentPrice }}</span></p>
                 </div>
                 <button v-if="verify === false" @click="$router.push('/login')" class="btn1">Login</button>
              </div>
              <!-- Expect date delivery -->

              <div v-if="verify === true" class="mt-3 shadow p-3 bg-white">
                <div class="pt-4">
                  <h5 class="mb-4">Input your offer</h5>
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input v-model="currPrice" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </div>
                  <button v-if="currPrice > selected.currentPrice" class="btn0" @click="addBid">Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import { io } from 'socket.io-client'
import moment from 'moment'
import CountDown from '../components/CountDown'
const socket = io('http://localhost:3000')
export default {
  data() {
    return {
      currPrice: 0,
      verify: false,
      selectedArtWork: {}
    }
  },
  name: 'Details',
  components: {
    CountDown
  },
  methods: {
    formatTime(time){
      return moment(time).format('MMMM Do YYYY, hh:mm:ss')
    },
    addBid(){
      let payload = {
        product_id : this.selectedArtWork,
        money_offer : this.currPrice
      }
      this.$store.dispatch('addBid')
    }
  },

  computed: {
    selected: {
      get: function () {
        console.log(this)
        return this.selectedArtWork
      },
      set: function (newVal) {
        this.selectedArtWork = newVal
      }
    },
    category(){
      return this.selected?.Category?.name
    }
  },
  created(){
  console.log(this.$route.params, 'params');
    this.$store.dispatch('getProductDetails', this.$route.params.id)
    this.selected = this.$store.state.selectedArtWorks
  },
  mounted(){
    if(localStorage.getItem('access_token')){
      this.verify = true
    }
    socket.on('connect', () => {
      console.log(socket.id, 'skct.id', this.selectedArtWork.id) // x8WIv7-mJelg7on_ALbx
        if (this.selectedArtWork.id) {
          socket.on(`addBid-${this.selectedArtWork.id}`, (data) => {
            this.selected = data
            console.log('socket', data)
          })
        }
    })


    console.log(this.selected, 'details munted')
  }
}
</script>
