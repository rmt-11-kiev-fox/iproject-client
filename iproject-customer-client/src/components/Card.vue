<template>
  <div class="col-lg-3 text-center">
    <div @click="$router.push(`/details/${cardData.id}`)" class="card-product border-0 bg-light mb-2">
      <div class="card-body">
        <img :src= "cardData.image_url" class="img-fluid" alt="">
      </div>
    </div>
      <span @click="like(cardData.id)"><i class="fa fa-heart" aria-hidden="true"></i></span>
    <h6>{{cardData.title}}</h6>
    <p>{{cardData.artist}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cardData'],
  methods: {
    like(id){
      if (localStorage.getItem('access_token')){
        this.$store.dispatch('postLike', id)
      }
      else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>

</style>
