<template>
  <section class="shop">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-5 m-auto text-center">
            <h1>Artworks</h1>
            <h6 style="color: lightcoral;">By Artheals</h6>
          </div>
        </div>
        <div class="row">
          <!-- Card -->
          <div v-if="artworks.length > 0">
          <Card
          v-for="artwork in artworks"
          :key="artwork.id" :cardData="artwork"
          />
          </div>
        </div>
      </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
export default {
  name: 'Artworks',
  props: ['artworks'],
  components: {
    Card
  },
  methods: {
    fetchProducts(){
      // this.$store.dispatch('fetchProducts')
      console.log('artworks', this.artworks);
    }
  },
  computed: {
  },
  created(){
    // this.$store.dispatch('fetchProducts')
    console.log('created', this.artworks);
  },
  mounted () {

  }
}
</script>
