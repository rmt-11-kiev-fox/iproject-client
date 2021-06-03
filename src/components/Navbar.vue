<template>
    <!-- class="grid grid-cols-3 bg-ch-peach h-16 max-h-16 rounded-full mx-3 mt-3" -->
    <div class="grid grid-cols-3 bg-black h-24">
        <div class="self-center pl-5 h-16">
            <div class="h-full flex items-center text-white relative">
                <div v-if="checkEmail" class="flex items-center cursor-pointer">
                    <span @mouseover="dropdown = true"
                        >What's up {{ checkEmail }}</span
                    >
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
                    <ul
                        @mouseover="dropdown = true"
                        @mouseleave="dropdown = false"
                        v-if="dropdown"
                        class="absolute right-1/2 -bottom-3/4 text-colorhunt-lightbrown pt-1"
                    >
                        <li>
                            <a
                                class="rounded bg-white text-black cursor-pointer py-2 px-4 block whitespace-no-wrap dark:bg-gray-800 dark:text-gray-100"
                                @click="createRoom"
                                >Create Room</a
                            >
                        </li>
                        <li>
                            <a
                                class="rounded bg-white text-black cursor-pointer py-2 px-4 block whitespace-no-wrap border-t-2"
                                @click="logout"
                                >Logout</a
                            >
                        </li>
                    </ul>
                </div>
                <GoogleLogin
                    v-else
                    :params="params"
                    :onSuccess="onSuccess"
                    :onFailure="onFailure"
                    class="bg-white text-ch-peach px-3 py-1 rounded-md font-semibold"
                    >Sign In</GoogleLogin
                >
            </div>
        </div>
        <div
            class="h-24 self-center flex items-center justify-self-center cursor-pointer"
            @click.prevent="goHome"
        >
            <img src="../assets/logo.png" class="h-3/4 object-cover" alt="" />
        </div>
        <CreateRoomModal />
    </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import CreateRoomModal from "./CreateRoomModal";

export default {
    name: "Navbar",
    data() {
        return {
            params: {
                client_id:
                    "693377768962-cfh5t58h8eicaabgd14sbgplpi7ttok9.apps.googleusercontent.com",
            },
            dropdown: false,
        };
    },
    methods: {
        createRoom() {
            console.log("masuk create room");
            const modal = document.getElementById("modal");
            modal.classList.add("scale-100");
        },
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
        logout() {
            console.log("logging out sir.");
            let user = this.$store.state.user;
            this.$socket.emit("userLogout", user);
            this.$store.commit("SET_USER", {});
            localStorage.clear();
        },
        goHome() {
            this.$router.push("/");
        },
    },
    components: { GoogleLogin, CreateRoomModal },
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