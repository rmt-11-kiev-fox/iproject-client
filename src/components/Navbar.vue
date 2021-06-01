<template>
    <div
        class="grid grid-cols-3 bg-ch-peach h-16 max-h-16 rounded-full mx-3 mt-3"
    >
        <div class="self-center pl-5 h-16">
            <div class="h-full flex items-center">
                <span>What's up Dragon!</span>
                <span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 ml-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        /></svg
                ></span>
            </div>
        </div>
        <div class="h-16 self-center flex items-center justify-self-center">
            <img src="../assets/logo.png" class="h-3/4" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
</style>