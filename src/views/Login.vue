<template>
    <!-- login -->
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-5 mx-auto">
                <div class="card card-signin mt-5">
                <div class="card-body">
                    <h2 class="card-title text-center text-light mb-5">Login</h2>
                    <form @submit.prevent="login" class="form-signin">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                            v-model="dataLogin.email"
                            >
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating my-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            v-model="dataLogin.password"
                            >
                            <label for="floatingPassword">Password</label>
                        </div>
            
                        <button class="btn btn-primary btn-block text-uppercase mb-3" type="submit">Login</button>
                    </form>
                    <p class="text-light">don't have any account?? <a class="link" @click="$router.push('/register').catch(() => {})">Register here</a></p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            dataLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.log(this.dataLogin,'<<<<< ini data login');
            this.$store.dispatch('login', this.dataLogin)
        }
    }

}
</script>

<style>

</style>