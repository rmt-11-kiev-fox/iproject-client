<template>
  <div class="list-container-wrapper">
    <Overlay v-if="popUpAdd">
      <FormAdd :toggleAddProductHandler="toggleAddProductHandler" />
    </Overlay>
    <Overlay v-if="popUpEdit">
      <FormEdit />
    </Overlay>
    <div class="floating-button" @click="toggleAddProductHandler(true)">
      <i class="fas fa-folder-plus icon"></i> Add Product
    </div>
    <div class="list-container">
      <Loader v-if="loadingHandler" />
      <Card v-for="item in getDataHandler" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/cardV2/index'
import Overlay from '@/components/modal/index'
import FormAdd from './components/createProduct/index'
import FormEdit from './components/editProduct/index'
import Loader from '@/components/loader/index'

export default {
  name: 'products',
  components: {
    Card,
    Overlay,
    FormAdd,
    FormEdit,
    Loader
  },
  created() {
    this.$store.dispatch('getDataHandler')
  },
  methods: {
    toggleAddProductHandler(val) {
      this.$store.commit('PRODUCT_MODAL_HANDLER', val)
    }
  },
  computed: {
    popUpAdd() {
      return this.$store.state.productModal
    },
    getDataHandler() {
      return this.$store.state.productData
    },
    popUpEdit() {
      return this.$store.state.productEditModal
    },
    loadingHandler() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
