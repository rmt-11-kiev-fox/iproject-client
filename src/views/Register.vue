<template>
    <div class="container h-100">
        <div class="row mt-5">
            <div class="col-4 mx-auto">
                <h3 class="text-light">Register</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-4 mx-auto">
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label class="text-light">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="registerData.username"
                        />
                    </div>
                    <div class="mb-3">
                        <label class="text-light">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="registerData.password"
                        />
                    </div>
                    <div class="mb-3 d-flex">
                        <div class="w-50 p-1">
                            <button type="submit" class="btn btn-primary w-100">
                                Register
                            </button>
                        </div>
                        <div class="w-50 p-1">
                            <button
                                type="button"
                                class="btn btn-secondary w-100"
                                @click="pushLoginPage"
                            >
                                Back to login
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
    name: 'Register',
    data() {
        return {
            registerData: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            this.$store
                .dispatch('register', this.registerData)
                .then(() => {
                    this.$router.push('/login')
                })
                .catch((err) => {
                    // alertError(err)
                    console.log(err)
                })
        },
        pushLoginPage() {
            this.$router.push('/login')
        }
    }
}
</script>

<style></style>
