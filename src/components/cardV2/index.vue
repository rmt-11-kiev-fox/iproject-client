<template>
  <div class="card-product-container">
    <div class="info" v-if="toggleInfoModal">
      <i class="fas fa-times icon" @click="toggleInfoHandler"></i>
      <div class="text">OB : Rp {{ data.ob }}</div>
      <div class="text">Bid : Rp {{ data.bid }}</div>
      <div class="text">Bin : Rp {{ data.bin }}</div>
      <div class="text">
        Due Date :
        {{
          data.dueDate === 10
            ? '10 Detik'
            : data.dueDate === 86400
            ? '24 Jam'
            : '12 Jam'
        }}
      </div>
    </div>
    <div class="floating-edit" @click="editHandler(data.id)">
      <i class="fas fa-edit"></i>
    </div>
    <div class="floating-info" @click="infoHandler(data.id)">
      <i class="fas fa-info-circle"></i>
    </div>

    <img :src="data.image" />
    <div class="title">{{ data.name }}</div>
    <button class="button" @click="deleteHandler(data.id)">
      delete
    </button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'cardV2',
  data() {
    return {
      toggleInfoModal: false
    }
  },
  methods: {
    deleteHandler(val) {
      this.$store.dispatch('deleteProductHandler', { productId: val })
    },
    async editHandler(val) {
      await this.$store.dispatch('getDetailProduct', { productId: val })
      this.$store.commit('PRODUCT_EDIT_MODAL_HANDLER', true)
    },
    async infoHandler(val) {
      await this.$store.dispatch('getDetailProduct', { productId: val })
      this.toggleInfoHandler()
    },
    toggleInfoHandler() {
      this.toggleInfoModal = !this.toggleInfoModal
    }
  },
  computed: {
    getDetailProduct() {
      return this.$store.state.detailProduct
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
