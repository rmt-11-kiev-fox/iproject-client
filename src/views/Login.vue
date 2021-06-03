<template>
    <div class="container h-100">
        <div class="row mt-5">
            <div class="col-4 mx-auto">
                <h3 class="text-light">Login</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-4 mx-auto">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label class="text-light">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="loginData.username"
                        />
                    </div>
                    <div class="mb-3">
                        <label class="text-light">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="loginData.password"
                        />
                    </div>
                    <div class="mb-3 d-flex">
                        <div class="w-50 p-1">
                            <button type="submit" class="btn btn-primary w-100">
                                Login
                            </button>
                        </div>
                        <div class="w-50 p-1">
                            <button
                                type="button"
                                class="btn btn-secondary w-100"
                                @click="pushRegisterPage"
                            >
                                Register new account
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import alertError from '../assets/scripts/errorHandler'

export default {
    name: 'Login',
    data() {
        return {
            loginData: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$store
                .dispatch('login', this.loginData)
                .then(({ data }) => {
                    localStorage.access_token = data.access_token
                    localStorage.current_user = JSON.stringify(data)
                    this.$store.commit('SET_CURRENT_USER', data)
                    this.$router.push('/')
                })
                .catch((err) => {
                    // alertError(err)
                    console.log(err)
                })
        },
        pushRegisterPage() {
            this.$router.push('/register')
        }
    }
}
</script>

<style></style>
