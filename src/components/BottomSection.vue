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
        <div class="m-5 bg-black rounded-lg h-90">
            <h1 class="badge-custom">Lobby Chat</h1>
            <div class="flex flex-col h-full m-2">
                <div
                    class="bg-white h-3/4 mb-1 rounded-lg overflow-scroll flex flex-col"
                >
                    <!-- user Chat -->
                    <!-- 2 div, 1 for self 1 for other users -->
                    <div class="user-others">
                        <img
                            class="h-12 w-12 rounded-full object-cover mr-4"
                            src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                            alt=""
                        />
                        <p class="user-text-others">Hey what's up guys?</p>
                    </div>
                    <div class="user-self">
                        <p class="user-text-self">nm hbu?</p>
                        <img
                            class="h-12 w-12 rounded-full object-cover ml-4"
                            src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
                            alt=""
                        />
                    </div>
                </div>
                <form>
                    <input class="w-full rounded-sm px-2" type="text" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import UserCardLobby from "./UserCardLobby";

// get users here and loop

export default {
    name: "BottomSection",
    components: {
        UserCardLobby,
    },
    computed: {
        guests() {
            return this.$store.state.guests;
        },
        onlineUsers() {
            return this.$store.state.onlineUsers;
        },
    },
};
</script>

<style>
</style>