<template>
  <div class="register-container">
    <div class="title">Register</div>
    <i class="fas fa-times icon-close" @click="toggleRegisterHandler"></i>
    <form>
      <label>Email</label>
      <input type="text" placeholder="Masukan Email" />
      <label>Username</label>
      <input type="text" placeholder="Masukan Username" />
      <label>Image Profile</label>
      <input type="file" placeholder="Masukan Email" />
      <label>Password</label>
      <input type="password" placeholder="Masukan Password" />
      <label>Role</label>
      <div class="select-role">
        <div
          class="role"
          :class="role === 'buyer' && 'selected'"
          @click="changeRoleHandler('buyer')"
        >Pembeli</div>
        <div
          class="role"
          :class="role === 'seller' && 'selected'"
          @click="changeRoleHandler('seller')"
        >Penjual</div>
      </div>
      <button>Submit</button>
    </form>
    <div class="login-copy">Have Any Account?</div>
    <div class="login-copy link" @click="toggleLoginHandler">Login</div>
  </div>
</template>

<script>


export default {
  props:["toggleLoginHandler","toggleRegisterHandler"],
  name: "Register",
  methods:{
    changeRoleHandler(val){
      this.role =val
    }
  },
  data(){
    return {
      role: "buyer"
    }
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
