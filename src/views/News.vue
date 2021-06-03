<template>
  <div class="containter overflow-auto">
      <NewsCard
        v-for="singleNews in news" :key="singleNews.id"
        :singleNews="singleNews"
      ></NewsCard>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard'
export default {
  name: 'News',
  computed: {
    news: function () {
      return this.$store.state.news
    }
  },
  components: {
    NewsCard
  }
}
</script>

<style scoped>
.container {
    margin-top: 50px;
    margin-bottom: 50px;
    max-height: 750px;
}
</style>
