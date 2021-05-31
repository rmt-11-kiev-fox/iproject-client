<template>
  <div class="login-container">
    <div class="title">Login</div>
    <i class="fas fa-times icon-close" @click="toggleLoginHandler"></i>
    <form>
      <label>Email</label>
      <input type="text" placeholder="Masukan Email" />
      <label>Password</label>
      <input type="password" placeholder="Masukan Password" />
      <button>Submit</button>
    </form>

    <div class="register-copy">Doesn't Have Any Account?</div>
    <div class="register-copy link" @click="toggleRegisterHandler">Register</div>
  </div>
</template>

<script>


export default {
  props:["toggleLoginHandler","toggleRegisterHandler"],
  name: "Login",
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
