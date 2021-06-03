<template>
  <div class="filter-container">
    <i class="fas fa-times-circle filter-icon" @click="filterToggleHandler"></i>
    <div class="item-container">
      <label>Status :</label>
      <div class="item-flex">
        <div
          class="item"
          :class="statusInput === 'all' && 'active'"
          @click="changeStatus('all')"
        >
          All
        </div>
        <div
          class="item"
          :class="statusInput === 'going' && 'active'"
          @click="changeStatus('going')"
        >
          On Going
        </div>
        <div
          class="item"
          :class="statusInput === 'sold' && 'active'"
          @click="changeStatus('sold')"
        >
          Sold Out
        </div>
      </div>
    </div>
    <div class="item-container">
      <label>Category :</label>
      <div class="item-flex">
        <div
          class="item"
          :class="categoryInput === 'all' && 'active'"
          @click="changeCategory('all')"
        >
          All
        </div>
        <div
          class="item"
          :class="categoryInput === 'pakaian' && 'active'"
          @click="changeCategory('pakaian')"
        >
          Pakaian
        </div>
        <div
          class="item"
          :class="categoryInput === 'game' && 'active'"
          @click="changeCategory('game')"
        >
          Game
        </div>
        <div
          class="item"
          :class="categoryInput === 'electronic' && 'active'"
          @click="changeCategory('electronic')"
        >
          Electronic
        </div>
        <div
          class="item"
          :class="categoryInput === 'other' && 'active'"
          @click="changeCategory('other')"
        >
          Dll
        </div>
      </div>
      <button class="button-filter" @click="applyFilter">Cari</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filterToggleHandler'],
  name: 'FilterSearch',
  components: {},
  data() {
    return {
      statusInput: 'all',
      categoryInput: 'all'
    }
  },
  methods: {
    changeCategory(val) {
      this.categoryInput = val
    },
    changeStatus(val) {
      this.statusInput = val
    },
    applyFilter() {
      this.$store.dispatch('getAllDataFilteredHandler', {
        input: '',
        status: this.statusInput,
        category: this.categoryInput,
        page: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
