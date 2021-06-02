<template>
  <Overlay v-if="ongkirToggle">
    <div class="ongkir-container">
      <i class="fas fa-times icon-close" @click="ongkirHandler"></i>

      <div class="title">Cek Ongkir</div>

      <form @submit.prevent="checkOngkirHandler">
        <label>Pilih Lokasi</label>
        <select v-model="locationInput">
          <option
            v-for="item in getCityHandler"
            :key="item.id"
            :value="item.city_id"
          >
            {{ item.type + ' ' + item.city_name }}</option
          >
        </select>
        <label>Pilih Kurir</label>
        <select v-model="courierInput">
          <option v-for="item in kurir" :key="item" :value="item">
            {{ item }}</option
          >
        </select>
        <button v-if="!loadingHandler">Submit</button>
        <button v-if="loadingHandler" class="loader-wrapping">
          <LoaderV2 />
        </button>
      </form>
      <div v-if="getOngkirHandler.length > 0" class="result-container">
        <div class="result-title">Hasil Pencarian:</div>
        <div class="item" v-for="item in getOngkirHandler" :key="item.service">
          <div class="text">{{ item.service }}</div>
          <div class="text">Harga: Rp {{ item.cost[0].value }}</div>
          <div class="text">Waktu Pengiriman: {{ item.cost[0].etd }}</div>
        </div>
      </div>
      <div v-if="showNotFound">
        <div class="result-container">
          <div class="result-title">Hasil Pencarian:</div>
          <div class="item">
            <div class="text">Data Tidak ditemukan</div>
          </div>
        </div>
      </div>
    </div>
  </Overlay>
</template>

<script>
import Overlay from '@/components/modal/index'
import LoaderV2 from '@/components/loaderV2/index'
export default {
  props: ['ongkirToggle', 'ongkirHandler', 'data'],
  name: 'cekOngkir',
  components: {
    Overlay,
    LoaderV2
  },
  computed: {
    getCityHandler() {
      return this.$store.state.city
    },
    getOngkirHandler() {
      return this.$store.state.ongkir
    },
    loadingHandler() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    async checkOngkirHandler() {
      const obj = {
        destination: this.locationInput,
        courier: this.courierInput,
        userId: this.data.UserId
      }
      if (this.locationInput && this.courierInput) {
        this.$store.commit('IS_LOADING', true)
        await this.$store.dispatch('getOngkirHandler', obj)
        if (this.getOngkirHandler <= 0) {
          this.showNotFound = true
        }
      }
    }
  },
  created() {
    this.$store.dispatch('getCityHandler')
  },
  destroyed() {
    this.$store.commit('CITY_DATA', [])
    this.$store.commit('GET_ONGKIR_DATA', [])
  },
  updated() {
    if (!this.ongkirToggle) {
      this.$store.commit('GET_ONGKIR_DATA', [])
      this.showNotFound = false
    }
  },
  data() {
    return {
      kurir: ['jne', 'pos', 'tiki'],
      locationInput: '',
      courierInput: '',
      showNotFound: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
