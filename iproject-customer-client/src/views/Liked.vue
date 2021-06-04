<template>
  <div class="bg-light shadow p-5  mt-4 d-flex flex-column justify-content-center">
      <div v-if="liked.length < 1">
        <center>
          <h2 class="uk-h2 uk-text-center">You have no liked artwork!</h2>
        </center>
     </div>
      <div v-else class="container d-flex justify-content-center align-items-center">

        <div
        class="row d-flex justify-content-center"
        v-for="like in liked"
        :key="like.id"
        >
          <div class="card col-4 shadow border-0 m-2" style="width: 18rem">
            <img
              :src="like.Product.image_url"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body d-flex flex-column justify-content-center">
              <h1 class="text-bold text-green">{{like.Product.title}}</h1>
              <h4 class="text-bold">{{like.Product.artist}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    liked(){
      return this.$store.state.liked
    }
  }
}
</script>

<style>

</style>
