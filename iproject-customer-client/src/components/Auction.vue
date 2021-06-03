<template>
   <section class="trending">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-lg-5 m-auto text-center">
            <h1>Auction</h1>
            <h6 style="color: lightcoral;">Start Your Bid</h6>
          </div>
        </div>
        <div class="row">
          <div v-if="auction.length > 0">
          <Card
          v-for="auctionDetail in auction"
          :key="auctionDetail.id" :cardData="auctionDetail"
          />
        </div>
        </div>
        <div class="row">
          <div class="col-lg-6 text-center m-auto">
            <button class="btn1">Click For More</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'Auction',
  props: ['auction'],
  components: {
    Card
  },
  computed: {
  }
}
</script>

<style>

</style>
