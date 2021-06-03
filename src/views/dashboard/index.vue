<template>
  <div class="relative">
    <FilterBar></FilterBar>
    <div class="dashboard-container__right-body">
      <Loader v-if="loadingHandler" />
      <Card v-for="item in getAllData" :key="item.id" :data="item" />
      <div :class="getAllData.length > 2 && 'container-pagination'">
        <Pagination
          :page="page"
          :numPagination="numPagination"
          :paginationHandler="paginationHandler"
          :nextPagination="nextPagination"
          :prevPagination="prevPagination"
          :getTotal="getTotal"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from '../../components/card/index'
import FilterBar from '../../components/filterBar/index'
import Pagination from '@/components/pagination/index'
import Loader from '@/components/loader/index'

export default {
  name: 'Dashboard',
  components: {
    Card,
    FilterBar,
    Pagination,
    Loader
  },
  async created() {
    if (this.$store.state.isLogged) {
      this.$store.commit('IS_LOADING', true)
      await this.$store.dispatch('getAllDataHandler', { page: this.page })
      this.$store.commit('IS_LOADING')
    }
  },
  computed: {
    loadingHandler() {
      return this.$store.state.isLoading
    },
    getAllData() {
      return this.$store.state.allProduct
    },
    getTotal() {
      return this.$store.state.count
    },
    numPagination() {
      const count = this.$store.state.count
      if (count > 24) {
        return [0, 1, 2, 3]
      } else {
        const arr = []
        const num = Math.ceil(count / 6)
        for (let i = 0; i < num; i++) {
          arr.push(i)
        }

        return arr
      }
    }
  },
  data() {
    return {
      page: 0
    }
  },
  methods: {
    async paginationHandler(val) {
      this.page = val
      await this.$store.dispatch('getAllDataHandler', { page: this.page })
    },
    async prevPagination() {
      this.numPagination.pop(
        this.numPagination[this.numPagination.length - 1] + 1
      )

      this.numPagination.unshift(this.numPagination[0] - 1)
      this.page--
      await this.$store.dispatch('getAllDataHandler', { page: this.page })
    },
    async nextPagination() {
      if (
        this.numPagination[this.numPagination.length - 1] + 2 <=
        Math.ceil(this.getTotal / 6)
      ) {
        this.numPagination.push(
          this.numPagination[this.numPagination.length - 1] + 1
        )

        this.numPagination.shift(this.numPagination[0])
        this.page++
      }

      await this.$store.dispatch('getAllDataHandler', { page: this.page })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles.scss';
</style>
