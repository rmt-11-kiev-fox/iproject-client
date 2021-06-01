<template>
    <!-- <div class="bg-ch-yellow h-80 w-64 rounded-xl mx-8">
        This is {{ index }}
    </div> -->
    <div class="h-96 p-5 min-w-max">
        <div
            class="bg-ch-yellow rounded-xl h-full overflow-auto"
            @click.prevent="click"
        >
            <!-- Header -->
            <div class="h-1/5 bg-ch-blue rounded-full m-2 flex">
                <div class="h-full">
                    <img
                        class="h-full w-20 rounded-full object-cover"
                        src="https://cdn1-production-images-kly.akamaized.net/6stx738Kee_NZ-_vHGr8ibU9Fow=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg"
                        alt=""
                    />
                </div>
                <div class="my-auto ml-4">
                    <h4 class="font-bold text-gray-300 text-2xl">
                        Epic naruto songs only
                    </h4>
                    <h5 class="font-light text-gray-400 text-lg">
                        Naruto@mail.com's Room
                    </h5>
                </div>
            </div>
            <!-- Queued Songs -->
            <div class="h-3/5 bg-ch-blue rounded-xl mx-2 mt-5 overflow-auto">
                <div>
                    <h4 class="m-2 text-gray-400 font-semibold text-lg">
                        Queued Songs
                    </h4>
                    <div>
                        <ul>
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
                <button class="bg-white px-2 rounded font-bold text-gray-600">
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