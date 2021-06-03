<template>
  <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
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
</template>

<script>
export default {
  name: 'Gmap',
  data () {
    return {
      center: { lat: -6.17148, lng: 106.82649 },
      markers: [{
        position: { lat: -6.17148, lng: 106.82649 }
      }, {
        position: { lat: 11.0, lng: 11.0 }
      }]
    }
  }
}
</script>

<style>

</style>
