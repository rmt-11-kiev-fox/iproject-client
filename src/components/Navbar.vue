<template>
    <!-- class="grid grid-cols-3 bg-ch-peach h-16 max-h-16 rounded-full mx-3 mt-3" -->
    <div class="grid grid-cols-3 bg-black h-24">
        <div class="self-center pl-5 h-16">
            <div class="h-full flex items-center text-white">
                <div v-if="checkEmail" class="flex items-center cursor-pointer">
                    <span>What's up {{ checkEmail }}</span>
                    <span
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 ml-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                            /></svg
                    ></span>
                </div>
                <GoogleLogin
                    v-else
                    :params="params"
                    :onSuccess="onSuccess"
                    :onFailure="onFailure"
                    >Login</GoogleLogin
                >
            </div>
        </div>
        <div class="h-24 self-center flex items-center justify-self-center">
            <img src="../assets/logo.png" class="h-3/4 object-cover" alt="" />
        </div>
    </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
    name: "Navbar",
    data() {
        return {
            params: {
                client_id:
                    "693377768962-cfh5t58h8eicaabgd14sbgplpi7ttok9.apps.googleusercontent.com",
            },
        };
    },
    methods: {
        onSuccess(googleUser) {
            this.$store
                .dispatch("googleSignIn", googleUser)
                .then(({ data }) => {
                    localStorage.setItem("access_token", data.access_token);
                    localStorage.setItem("email", data.email);
                    localStorage.setItem("imageUrl", data.imageUrl);
                    // make it reactive baby.

                    let emailFormat = localStorage.email.split("@gmail.com");
                    const payload = {
                        email: emailFormat[0],
                        imageUrl: localStorage.imageUrl,
                    };
                    this.$store.commit("SET_USER", payload);
                    this.$socket.emit("onLogin", payload);
                    this.$socket.emit("guestHandler", false);
                })
                .catch((err) => {
                    console.log(err, err.response, "ini di onsuccess");
                });
        },
        onFailure(error) {
            console.log(error, "ini error di google auth");
        },
    },
    components: { GoogleLogin },
    computed: {
        checkEmail() {
            if (this.$store.state.user.email)
                return this.$store.state.user.email;
            return false;
        },
    },
};
</script>

<style>
</style>