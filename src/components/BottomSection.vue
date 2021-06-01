<template>
    <section class="bg-gray-400 h-2/5 rounded-xl m-3 mt-7 grid grid-cols-2">
        <!-- Users Logged In -->
        <div class="m-5 bg-gray-300 rounded-lg overflow-auto h-1/2">
            <h1 class="text-ch-peach text-lg font-extrabold m-3 mb-0">
                Users Online
            </h1>
            <div class="grid grid-cols-2 m-3 mt-0">
                <!-- Loop logged in users -->
                <UserCardLobby v-for="index in 15" :key="index" />
            </div>
            <!-- <div class="absolute bottom-0 m-3">Guests Online: 0</div> -->
        </div>

        <!-- Lobby Chat -->
        <div class="m-5 bg-gray-300 rounded-lg h-1/2">
            <h1 class="text-ch-peach text-lg font-extrabold m-3 mb-0">
                Lobby Chat
            </h1>
            <div class="flex flex-col h-full m-2">
                <div class="bg-white h-3/4 mb-1 rounded-lg overflow-scroll">
                    <!-- user Chat -->
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
                    </div>
                    <div class="flex ml-3 mt-2">
                        <h5>aldosupercoolman: .</h5>
                        <p>Hey what's up guys?</p>
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

export default {
    name: "BottomSection",
    components: {
        UserCardLobby,
    },
};
</script>

<style>
</style>