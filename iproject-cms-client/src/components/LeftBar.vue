<template>
  <div class="bg-white" id="sidebar-wrapper">
      <div class="sidebar-head text-center py-4 primary-text fs-4 gfw-bold text-uppercase border-bottom">
        <h1>AdminSide</h1>
      </div>
      <div class="list-group list-group-flush my-3">
        <a @click.prevent="toDashboard" href="#" class="list-group-item list-group-item-action bg-transparent second-text">
          <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
        </a>
        <a @click.prevent="addProduct" href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i class="fa fa-archive" aria-hidden="true"></i> Product
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i> Category
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i class="fa fa-line-chart" aria-hidden="true"></i> Analystics
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i class="fa fa-map-signs" aria-hidden="true"></i> Outlet
        </a>
        <a @click.prevent="confirmLogout" href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
          <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LeftBar',

  methods: {
    confirmLogout(){
      localStorage.clear()
      this.$router.push('/login')
    },
    addProduct(){
      this.$router.push('/addProduct')
    },
    toDashboard(){
      this.$router.push('/dashboard')
    }
  },
}
</script>

<style>

</style>
