<template>
    <!-- class="bg-gray-400 h-2/5 rounded-xl m-3 mt-2 grid grid-cols-2" -->
    <section class="h-2/5 rounded-xl m-3 mt-2 grid grid-cols-2">
        <!-- Users Logged In -->
        <div class="m-5 bg-black rounded-lg overflow-auto h-90">
            <h1 class="badge-custom">Users Online</h1>
            <div class="flex flex-row flex-wrap mr-auto my-2 ml-2">
                <!-- Loop logged in users -->
                <UserCardLobby v-for="index in 50" :key="index" />
            </div>
            <!-- <div class="absolute bottom-0 m-3">Guests Online: 0</div> -->
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
                    <div class="user-self">
                        <img
                            class="h-12 w-12 rounded-full object-cover mr-4"
                            src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                            alt=""
                        />
                        <!-- <h5></h5> -->
                        <p class="user-text">Hey what's up guys?</p>
                    </div>
                    <div class="user-others bg-gray-300">
                        <!-- <h5></h5> -->
                        <p class="user-text font-medium text-gray-800">
                            nm hbu?
                        </p>
                        <img
                            class="h-12 w-12 rounded-full object-cover ml-4"
                            src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
                            alt=""
                        />
                    </div>
                    <div
                        class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                    >
                        <img
                            class="h-12 w-12 rounded-full object-cover mr-4"
                            src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                            alt=""
                        />
                        <!-- <h5></h5> -->
                        <p class="user-text">I'm good thanks!</p>
                    </div>
                    <div class="user-others bg-gray-300">
                        <!-- <h5></h5> -->
                        <p class="user-text font-medium text-gray-800">
                            nm hbu?
                        </p>
                        <img
                            class="h-12 w-12 rounded-full object-cover ml-4"
                            src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
                            alt=""
                        />
                    </div>
                    <div class="user-others bg-gray-300">
                        <!-- <h5></h5> -->
                        <p class="user-text font-medium text-gray-800">
                            nm hbu?
                        </p>
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
};
</script>

<style>
.badge-custom {
    @apply text-ch-peach bg-white text-lg font-extrabold mt-3 w-32 rounded-md rounded-l-none text-center;
}
.user-text {
    @apply font-light text-lg text-white;
}
.user-self {
    @apply flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2;
}
.user-others {
    @apply flex ml-3 mt-2 self-end items-center justify-end bg-ch-peach rounded-full w-1/2;
}
</style>