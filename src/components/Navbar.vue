<template>
  <nav class=" bg-Grin shadow-xl">
    <div class="container mx-auto">
      <div class="sm:flex justify-around">
        <h1 class="text-Pinkky bg-Ash text-2xl font-bold p-4"> ANIMANGA+ </h1>
        <ul class="text-gray-600 sm:self-center text-x1 border-t sm:border-none">
          <div v-if="$route.name!=='Home'">
          <li class="sm:inline-block mx-4 hover:text-Ash text-Yelow font-bold text-xl">
            <a @click.prevent="LogIn">LogIn</a>
          </li>
          <li class="sm:inline-block mx-4 hover:text-Ash text-Yelow font-bold text-xl">
            <a @click.prevent="Register">Register</a>
          </li>
          </div>
          <div v-else>
          <li @click.prevent="banner" class="sm:inline-block mx-4 text-xl hover:text-Ash text-Yelow font-bold" >
            MyFavorite
          </li>
          <li class="sm:inline-block mx-4 hover:text-Ash text-Yelow font-bold text-xl">
            <a @click.prevent="LogOut">Log Out</a>
          </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:"Navbar",
  methods:{
    LogOut () {
      localStorage.clear()
      this.$router.push('/Login')
    },
    Register() {
      this.$router.push('/Register')
    },
    LogIn() {
      this.$router.push('/Login')
    }
  }

}
</script>

<style>

</style>