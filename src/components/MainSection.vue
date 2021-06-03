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

        <div v-else class="flex items-center justify-center mt-24">
            <h1 class="font-light text-2xl">
                It's wayyyy too quiet here! Create a new room now!
            </h1>
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