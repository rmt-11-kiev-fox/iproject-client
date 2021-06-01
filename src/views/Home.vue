<template>
    <div class="flex flex-col max-h-screen h-screen">
        <Navbar />
        <MainSection />
        <BottomSection />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import BottomSection from "../components/BottomSection";

export default {
    name: "Home",
    components: { Navbar, BottomSection, MainSection },
};
</script>

<style>
</style>