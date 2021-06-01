<template>
    <div class="h-96 p-5 min-w-max">
        <div
            class="bg-black rounded-xl h-full overflow-auto"
            @click.prevent="click"
        >
            <!-- Header -->
            <div class="h-1/5 bg-black rounded-full m-2 flex">
                <div class="h-full">
                    <img
                        class="h-20 w-20 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1622219808425-1d162b97a055?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80"
                        alt=""
                    />
                </div>
                <div class="my-auto ml-4">
                    <h4 class="font-bold text-white text-2xl">
                        Songs for coding
                    </h4>
                    <h5 class="font-light text-gray-400 text-lg">
                        aldosupercoolman's Room
                    </h5>
                </div>
            </div>
            <!-- Queued Songs -->
            <div class="h-3/5 bg-white rounded-xl mx-2 mt-5 overflow-auto">
                <div>
                    <h4 class="mx-2 text-gray-400 font-semibold text-lg">
                        Queued Songs
                    </h4>
                    <div>
                        <ul class="bg-white rounded-md mx-2 p-1 pt-0">
                            <!-- loop this again -->
                            <RoomCardSong v-for="i in 5" :key="i" />
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <div class="m-2 flex justify-between">
                <p class="text-black font-light">
                    Users in this room: <span class="font-semibold">38</span>
                </p>
                <button class="bg-ch-peach px-2 rounded font-bold text-white">
                    Join
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import RoomCardSong from "../components/RoomCardSong";

export default {
    name: "RoomCard",
    props: ["index"],
    methods: {
        click() {
            console.log(this.index);
        },
    },
    components: {
        RoomCardSong,
    },
};
</script>

<style>
</style>