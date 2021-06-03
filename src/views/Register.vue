<template>
  <div class="RegisterPage">
    <div class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
    <form action="" @submit.prevent="Regist" class="flex flex-col justify-center items-center">
      <h2 class="Regs" >Register Here</h2>
      <div class="relative mt-2">
        <i class="fa fa-user absolute text-Pinkky text-3xl"></i>
        <input v-model="RegisterName" type="text" placeholder="eg : Aaran" class="pl-10 border-b-2 pt-2 focus:outline-none hover:border-primarycolor text-2xl">
      </div>
      <div class="relative mt-2">
        <i class="fa fa-envelope absolute text-Pinkky text-3xl"></i>
        <input v-model="RegisterEmail" type="text" placeholder="eg : Aaran@email.com" class="pl-10 pt-2 border-b-2 focus:outline-none hover:border-primarycolor text-2xl">
      </div>
      <div class="relative mt-2">
        <i class="fa fa-unlock-alt absolute text-Pinkky text-3xl" ></i>
        <input v-model="RegisterPassword" type="password" placeholder="" class="pl-8 border-b-2 pt-2 focus:outline-none hover:border-primarycolor text-2xl">
      </div>
        <input type="submit" class="my-3 px-10 bg-Pinkky rounded-full text-white " value="Login">
    </form>
    <div class="">
        <img src="../assets/Register.png" alt="" class="hidden lg:block w-max">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Register",
    data(){
      return{
        RegisterName:'',
        RegisterEmail:'',
        RegisterPassword:''
      }
    },
    methods:{
      Regist () {
        this.$store.dispatch('Regist', {name:this.RegisterName, email:this.RegisterEmail, password:this.RegisterPassword})
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Sigmar+One&display=swap');
.Register{
  font-size: 100px;
  font-family: 'Sigmar One', cursive;
  color: #ffde7d; 
  margin-top: -450px; 
  margin-left: 300px;
}

.Regs {
  font-family: 'Indie Flower', cursive;
  font-size: 30px;
}

</style>