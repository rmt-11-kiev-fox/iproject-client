<template>
    <div class="h-96 p-5">
        <div class="bg-black rounded-xl h-full overflow-auto">
            <!-- Header -->
            <div class="h-1/5 bg-black rounded-full m-2 flex">
                <div class="h-full">
                    <img
                        class="h-20 w-20 rounded-full object-cover"
                        :src="room.roomCreator.imageUrl"
                        alt=""
                    />
                </div>
                <div class="my-auto ml-4">
                    <h4 class="font-bold text-white text-2xl">
                        {{ room.roomName }}
                    </h4>
                    <h5 class="font-light text-gray-400 text-lg">
                        {{ room.roomCreator.email }}'s Room
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
                            <RoomCardSong
                                v-for="(song, i) in room.songQueue"
                                :key="i"
                                :song="song"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <div class="m-2 flex justify-between">
                <p class="text-white font-light">
                    Users in this room:
                    <span class="font-semibold">{{ room.users.length }}</span>
                </p>
                <button
                    @click="joinRoom"
                    class="bg-ch-peach px-2 rounded font-bold text-white"
                >
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
    props: ["room"],
    methods: {
        joinRoom() {
            // console.log("masuk joinroom");
            let user = this.$store.state.user;
            const payload = this.room;
            payload.users.push(user);
            this.$socket.emit("joinRoom", payload);
            this.$router.push(`/room/${this.room.roomId}`);
        },
    },
    components: {
        RoomCardSong,
    },
};
</script>

<style>
</style>