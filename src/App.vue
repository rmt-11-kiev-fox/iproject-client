<template>
    <div><router-view /></div>
</template>

<script>
export default {
    name: "App",
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

