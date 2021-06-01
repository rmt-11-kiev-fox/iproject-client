<template>
    <main class="h-1/2 mx-3 bg-ch-orange rounded-xl mt-3">
        <h1 class="text-center font-extralight text-4xl mt-3">Live Rooms</h1>
        <!-- room cards -->
        <VueSlickCarousel v-bind="settings" class="mx-10">
            <RoomCard v-for="index in 4" :key="index" :index="index" />
        </VueSlickCarousel>
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
                infinite: true,
                slidesToShow: 3,
                swipeToSlide: true,
                speed: 500,
            },
        };
    },
};
</script>

<style>
</style>