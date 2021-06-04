<template>
    <!-- login -->
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
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
                    <button v-google-signin-button="clientId" class="google-signin-button mb-3 btn-dark"><i class="fab fa-google"></i> Continue with Google</button>
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
            },
            clientId: '169462539773-aflil3tudkfogedl9vbs50874q1p34hj.apps.googleusercontent.com'
        }
    },
    methods: {
        login() {
            console.log(this.dataLogin,'<<<<< ini data login');
            this.$store.dispatch('login', this.dataLogin)
        },
        OnGoogleAuthSuccess (idToken) {
            // console.log('masukk sini');
            console.log(idToken, '<<<<<<<< token')
            this.$store.dispatch('googleLogin', idToken)
            // Receive the idToken and make your magic with the backend
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }

}
</script>

<style scoped>
.container {
    height: 88vh;
}
.google-signin-button {
    color: white;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>