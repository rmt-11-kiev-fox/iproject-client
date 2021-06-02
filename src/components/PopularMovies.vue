<template>
  <li class="slide-item">
    <div class="block-images position-relative">
      <div class="img-box">
        <img
          :src="`https://image.tmdb.org/t/p/w500${movies.poster_path}`"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="block-description">
        <h6 class="iq-title">
          <a href="movie-details.html">{{ movies.title }}</a>
        </h6>
        <div class="movie-time d-flex align-items-center my-2">
          <div class="badge badge-secondary p-1 mr-2">
            {{ movies.vote_average }}
          </div>
          <span class="text-white">{{ movies.release_date }}</span>
        </div>
        <div class="hover-buttons">
          <span
            @click.prevent="movieDetail(movies.id)"
            class="btn btn-hover iq-button"
          >
            <i class="fa fa-play mr-1" aria-hidden="true"></i>
            Detail
          </span>
        </div>
      </div>

      <div class="block-social-info">
        <ul class="list-inline p-0 m-0 music-play-lists">
          <li class="share">
            <span><i class="ri-add-line"></i></span>
            <div class="share-box">
              <div class="d-flex align-items-center">
                <a
                  @click="
                    addToWantToWatch(
                      movies.id,
                      movies.poster_path,
                      movies.title,
                      movies.release_date
                    )
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-ico"
                  tabindex="0"
                  ><i class="bi bi-envelope-fill"></i
                ></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-ico"
                  tabindex="0"
                  ><i class="bi bi-envelope-open-fill"></i
                ></a>
                <a
                  data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                  class="share-ico iq-copy-link"
                  tabindex="0"
                  ><i class="bi bi-check-lg"></i
                ></a>
              </div>
            </div>
          </li>
          <li>
            <span><i class="ri-heart-fill"></i></span>
          </li>
          <li>
            <span><i class="bi bi-hand-thumbs-down-fill"></i></span>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["movies"],

  methods: {
    movieDetail(MovieId) {
      // this.$store.dispatch("fetchMovieDetail", MovieId);
      this.$router.push(`/movies/detail/${MovieId}`);
    },
    addToWantToWatch(MovieId, posterPath, title, releaseDate) {
      let newWishlist = {
        cateogory: "Want To Watch",
        type: "Movies",
        MovieId,
        posterPath,
        title,
        releaseDate
      };
      this.$store.dispatch("addToWishlist", newWishlist);
    }
  }
};
</script>

<style></style>
