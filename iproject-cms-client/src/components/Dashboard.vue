<template>
  <div class="container-fluid px-4">
        <div class="row g-3 my-2">
          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">720</h3>
                <p class="fs-5">Product</p>
              </div>
              <i class="fa fa-gift fs-1 primary-text border rounded-full secondary-bg p-3" aria-hidden="true"></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">3204</h3>
                <p class="fs-5">Sales</p>
              </div>
              <i class="fa fa-handshake-o fs-1 primary-text border rounded-full secondary-bg p-3" aria-hidden="true"></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">720</h3>
                <p class="fs-5">Delivery</p>
              </div>
              <i class="fa fa-truck fs-1 primary-text border rounded-full secondary-bg p-3" aria-hidden="true"></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">26%</h3>
                <p class="fs-5">Increase</p>
              </div>
              <i class="fa fa-bar-chart fs-1 primary-text border rounded-full secondary-bg p-3" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col">
            <table class="table caption-top bg-white rounded shadow-sm table-hover">

              <caption class="fs-4 mb-3 primary-text">List of Products</caption>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product</th>
                  <th>Artist</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Action</th>
               </tr>
              </thead>
              <tbody>
                <tr
                v-for="(product, idx) in products"
                :key="product.id">
                  <th scope="row">{{idx+1}}</th>
                  <td>{{product.title}}</td>
                  <td>{{product.artist}}</td>
                  <td>{{product.Category.name}}</td>
                  <td>{{product.status}}</td>
                  <td>
                    <button  @click="$router.push(`/editProduct/${product.id}`)" class="btn btn-secondary">Edit</button>
                    <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {

    }
  },
  computed:{
    products(){
      // console.log(this.$store.state.products.product, 'adanih');
      return this.$store.state.products.product
    },

  },
  methods: {
    fetchProducts(){
      this.$store.dispatch('fetchProducts')
    },
    deleteProduct(id){
      this.$store.dispatch('deleteProduct', id)
    },
    // getProduct(id){
    //   this.$router.push(`/editProduct/${id}`)
    // }
  },
  created(){
    this.$store.dispatch('fetchProducts')

    // console.log(this.$store.state.products, 'home');
  }
}
</script>

<style>

</style>
