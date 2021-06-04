<template>
  <div id="register">
    <div class="container m-5">
      <h2 class="text-center"><b>COLLECT FORM</b></h2>
      <div class="row">
        <div class="col-6 text-start">
          <form @submit.prevent="reqCollect" class="container">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name of Your Business:</label>
              <input v-model="name" type="name" class="form-control">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Address:</label>
              <textarea v-model="address" type="name" class="form-control" ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Collect Date:</label>
              <input v-model="date" type="date" class="form-control" >
            </div>
            <div class="mb-3">
              <label for="setup" class="form-label">Notes:</label>
              <textarea v-model="notes" class="form-control" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button type="submit" class="btn-lg btn-dark">COLLECT FOR ME</button>
          </form>
        </div>
        <div class="col-6 mt-3">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="600" height="400" id="gmap_canvas"
              :src="`https://maps.google.com/maps?q=${location.lat},${location.long}&t=&z=13&ie=UTF8&iwloc=&output=embed`"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              ></iframe>
            </div>
          </div>
          <!-- <GmapMap
            :center="{lat: +location.lat, lng: +location.long}"
            :zoom="15"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collect',
  data () {
    return {
      name: '',
      address: '',
      date: '',
      notes: ''
    }
  },
  methods: {
    reqCollect () {
      const payload = {
        name: this.name,
        address: this.address,
        date: this.date,
        notes: this.notes
      }
      this.$store.dispatch('reqCollect', payload)
    }
  },
  computed: {
    location () {
      return this.$store.state.location
    }
  },
  created () {
    this.$store.dispatch('location')
  }
}
</script>

<style>
  .mapouter {
    position:relative;text-align:right;height:500px;width:600px;
  }
  .gmap_canvas {
    overflow:hidden;background:none!important;height:500px;width:600px;
  }
  iframe {width:100%;height:100%;}
</style>
