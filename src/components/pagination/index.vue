<template>
  <div class="pagination" v-if="getTotal > 8">
    <div
      class="previous button"
      @click="prevPagination"
      v-if="numPagination[0] !== 0"
    >
      <i class="fas fa-caret-left"></i>
    </div>
    <div class="content">
      <div
        v-for="(item, idx) in numPagination"
        :key="idx"
        @click="paginationHandler(item)"
        :class="item === page && 'active-pagination'"
      >
        {{ item + 1 }}
      </div>
    </div>
    <div class="next button" @click="nextPagination" v-if="showNextButton">
      <i class="fas fa-caret-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: [
    'page',
    'numPagination',
    'nextPagination',
    'prevPagination',
    'paginationHandler',
    'getTotal'
  ],
  data() {
    return {}
  },
  computed: {
    showNextButton() {
      return (
        this.getTotal > 8 &&
        this.page + 1 <= this.getTotal / 6 &&
        this.numPagination[this.numPagination.length - 1] + 2 <=
          Math.ceil(this.getTotal / 6)
      )
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
