<template>
  <div class="add-container">
    <div class="title">Add Product</div>
    <i
      class="fas fa-times icon-close"
      @click="toggleAddProductHandler(false)"
    ></i>
    <form @submit.prevent="addProductHandler">
      <label>Nama Product</label>
      <input
        type="text"
        placeholder="Masukan Nama Product"
        v-model="nameInput"
      />
      <div class="flex">
        <div class="price-container">
          <label>Harga Awal</label>
          <input
            type="number"
            v-model="obInput"
            class="price"
            placeholder="Masukan Harga"
          />
        </div>
        <div class="price-container">
          <label>Harga Akhir</label>
          <input
            type="number"
            v-model="binInput"
            class="price"
            placeholder="Masukan Harga"
          />
        </div>
      </div>

      <label>Add Image</label>
      <div class="flex">
        <img :src="imageInput" v-if="imageInput !== ''" />
        <button
          @click="openUploadModal"
          type="button"
          class="button-upload"
          v-if="imageInput === ''"
        >
          +
        </button>
        <button
          @click="openUploadModal"
          type="button"
          class="button-upload"
          v-if="imageInput !== ''"
        >
          <i class="fas fa-exchange-alt icon"></i>
        </button>
      </div>
      <label>Kategori Produk</label>
      <div class="select">
        <div
          class="item"
          :class="categoryInput === 'other' && 'selected'"
          @click="changeCategoryHandler('other')"
        >
          Other
        </div>
        <div
          class="item"
          :class="categoryInput === 'pakaian' && 'selected'"
          @click="changeCategoryHandler('pakaian')"
        >
          Pakaian
        </div>
        <div
          class="item"
          :class="categoryInput === 'game' && 'selected'"
          @click="changeCategoryHandler('game')"
        >
          Game
        </div>
        <div
          class="item"
          :class="categoryInput === 'electronic' && 'selected'"
          @click="changeCategoryHandler('electronic')"
        >
          Electronic
        </div>
      </div>
      <label>Kelipatan Harga</label>
      <div class="select">
        <div
          class="item"
          :class="bidInput === 10000 && 'selected'"
          @click="changeBidHandler(10000)"
        >
          + 10.000
        </div>
        <div
          class="item"
          :class="bidInput === 50000 && 'selected'"
          @click="changeBidHandler(50000)"
        >
          + 50.000
        </div>
        <div
          class="item"
          :class="bidInput === 100000 && 'selected'"
          @click="changeBidHandler(100000)"
        >
          + 100.000
        </div>
      </div>

      <label>Due Date</label>
      <div class="select">
        <div
          class="item"
          :class="dueDate === 30 && 'selected'"
          @click="changeDueDateHandler(30)"
        >
          30 Detik
        </div>
        <div
          class="item"
          :class="dueDate === 43200 && 'selected'"
          @click="changeDueDateHandler(43200)"
        >
          12 Jam
        </div>
        <div
          class="item"
          :class="dueDate === 86400 && 'selected'"
          @click="changeDueDateHandler(86400)"
        >
          24 Jam
        </div>
      </div>
      <button class="button-submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['toggleAddProductHandler'],
  name: 'addProduct',
  methods: {
    changeBidHandler(val) {
      this.bidInput = val
    },
    changeDueDateHandler(val) {
      this.dueDate = val
    },
    changeCategoryHandler(val) {
      this.categoryInput = val
    },
    addProductHandler() {
      const {
        dueDate,
        binInput,
        bidInput,
        obInput,
        imageInput,
        nameInput,
        categoryInput
      } = this

      const obj = {
        dueDate,
        bin: binInput,
        bid: bidInput,
        ob: obInput,
        image: imageInput,
        name: nameInput,
        category: categoryInput
      }

      this.$store.dispatch('addProductHandler', obj)
    },
    openUploadModal() {
      window.cloudinary
        .openUploadWidget(
          {
            cloud_name: 'dfh39qfib',
            upload_preset: 'rwfxz7rj'
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              this.imageInput = result.info.url
            }
          }
        )
        .open()
    }
  },
  data() {
    return {
      dueDate: 30,
      binInput: '',
      bidInput: 10000,
      obInput: '',
      imageInput: '',
      nameInput: '',
      categoryInput: 'other'
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
