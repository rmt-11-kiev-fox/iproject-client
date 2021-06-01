<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
.slick-dots button:before {
    color: black !important; /* color of dots #ab8b00 */
}
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
    background-color: black;
    border-radius: 10px;
}

.slick-arrow.slick-prev:hover {
    background-color: gold;
    border-radius: 10px;
}
.slick-arrow.slick-next:hover {
    background-color: gold;
    border-radius: 10px;
}
.slick-arrow.slick-next::after {
    background-color: red;
    border-radius: 10px;
}
.slick-arrow.slick-prev::after {
    background-color: red;
    border-radius: 10px;
}
.slick-arrow.slick-next::before {
    background-color: black;
    border-radius: 10px;
}
.slick-arrow.slick-prev::before {
    background-color: black;
    border-radius: 10px;
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

