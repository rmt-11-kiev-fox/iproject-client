<template>
    <!-- register -->
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
                <div class="card card-signin mt-5">
                    <div class="card-body">
                        <h2 class="card-title text-center text-light mb-5">Register</h2>
                        <form @submit.prevent="register" class="form-signin">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                v-model="dataRegister.email"
                                >
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="username21"
                                v-model="dataRegister.username"
                                >
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating my-4">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                v-model="dataRegister.password"
                                >
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button class="btn btn-primary btn-block text-uppercase mb-3" type="submit">Submit</button>
                        </form>
                        <p class="text-light">have an account?? <a class="link" @click="$router.push('/login').catch(() => {})">Login here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            dataRegister: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            console.log(this.dataRegister,'<<<<< ini data register');
            this.$store.dispatch('register', this.dataRegister)
        }
    }

}
</script>

<style scoped>
.container {
    height: 88vh;
}
</style>