<template>
  <div>
    <Navbar></Navbar>
    <!-- Slider Start -->
    <section id="home" class="iq-main-slider p-0">
      <div id="home-slider" class="slider m-0 p-0">
        <div class="slide slick-bg s-bg-1">
          <div class="container-fluid position-relative h-100">
            <div class="slider-inner h-100">
              <div class="row align-items-center  h-100">
                <div class="col-xl-6 col-lg-12 col-md-12">
                  <a href="javascript:void(0);">
                    <div
                      class="channel-logo"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.5"
                    >
                      <img
                        src="images/logo.png"
                        class="c-logo"
                        alt="RedEnvelope"
                      />
                    </div>
                  </a>
                  <h1
                    class="slider-text big-title title text-uppercase"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.6"
                  >
                    bushland
                  </h1>

                  <div
                    class="d-flex flex-wrap align-items-center fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    style="opacity: 1;"
                  >
                    <div
                      class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                    >
                      <ul
                        class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                      >
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i class="fa fa-star-half" aria-hidden="true"></i>
                        </li>
                      </ul>
                      <span class="text-white ml-2">4.7(lmdb)</span>
                    </div>
                    <div class="d-flex align-items-center mt-2 mt-md-3">
                      <span class="badge badge-secondary p-2">18+</span>
                      <span class="ml-3">2 Seasons</span>
                    </div>
                  </div>

                  <!-- <div class="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                               
                              <span class="badge badge-secondary p-2">18+</span>
                              <span class="ml-3">2 Seasons</span>
                           </div> -->
                  <p data-animation-in="fadeInUp" data-delay-in="1.2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div
                    class="trending-list"
                    data-wp_object-in="fadeInUp"
                    data-delay-in="1.2"
                  >
                    <div class="text-primary title starring">
                      Starring:
                      <span class="text-body"
                        >Karen Gilchrist, James Earl Jones</span
                      >
                    </div>
                    <div class="text-primary title genres">
                      Genres: <span class="text-body">Action</span>
                    </div>
                    <div class="text-primary title tag">
                      Tag:
                      <span class="text-body">Action, Adventure, Horror</span>
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center r-mb-23"
                    data-animation-in="fadeInUp"
                    data-delay-in="1.2"
                  >
                    <a href="show-details.html" class="btn btn-hover iq-button"
                      ><i class="fa fa-play mr-2" aria-hidden="true"></i>Play
                      Now</a
                    >
                    <a href="show-details.html" class="btn btn-link"
                      >More details</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    // this.$store.dispatch("fetchNowPlayingMovies");
    // this.$store.dispatch("fetchUpcomingMovies");
    this.$store.dispatch("fetchMovieNews");
  },
  computed: {
    popularMovies() {
      return this.$store.state.popularMovies;
    },
    movieNews() {
      return this.$store.state.movieNews;
    }
  }
};
</script>
