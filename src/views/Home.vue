<template>
    <div class="flex flex-col max-h-screen h-screen">
        <Navbar />
        <main class="h-1/2 mx-3 bg-ch-orange rounded-xl mt-3">
            <h1 class="text-center font-extralight text-4xl mt-3">
                Live Rooms
            </h1>
            <!-- room cards -->
            <VueSlickCarousel v-bind="settings" class="mx-10">
                <RoomCard v-for="index in 4" :key="index" :index="index" />
            </VueSlickCarousel>
        </main>
        <section class="bg-gray-400 h-2/5 rounded-xl m-3 mt-7 grid grid-cols-2">
            <!-- Users Logged In -->
            <div class="m-5 bg-gray-300 rounded-lg overflow-auto h-1/2">
                <h1 class="text-ch-peach text-lg font-extrabold m-3 mb-0">
                    Users Online
                </h1>
                <div class="grid grid-cols-2 m-3 mt-0">
                    <!-- Loop logged in users -->
                    <LobbyUser v-for="index in 15" :key="index" />
                </div>
                <!-- <div class="absolute bottom-0 m-3">Guests Online: 0</div> -->
            </div>

            <!-- Lobby Chat -->
            <div class="m-5 bg-gray-300 rounded-lg h-1/2">
                <h1 class="text-ch-peach text-lg font-extrabold m-3 mb-0">
                    Lobby Chat
                </h1>
                <div class="flex flex-col h-full m-2">
                    <div class="bg-white h-3/4 mb-1 rounded-lg overflow-scroll">
                        <!-- user Chat -->
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                        <div class="flex ml-3 mt-2">
                            <h5>aldosupercoolman: .</h5>
                            <p>Hey what's up guys?</p>
                        </div>
                    </div>
                    <form>
                        <input class="w-full rounded-sm px-2" type="text" />
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import LobbyUser from "../components/LobbyUser";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    name: "Home",
    components: { Navbar, RoomCard, VueSlickCarousel, LobbyUser },
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
.slick-dots button:before {
    color: white !important; /* color of dots */
}
*::-webkit-scrollbar-thumb {
    background-color: #ea5455;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
}

*::-webkit-scrollbar {
    width: 16px;
}
</style>