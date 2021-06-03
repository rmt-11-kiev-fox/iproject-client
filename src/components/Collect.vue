<template>
  <div id="register">
    <div class="container">
      <h2 class="text-center">COLLECT FORM</h2>
      <div class="row">
        <div class="col-6">
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
            <button type="submit" class="btn-lg btn-success">COLLECT FOR ME</button>
          </form>
        </div>
        <div class="col-6">
          <GmapMap
            :center="{lat:loc.lat, lng:loc.long}"
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
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collect',
  props: ['loc'],
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
  }

}
</script>

<style>

</style>
