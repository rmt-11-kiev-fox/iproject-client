<template>
    <div
        id="modal"
        class="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform scale-0 transition-transform duration-300"
    >
        <!-- Modal content -->
        <div
            class="bg-white w-1/2 h-1/2 p-12 rounded-md flex flex-col justify-around mx-10 relative"
        >
            <!--Close modal button-->
            <button
                @click="closeModal"
                type="button"
                class="outline-none absolute top-0 right-0 hover:text-ch-peach"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>

            <!-- Test content -->
            <h1 class="text-center font-light text-4xl text-ch-peach">
                Create a new room!
            </h1>
            <form @submit.prevent="createRoom" class="flex flex-col">
                <input
                    v-model="roomName"
                    class="my-auto h-1/3 text-7xl outline-none border-2 border-dotted text-black font-light p-5 py-10 rounded-sm"
                    type="text"
                    placeholder="Room name..."
                />
                <button
                    type="submit"
                    class="focus:outline-none border-2 mx-auto px-5 py-2 rounded-full text-gray-500 border-ch-peach hover:bg-ch-peach hover:text-white"
                >
                    Let's go!
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateRoomModal",
    data() {
        return {
            roomName: "",
        };
    },
    methods: {
        closeModal() {
            const modal = document.getElementById("modal");
            modal.classList.remove("scale-100");
            this.roomName = "";
        },
        createRoom() {
            const user = this.$store.state.user;
            const payload = {
                roomName: this.roomName,
                user,
            };
            this.$socket.emit("createRoom", payload);
            this.closeModal();
        },
    },
};
</script>

<style>
</style>