<template>
  <main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Tenaga Bidan Kami</h1>
      <p class="fs-5 text-muted">Kami menyediakan bidan-bidan berkualitas yang kompeten untuk menjawab keluhan ibu semua.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <CardBidan v-for="bidan in $store.state.bidans" :key="bidan.id" :bidan="bidan"/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import CardBidan from '../components/CardBidan'

export default {
  name: 'Home',
  components: {
    CardBidan
  },
  created () {
    this.$store.dispatch('fetchBidan')
  }
}
</script>
