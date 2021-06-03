<template>
<div class="card mb-3">
  <img :src="singleNews.image.url" class="card-img-top" :alt="singleNews.title">
  <div class="card-body">
    <h5 class="card-title">{{singleNews.title}}</h5>
    <p class="card-text">{{singleNews.description}}</p>
    <p class="card-text"><small class="text-muted">{{date}}</small></p>
    <a class="card-text" :href="singleNews.url" target="_blank"><small class="text-muted">more...</small></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: ['singleNews'],
  computed: {
    date: function () {
      return new Date(this.singleNews.datePublished).toISOString().slice(0, 10)
    }
  }
}
</script>

<style>

</style>
