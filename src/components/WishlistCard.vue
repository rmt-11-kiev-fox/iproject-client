<template>
  <li class="slide-item">
    <div class="block-images position-relative">
      <div class="img-box">
        <img :src="movies.posterPath" class="img-fluid" alt="" />
      </div>
      <div class="block-description">
        <h6 class="iq-title">
          <a>{{ movies.title }}</a>
        </h6>
        <div class="hover-buttons">
          <span @click="deleteWishlist(movies.id)" class="btn btn-hover"
            ><i class="fa fa-play mr-1" aria-hidden="true"></i>
            Delete
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["movies"],
  methods: {
    deleteWishlist(wishlistId) {
      this.$store.dispatch("deleteWishlist", wishlistId);
    }
  }
};
</script>

<style></style>
