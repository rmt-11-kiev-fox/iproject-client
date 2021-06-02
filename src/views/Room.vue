<template>
    <div class="">
        <!-- <Navbar /> -->
        <div>
            <h1 class="text-header">{{ room.roomName }}</h1>
            <h5 class="font-light text-lg text-center">
                {{ room.roomCreator.email }}'s room
            </h5>
        </div>
        <!-- src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1" -->
        <!-- "https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1"  SUPER LINK-->
        <!-- src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1" -->
        <div class="grid grid-cols-2">
            <iframe
                id="ytplayer"
                type="text/html"
                height="760"
                class="w-full p-4 pt-2"
                src=""
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
                                <h1
                                    class="text-center font-light border-b-2 mx-5 mb-1"
                                >
                                    Queued Songs
                                </h1>
                                <form @submit.prevent="findSongs">
                                    <input
                                        v-model="songQuery"
                                        class="w-full rounded-full px-2 border-2 py-1 mb-1 border-ch-peach outline-none"
                                        type="text"
                                        placeholder="Find songs to queue"
                                    />
                                </form>
                                <div
                                    class="absolute bg-white w-full"
                                    v-if="searchResults.length > 0"
                                >
                                    <ul>
                                        <li
                                            v-for="song in searchResults"
                                            :key="song.id"
                                            class="cursor-pointer px-2 border-2 bg-gray-200 my-1 rounded-md hover:bg-ch-peach hover:text-white"
                                            @click="addSong(song)"
                                        >
                                            {{ song.title }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <RoomCardSong
                                v-for="song in room.songQueue"
                                :key="song.id"
                                :song="song"
                            />
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
    data() {
        return {
            // room: {},
            songQuery: "",
            searchResults: [],
        };
    },
    methods: {
        findSongs() {
            this.$store
                .dispatch("findSongs", this.songQuery)
                .then(({ data }) => {
                    // console.log(data);
                    this.searchResults = data.results;
                    // data[i].id, data[i].title, data.results[0].thumbnails.default.url
                })
                .catch((err) => {
                    console.log(err);
                });
            this.songQuery = "";
        },
        addSong(payload) {
            // console.log(payload, "ini id song");
            let song = {
                channelTitle: payload.channelTitle,
                title: payload.title,
                imageUrl: payload.thumbnails.default.url,
                id: payload.id,
            };
            console.log(song);
            this.room.songQueue.push(song);
            this.$socket.emit("joinRoom", this.room);
            this.searchResults = [];
        },
    },
    components: { RoomChatBox, RoomCardSong }, //Navbar
    // created() {
    //     // console.log("masuk created", this.$route.params.id);
    //     // this.$socket.on("roomData", (data) => {
    //     //     console.log(data, "INI DALAM SOCKET ON");
    //     //     this.room = data;
    //     // });
    //     let roomIndex = this.$store.state.rooms.findIndex(
    //         (el) => el.roomId == this.$route.params.id
    //     );
    //     if (roomIndex !== -1) {
    //         // console.log("masuk room index");
    //         // console.log("ini created");
    //         this.room = this.$store.state.rooms[roomIndex];
    //     }
    // },
    computed: {
        room() {
            let roomIndex = this.$store.state.rooms.findIndex(
                (el) => el.roomId == this.$route.params.id
            );
            return this.$store.state.rooms[roomIndex];
            // console.log("masuk room index");
            // console.log("ini created");
        },
    },
};
</script>

<style>
</style>