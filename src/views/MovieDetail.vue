<template>
  <div>
    <Navbar></Navbar>
    <!-- banner start -->
    <div class="video-container iq-main-slider">
      <img
        :src="`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`"
        class="video d-block"
        alt=""
      />
    </div>

    <!-- banner end -->
    <!-- content start -->
    <div class="main-content movi">
      <section class="movie-detail container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="trending-info g-border">
              <h1 class="trending-text big-title text-uppercase mt-0">
                {{ detail.original_title }}
              </h1>
              <ul
                class="p-0 list-inline d-flex align-items-center movie-content"
              >
                <li
                  v-for="(name, i) in detail.genres"
                  :key="i"
                  class="text-white"
                >
                  {{ name.name }}
                </li>
              </ul>
              <div class="d-flex align-items-center text-white text-detail">
                <span class="badge badge-secondary p-3">{{
                  detail.vote_average
                }}</span>
                <span class="ml-3">{{ detail.runtime }} min</span>
                <span class="trending-year">{{ detail.release_date }}</span>
              </div>
              <div class="d-flex align-items-center series mb-4">
                <a href="javascript:void();"
                  ><img
                    src="images/trending/trending-label.png"
                    class="img-fluid"
                    alt=""
                /></a>
              </div>
              <p class="trending-dec w-100 mb-0">
                {{ detail.overview }}
              </p>
              <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                <li>
                  <span
                    @click="
                      addToWishlist(
                        'Favorite',
                        movies.id,
                        movies.poster_path,
                        movies.title,
                        movies.release_date
                      )
                    "
                    ><i class="ri-heart-fill"></i
                  ></span>
                </li>
                <li>
                  <span
                    @click="
                      addToWishlist(
                        'Dislike',
                        movies.id,
                        movies.poster_path,
                        movies.title,
                        movies.release_date
                      )
                    "
                    ><i class="bi bi-hand-thumbs-down-fill"></i
                  ></span>
                </li>
                <li class="share">
                  <span><i class="ri-add-line"></i></span>
                  <div class="share-box">
                    <div class="d-flex align-items-center">
                      <a
                        @click="
                          addToWishlist(
                            'Want To Watch',
                            movies.id,
                            movies.poster_path,
                            movies.title,
                            movies.release_date
                          )
                        "
                        class="share-ico"
                        ><i class="bi bi-envelope-fill"></i
                      ></a>
                      <a
                        @click="
                          addToWishlist(
                            'Watching',
                            movies.id,
                            movies.poster_path,
                            movies.title,
                            movies.release_date
                          )
                        "
                        class="share-ico"
                        ><i class="bi bi-envelope-open-fill"></i
                      ></a>
                      <a
                        @click="
                          addToWishlist(
                            'Already Watched',
                            movies.id,
                            movies.poster_path,
                            movies.title,
                            movies.release_date
                          )
                        "
                        class="share-ico"
                        ><i class="bi bi-check-lg"></i
                      ></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites" class="s-margin">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 overflow-hidden">
              <div
                class="iq-main-header d-flex align-items-center justify-content-between"
              >
                <h4 class="main-title">
                  <a href="movie-category.html">More Like This</a>
                </h4>
              </div>
              <div class="favorites-contens">
                <ul class="list-inline favorites-slider row p-0 mb-0">
                  <PopularMovies
                    v-for="(movies, i) in similar"
                    :key="i"
                    :movies="movies"
                  ></PopularMovies>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- content end -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

import PopularMovies from "../components/PopularMovies.vue";
export default {
  components: {
    PopularMovies,
    Navbar
  },
  created() {
    let movieId = +this.$route.params.movieId;
    console.log(movieId, "movie id movie detail.vue");
    this.$store.dispatch("fetchMovieDetail", movieId);
    this.$store.dispatch("fetchSimilarMovies", movieId);
  },
  computed: {
    detail() {
      return this.$store.state.detailMovie;
    },
    similar() {
      return this.$store.state.similarMovies;
    }
  }
};
</script>

<style></style>
