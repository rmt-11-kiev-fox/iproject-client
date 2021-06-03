<template>
  <div class="containter">
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

<style>

</style>
