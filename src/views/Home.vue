<template>
    <div
        class="flex flex-col max-h-screen h-screen overflow-hidden justify-between"
    >
        <!-- <Navbar /> -->
        <MainSection />
        <BottomSection />
    </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "../components/Navbar";

import MainSection from "../components/MainSection";
import BottomSection from "../components/BottomSection";

export default {
    name: "Home",
    components: { BottomSection, MainSection },
};
</script>

<style>
.badge-custom {
    @apply text-ch-peach bg-white text-lg font-extrabold mt-3 w-32 rounded-md rounded-l-none text-center;
}
.user-text-self {
    @apply text-lg font-light text-gray-800;
}
.user-text-others {
    @apply text-lg font-light text-white;
}
.user-self {
    @apply flex mr-3 mt-2 self-end items-center justify-end rounded-full bg-gray-300 w-1/2;
}
.user-others {
    @apply flex ml-3 mt-2 items-center self-start justify-start bg-ch-peach rounded-full w-1/2;
}
.text-header {
    @apply text-center font-semibold text-4xl mt-3 text-ch-peach;
}
</style>