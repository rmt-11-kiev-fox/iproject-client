<template>
  <div class="dashboard-container__right-head">
    <div class="title">Search Products</div>
    <FilterModal
      v-show="filterActive"
      :filterToggleHandler="filterToggleHandler"
    ></FilterModal>

    <div class="search-engine__container" v-show="!filterActive">
      <div class="search-bar__container">
        <form @submit.prevent="submitHandler">
          <input class="search-bar" v-model="filterInput" />
        </form>
        <i class="fas fa-search icon"></i>
      </div>
      <div class="filter-bar" @click="filterToggleHandler">
        <i class="fas fa-filter icon"></i>
        Filter
      </div>
    </div>
  </div>
</template>

<script>
import FilterModal from '../filter'
export default {
  name: 'FilterBar',
  data() {
    return {
      filterActive: false,
      filterInput: ''
    }
  },
  methods: {
    filterToggleHandler() {
      this.filterActive = !this.filterActive
    },
    submitHandler() {
      this.$store.dispatch('getAllDataFilteredHandler', {
        page: 0,
        input: this.filterInput,
        status: 'all',
        category: 'all'
      })
    }
  },
  components: {
    FilterModal
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
