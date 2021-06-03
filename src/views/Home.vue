<template>
  <div>
    <Navbar></Navbar>
    <!-- Slider Start -->
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://wallpaperaccess.com/full/2030091.jpg"
            alt="First slide"
          />
        </div>
      </div>
    </div>
    <!-- Slider End -->
    <!-- main start-->
    <div class="main-content">
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row"></div>
          <div class="col-sm-12 overflow-hidden">
            <div
              class="iq-main-header d-flex align-items-center justify-content-between"
            >
              <h4 class="main-title">Popular Movies</h4>
              <a class="iq-view-all">View All</a>
            </div>
            <div class="favorites-contens">
              <ul class="favorites-slider list-inline  row p-0 mb-0">
                <!-- list start -->
                <PopularMovies
                  v-for="(movies, i) in popularMovies"
                  :key="i"
                  :movies="movies"
                ></PopularMovies>
                <!-- list end -->
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row"></div>
          <div class="col-sm-12 overflow-hidden">
            <div
              class="iq-main-header d-flex align-items-center justify-content-between"
            >
              <h4 class="main-title">Now Playing Movies</h4>
              <a class="iq-view-all">View All</a>
            </div>
            <div class="favorites-contens">
              <ul class="favorites-slider list-inline  row p-0 mb-0">
                <!-- list start -->
                <PopularMovies
                  v-for="(movies, i) in nowPlayingMovies"
                  :key="i"
                  :movies="movies"
                ></PopularMovies>
                <!-- list end -->
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row"></div>
          <div class="col-sm-12 overflow-hidden">
            <div
              class="iq-main-header d-flex align-items-center justify-content-between"
            >
              <h4 class="main-title">Upcoming Movies</h4>
              <a class="iq-view-all">View All</a>
            </div>
            <div class="favorites-contens">
              <ul class="favorites-slider list-inline  row p-0 mb-0">
                <!-- list start -->
                <PopularMovies
                  v-for="(movies, i) in upcomingMovies"
                  :key="i"
                  :movies="movies"
                ></PopularMovies>
                <!-- list end -->
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="iq-favorites">
        <div class="container-fluid">
          <div class="row"></div>
          <div class="col-sm-12 overflow-hidden">
            <div
              class="iq-main-header d-flex align-items-center justify-content-between"
            >
              <h4 class="main-title">News On Your Movies</h4>
              <a class="iq-view-all">View All</a>
            </div>
            <div class="favorites-contens">
              <ul class="favorites-slider list-inline  row p-0 mb-0">
                <!-- list start -->
                <MovieNews
                  v-for="(news, i) in movieNews"
                  :key="i"
                  :news="news"
                ></MovieNews>
                <!-- list end -->
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- main end -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import MovieNews from "../components/MovieNews";

export default {
  name: "Home",
  components: {
    Navbar,
    PopularMovies,
    MovieNews
  },
  created() {
    this.$store.dispatch("fetchPopularMovies");
    this.$store.dispatch("fetchNowPlayingMovies");
    this.$store.dispatch("fetchUpcomingMovies");
    this.$store.dispatch("fetchMovieNews");
  },
  computed: {
    popularMovies() {
      return this.$store.state.popularMovies;
    },
    nowPlayingMovies() {
      return this.$store.state.nowPlayingMovies;
    },
    upcomingMovies() {
      return this.$store.state.upcomingMovies;
    },
    movieNews() {
      return this.$store.state.movieNews;
    }
  }
};
</script>

<style scoped>
/* .slide-image {
  width: 900px;
  height: 1600px;
} */
</style>
