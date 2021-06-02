<template>
    <li class="bg-white flex mt-1 border-b-2 pb-1">
        <img class="h-14 w-14 rounded-full" :src="song.imageUrl" alt="" />
        <div class="my-auto ml-4">
            <h4 class="font-bold text-gray-800 text-lg">{{ song.title }}</h4>
            <h5 class="font-light text-gray-700">{{ song.channelTitle }}</h5>
        </div>
    </li>
</template>

<script>
export default {
    name: "RoomCardSong",
    props: ["song"],
};
</script>

<style>
</style>