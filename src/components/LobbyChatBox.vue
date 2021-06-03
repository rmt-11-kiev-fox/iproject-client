<template>
    <div class="m-5 bg-black rounded-lg h-90">
        <h1 class="badge-custom">Lobby Chat</h1>
        <div class="flex flex-col h-full m-2">
            <div
                id="chatlobby-container"
                class="bg-white h-3/4 mb-1 rounded-lg overflow-auto flex flex-col"
            >
                <LobbyChatCard
                    v-for="(message, i) in lobbyChat"
                    :key="i"
                    :message="message"
                />
            </div>
            <form @submit.prevent="sendMessageLobby">
                <input
                    v-model="lobbyMessage"
                    class="w-full rounded-sm px-2 border border-ch-peach outline-none"
                    type="text"
                    placeholder="Send message"
                />
            </form>
        </div>
    </div>
</template>

<script>
import LobbyChatCard from "./LobbyChatCard";
import Swal from "sweetalert2";

export default {
    name: "LobbyChatBox",
    data() {
        return {
            lobbyMessage: "",
        };
    },
    computed: {
        lobbyChat() {
            return this.$store.state.lobbyChat;
        },
    },
    methods: {
        sendMessageLobby() {
            let user = this.$store.state.user;
            if (user.email) {
                const payload = {
                    user,
                    message: this.lobbyMessage,
                };
                this.$store.commit("SET_LOBBY_CHAT", payload);
                this.$socket.emit("sendMessageLobby", payload);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please login first.",
                });
            }
            this.lobbyMessage = "";
        },
    },
    components: {
        LobbyChatCard,
    },
    updated() {
        let el = document.getElementById("chatlobby-container");
        el.scrollTop = el.scrollHeight;
    },
};
</script>

<style>
</style>