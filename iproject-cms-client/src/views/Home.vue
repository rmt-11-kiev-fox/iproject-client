<template>
  <div class="d-flex home" id="wrapper">
    <!-- Sidebar -->
    <LeftBar></LeftBar>
    <!-- Content n Navbar -->
    <div id="page-content-wrapper">
      <!-- Navbar -->
      <Navbar></Navbar>
      <!-- Dashboard -->

      <!-- <AddProduct></AddProduct> -->
      <!-- <Dashboard></Dashboard> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftBar from '../components/LeftBar'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    LeftBar,
    Navbar,
    Dashboard,
    AddProduct,
    EditProduct
  },
  data() {
    return {
      isActivePage: false
    }
  },

}
</script>
