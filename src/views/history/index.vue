<template>
  <div>
    <Loader v-if="loadingHandler" />
    <Card
      v-for="item in getHistoryData"
      :key="item.id"
      :data="item"
      :isHistory="true"
    />
  </div>
</template>

<script>
import Card from '@/components/card/index'
import Loader from '@/components/loader/index'

export default {
  name: 'history',
  components: {
    Card,
    Loader
  },
  created() {
    this.$store.dispatch('getHistoryHandler')
  },
  computed: {
    getHistoryData() {
      return this.$store.state.history
    },
    loadingHandler() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style></style>
