<template>
    <div class="">
        <!-- <Navbar /> -->
        <div>
            <h1 class="text-header">Relax and chill beats</h1>
            <h5 class="font-light text-lg text-center">
                Aldosupercoolman's room
            </h5>
        </div>
        <!-- "https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1"  SUPER LINK-->
        <!-- src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1" -->
        <div class="grid grid-cols-2">
            <iframe
                id="ytplayer"
                type="text/html"
                height="760"
                class="w-full p-4 pt-2"
                src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1"
                frameborder="0"
                allow="autoplay"
            ></iframe>
            <div class="grid grid-cols-2">
                <!-- Ini Queue Songs -->
                <div>
                    <div class="flex flex-col m-2">
                        <div
                            class="bg-white h-200 rounded-lg overflow-auto flex flex-col border-2 px-2"
                        >
                            <div class="sticky top-0 bg-white">
                                <h1 class="text-center font-light bg-white">
                                    Queued Songs
                                </h1>
                                <form>
                                    <input
                                        class="w-full rounded-full px-2 border-2 py-1 mb-1 border-ch-peach outline-none"
                                        type="text"
                                        placeholder="Find songs to queue"
                                    />
                                </form>
                            </div>

                            <RoomCardSong hidden v-for="i in 15" :key="i" />
                        </div>
                    </div>
                </div>

                <!-- Chat Box -->
                <RoomChatBox />
            </div>
        </div>
    </div>
</template>

<script>
import RoomChatBox from "../components/RoomChatBox.vue";
import RoomCardSong from "../components/RoomCardSong";
export default {
    name: "Room",
    components: { RoomChatBox, RoomCardSong }, //Navbar
};
</script>

<style>
</style>