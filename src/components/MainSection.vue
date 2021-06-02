<template>
    <main class="h-full mx-3 rounded-xl mt-2">
        <h1 class="text-header">Live Rooms</h1>
        <!-- room cards -->
        <VueSlickCarousel
            v-if="rooms.length > 0"
            v-bind="settings"
            class="mx-10"
            id="vueSlickCarousel"
        >
            <RoomCard v-for="room in rooms" :key="room.roomId" :room="room" />
        </VueSlickCarousel>

        <div v-else>
            <VueSlickCarousel
                v-bind="settings"
                class="mx-10"
                id="vueSlickCarousel"
            >
                <div class="h-96 p-5 min-w-max">
                    <div
                        class="bg-white border-2 hover:bg-gray-100 rounded-xl h-full w-72 flex justify-center items-center group"
                        @click.prevent="createRoom"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-10 w-10 transform group-hover:scale-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
    </main>
</template>

<script>
import RoomCard from "../components/RoomCard";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    name: "MainSection",
    components: {
        VueSlickCarousel,
        RoomCard,
    },
    data() {
        return {
            settings: {
                dots: true,
                centerMode: true,
                // centerPadding: "20px",
                // focusOnSelect: true,
                // lazyLoad: "ondemand",
                infinite: true,
                slidesToShow: 4,
                swipeToSlide: true,
                speed: 500,
            },
        };
    },
    computed: {
        rooms() {
            return this.$store.state.rooms;
        },
    },
    methods: {
        createRoom() {
            const modal = document.getElementById("modal");
            modal.classList.add("scale-100");
        },
    },
    updated() {
        // console.log("masuk updatedddddddd");
        // const myEl = document.getElementById("vueSlickCarousel");
        // console.log(myEl);
        // myEl.destroy();
    },
};
</script>

<style>
</style>