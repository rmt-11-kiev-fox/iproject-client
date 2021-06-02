<template>
    <div class="flex flex-col max-h-screen h-screen overflow-hidden">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    name: "App",
    components: { Navbar },
};
</script>

<style>
.slick-dots button:before {
    color: black !important; /* color of dots #ab8b00 */
}
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
    border-radius: 10px;
    color: #ea5455;
}

.slick-arrow.slick-prev:hover {
    border-radius: 10px;
    color: #ea5455;
}
.slick-arrow.slick-next:hover {
    border-radius: 10px;
    color: #ea5455;
}
.slick-arrow.slick-next::after {
    border-radius: 10px;
    color: #ea5455;
}
.slick-arrow.slick-prev::after {
    border-radius: 10px;
    color: #ea5455;
}
.slick-arrow.slick-next::before {
    border-radius: 10px;
    color: #ea5455;
}
.slick-arrow.slick-prev::before {
    border-radius: 10px;
    color: #ea5455;
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

