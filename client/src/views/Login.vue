<template>
<div >
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="card">
                    <form @submit.prevent="login" class="box">
                        <h1>Login</h1>
                        <p class="text-muted"> Please enter your login and password!</p>
                        <input type="text" v-model="username" placeholder="Username">
                        <input type="password" v-model="password" placeholder="Password">
                        <p class="text-muted">Don't have account yet?</p>
                        <a class="forgot text-muted" @click="registerPage">Register here</a>
                        <input type="submit" value="Login">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const dataPayload = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', dataPayload)
    },
    registerPage () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.card {
    /* margin-bottom: 20px; */
    border: none
}

.box {
    width: 500px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #0a0613;
    ;
    text-align: center;
    transition: 0.25s;
    margin-top: 100px
}

.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #475dbe;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #40cc2e
}

.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #40cc2e;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box input[type="submit"]:hover {
    background: #40cc2e
}

.forgot {
    text-decoration: underline
}
</style>
