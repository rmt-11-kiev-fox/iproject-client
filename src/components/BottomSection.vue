<template>
    <!-- class="bg-gray-400 h-2/5 rounded-xl m-3 mt-2 grid grid-cols-2" -->
    <section class="h-2/5 rounded-xl m-3 mt-2 grid grid-cols-2">
        <!-- Users Logged In -->
        <div
            class="m-5 bg-black rounded-lg overflow-auto h-90 flex flex-col justify-between"
        >
            <h1 class="badge-custom">Users Online</h1>
            <div class="flex flex-row flex-wrap mr-auto my-2 ml-2">
                <!-- Loop logged in users -->
                <UserCardLobby
                    v-for="user in onlineUsers"
                    :key="user.email"
                    :user="user"
                />
            </div>
            <div class="m-3 text-white">Guests Online: {{ guests }}</div>
        </div>
        <!-- Lobby Chat -->
        <LobbyChatBox />
    </section>
</template>

<script>
import UserCardLobby from "./UserCardLobby";
import LobbyChatBox from "./LobbyChatBox";

// get users here and loop

export default {
    name: "BottomSection",
    components: {
        UserCardLobby,
        LobbyChatBox,
    },
    computed: {
        guests() {
            return this.$store.state.guests;
        },
        onlineUsers() {
            return this.$store.state.onlineUsers;
        },
    },
    updated() {
        console.log("masuk chatbox");
    },
};
</script>

<style>
</style>