<template>
  <div class="ms-4">
    <h2 class="mb-3">Edit Product</h2>
  <form @submit.prevent="editProduct">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input v-model="value.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Artist</label>
    <input v-model="value.artist" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Category</label>
      <select style="width: 50%;" v-model="value.category_id" class="form-select" aria-label="Default select example">
        <option disabled selected>Select Category</option>
        <option value="1">Pop Art</option>
        <option value="2">Realism</option>
        <option value="3">Surealism</option>
        <option value="4">Abstract</option>
      </select>
  </div>
  <label for="">Description</label>
   <div class="form-floating">
   <textarea v-model="value.description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px; width: 50%"></textarea>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image URL</label>
    <input v-model="value.image_url" type="text" class="form-control" id="exampleInputPassword1">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Status</label>
    <input v-model="value.status" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Start Bid</label>
    <input v-model="value.startBid" type="datetime-local" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">End Bid</label>
    <input v-model="value.endBid" type="datetime-local" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
    }
  },
  methods: {
    editProduct(){
      this.$store.dispatch('updateProduct', this.value)
    }
  },
  computed: {
    value(){
      let formatStartBid = ''
      let formatEndBid = ''
      if (this.$store.state.selectedProduct.endBid){
      formatEndBid = new Date (this.$store.state.selectedProduct.endBid).toISOString().substr(0, 19)
      }
      if (this.$store.state.selectedProduct.endBid){
      formatStartBid = new Date (this.$store.state.selectedProduct.startBid).toISOString().substr(0, 19)
      }
      return {
      ...this.$store.state.selectedProduct,
        endBid: formatEndBid,
        startBid: formatStartBid
      // endBid: new Date(this.$store.state.selectedProduct.endBid)
      // new Date().toISOString().substr(0, 19).replace('T', ' ')
      }
    }
  },
  created(){
    // console.log('jalalalalallalaan', this.$store.state.selectedProduct);
    // console.log(this.$route);
    // console.log(this.$router, 'as');
    this.$store.dispatch('getProduct', this.$route.params.product_id)

  }
}
</script>

<style>
  .mb-3 input{
    width: 50%;
  }
</style>
