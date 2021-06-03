<template>
  <div>
    <Navbar></Navbar>
    <br />
    <br />
    <div class="main-content">
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">Want To Watch</h4>
              </div>
              <div class="favorites-contens">
                <ul class="favorites-slider list-inline  row p-0 mb-0">
                  <WishlistCard
                    v-for="(movies, i) in WantToWatch"
                    :key="i"
                    :movies="movies"
                  ></WishlistCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">Watching</h4>
              </div>
              <div class="favorites-contens">
                <ul class="favorites-slider list-inline  row p-0 mb-0">
                  <WishlistCard
                    v-for="(movies, i) in watching"
                    :key="i"
                    :movies="movies"
                  ></WishlistCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">Already Watch</h4>
              </div>
              <div class="favorites-contens">
                <ul class="favorites-slider list-inline  row p-0 mb-0">
                  <WishlistCard
                    v-for="(movies, i) in doneWatching"
                    :key="i"
                    :movies="movies"
                  ></WishlistCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">Favorite</h4>
              </div>
              <div class="favorites-contens">
                <ul class="favorites-slider list-inline  row p-0 mb-0">
                  <WishlistCard
                    v-for="(movies, i) in favorite"
                    :key="i"
                    :movies="movies"
                  ></WishlistCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">Dislike</h4>
              </div>
              <div class="favorites-contens">
                <ul class="favorites-slider list-inline  row p-0 mb-0">
                  <WishlistCard
                    v-for="(movies, i) in dislike"
                    :key="i"
                    :movies="movies"
                  ></WishlistCard>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import WishlistCard from "../components/WishlistCard";
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
    WishlistCard
  },
  created() {
    this.$store.dispatch("fetchWishlist");
  },
  computed: {
    WantToWatch() {
      return this.$store.getters.wantWishlist;
    },
    watching() {
      return this.$store.getters.watchingWishlist;
    },
    doneWatching() {
      return this.$store.getters.doneWishlist;
    },
    favorite() {
      return this.$store.getters.favoriteWishlist;
    },
    dislike() {
      return this.$store.getters.dislikeWishlist;
    }
  }
};
</script>

<style></style>
