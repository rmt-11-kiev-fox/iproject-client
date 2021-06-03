<template>
<div>
  <!-- BANNER -->
  <Banner/>

  <Auction
  :auction="auction"
  />
  <Artworks
  :artworks="artworks"
  />
  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from '../components/Banner'
import Auction from '../components/Auction'
import Artworks from '../components/Artworks'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Banner,
    Auction,
    Artworks,
    Footer,

  },
  methods: {
  },
  computed: {
    auction(){
      if (this.$store.state.artworks.length > 0){
        const auctionData = this.$store.state.artworks.filter((el) => el.status === 'available')
        return auctionData
      } else {
        return []
      }

    },
    artworks(){
       if (this.$store.state.artworks.length > 0){
        const artworksData = this.$store.state.artworks.filter((el) => el.status !== 'available')
        return artworksData
      } else {
        return []
      }
    }
  },
  created(){
    this.$store.dispatch('fetchProducts')
  },
  mounted(){
    console.log(this.$store.state.artworks);
  }
}
</script>
