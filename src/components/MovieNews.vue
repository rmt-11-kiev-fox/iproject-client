<template>
  <div class="container-fluid p-0">
    <div class="map-container" style=" left: 0px;">
      <div class="container">
        <div class="row about-us-row text-center align-items-center">
          <div class="col-md-6">
            <div class="text-center">
              <img
                width="497"
                height="477"
                :src="news.image.url"
                class=" img-fluid attachment-large size-large"
                alt=""
                loading="lazy"
                sizes="100vw"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class=" text-left iq-title-box iq-title-default">
              <h2>
                <a :href="news.url" class="iq-title">
                  {{ news.title }}
                </a>
              </h2>

              <div class="row mt-2">
                <div class="col-6">
                  <div class="counter">
                    <span
                      class="counter-number"
                      data-duration="2000"
                      data-to-value="4"
                      data-from-value="0"
                      data-delimiter=","
                      >Published</span
                    >
                  </div>
                  <div class="counter-title">{{ news.datePublished }}</div>
                </div>

                <div class="col-4">
                  <div class="iq-contact-list" data-element_type="column">
                    <div class="counter">
                      <span
                        class="counter-number"
                        data-duration="2000"
                        data-to-value="4"
                        data-from-value="0"
                        data-delimiter=","
                      >
                        Provider
                      </span>
                    </div>
                    <div class="counter-title">{{ news.provider.name }}</div>
                  </div>
                </div>
              </div>
              <h6 class="iq-title">
                <a href="movie-details.html">{{ news.snippets }}</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"]
  //   methods: {
  //     newsDetail(title, description, snippet, datePublished, imageUrl) {
  //       let;
  //     }
  //   }
};
</script>

<style scoped>
.newsImage {
  width: 150pt;
  height: 200pt;
}
</style>
