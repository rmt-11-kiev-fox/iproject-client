<template>
    <div class="my-auto">
        <!-- <Navbar /> -->
        <button
            v-if="adminCheck"
            class="absolute top-8 right-10 h-10 bg-white rounded-md px-2"
            @click.prevent="deleteRoom"
        >
            Delete Room
        </button>
        <div>
            <template v-if="room">
                <h1 class="text-header">{{ room.roomName }}</h1>
            </template>
            <h5 class="font-light text-lg text-center">
                {{ room.roomCreator.email }}'s room
            </h5>
        </div>
        <!-- src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1" -->
        <!-- "https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1"  SUPER LINK-->
        <!-- src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1" -->
        <div class="grid grid-cols-2">
            <div
                v-if="room.songQueue.length > 0"
                class="grid grid-rows-3 h-200"
            >
                <!-- , controls: 0 -->
                <youtube
                    id="ytplayer"
                    class="p-4 pt-2 mt-1 mx-auto block"
                    :player-vars="{ autoplay: 1, controls: 0 }"
                    :video-id="room.songQueue[0].id"
                    @ended="nextSong"
                ></youtube>

                <!-- Lyrics Bar Broken -->
                <div
                    class="row-start-3 flex justify-start items-start h-full bg-white flex-col mx-10 rounded-md"
                >
                    <div class="flex flex-row justify-between w-full">
                        <h1 class="font-light text-lg ml-3">Lyrics Finder</h1>
                        <form class="ml-auto" @submit.prevent="searchLyrics">
                            <input
                                v-model="lyricsQuery.artist"
                                type="text"
                                placeholder="Artist Name"
                                class="bg-gray-100 px-2 border-2 border-ch-peach rounded-md mr-1"
                            />
                            <input
                                v-model="lyricsQuery.title"
                                type="text"
                                placeholder="Song Name"
                                class="bg-gray-100 px-2 border-2 border-ch-peach rounded-md mr-1"
                            />
                            <button
                                type="submit"
                                class="bg-white hover:bg-ch-peach hover:text-white px-2 border-2 rounded-md"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <div class="flex-grow overflow-auto p-2">
                        {{ lyrics }}
                    </div>
                </div>
            </div>

            <div v-else class="mx-auto my-36 font-light text-3xl">
                Queue a song now!
            </div>
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
                <div class="flex flex-col m-2">
                    <div
                        class="mb-1 rounded-lg overflow-auto flex flex-col h-200 border-2 bg-white"
                    >
                        <h1
                            class="sticky top-0 text-center font-light border-b-2 mx-5"
                        >
                            Chat Room
                        </h1>

                        <div v-if="room.roomChat.length > 0"></div>
                        <RoomChatCard
                            v-for="(message, i) in room.roomChat"
                            :key="i"
                            :message="message"
                        />
                    </div>
                    <form @submit.prevent="sendRoomMessage">
                        <input
                            class="w-full rounded-sm px-2 border-2 py-1 border-ch-peach outline-none"
                            type="text"
                            placeholder="Send a message"
                            v-model="roomMessage"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RoomChatCard from "../components/RoomChatCard.vue";
import RoomCardSong from "../components/RoomCardSong";
import Swal from "sweetalert2";

export default {
    name: "Room",
    data() {
        return {
            songQuery: "",
            searchResults: [],
            lyricsQuery: {
                artist: "",
                title: "",
            },
            lyrics: "",
            roomMessage: "",
        };
    },
    methods: {
        findSongs() {
            let user = this.$store.state.user;
            if (user.email) {
                this.$store
                    .dispatch("findSongs", this.songQuery)
                    .then(({ data }) => {
                        this.searchResults = data.results;
                    })
                    .catch((err) => {
                        console.log(err.response);
                    });
                this.songQuery = "";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please login first.",
                });
            }
        },
        addSong(payload) {
            // console.log(payload, "ini id song");
            let user = this.$store.state.user;
            if (user.email) {
                let song = {
                    channelTitle: payload.channelTitle,
                    title: payload.title,
                    imageUrl: payload.thumbnails.default.url,
                    id: payload.id,
                };
                this.room.songQueue.push(song);
                this.$socket.emit("joinRoom", this.room);
                this.searchResults = [];
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please login first.",
                });
            }
        },
        nextSong() {
            // console.log("masuk nextsong");
            if (this.room.roomCreator.email === this.$store.getters.getEmail) {
                setTimeout(() => {
                    this.room.songQueue.splice(0, 1);
                    this.lyrics = "";
                    this.$socket.emit("joinRoom", this.room);
                }, 3000);
            }
        },
        searchLyrics() {
            // console.log(this.lyricsQuery, "masuk search lyrics");
            let user = this.$store.state.user;
            if (user.email) {
                this.$store
                    .dispatch("searchLyrics", this.lyricsQuery)
                    .then(({ data }) => {
                        this.lyrics = data.lyrics;
                    })
                    .catch((err) => {
                        // console.log(err);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: err.response,
                        });
                    });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please login first.",
                });
            }
        },
        sendRoomMessage() {
            let user = this.$store.state.user;
            if (user.email) {
                const payload = {
                    user,
                    message: this.roomMessage,
                };
                this.room.roomChat.push(payload);
                this.$socket.emit("joinRoom", this.room);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please login first.",
                });
            }
            this.roomMessage = "";
        },
        deleteRoom() {
            this.$socket.emit("deleteRoom", this.room);
        },
    },
    components: { RoomChatCard, RoomCardSong },
    computed: {
        room() {
            let roomIndex = this.$store.state.rooms.findIndex(
                (el) => el.roomId == this.$route.params.id
            );
            return this.$store.state.rooms[roomIndex];
        },
        adminCheck() {
            if (this.room.roomCreator.email === this.$store.getters.getEmail) {
                return true;
            }
            return false;
        },
    },
    created() {
        if (!this.room) {
            this.$router.push("/");
        }
    },
    updated() {
        if (!this.room) {
            this.$router.push("/");
        }
    },
};
</script>

<style>
</style>