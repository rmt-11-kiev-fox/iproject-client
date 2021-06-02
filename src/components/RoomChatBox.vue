<template>
    <div class="flex flex-col m-2">
        <div
            class="mb-1 rounded-lg overflow-auto flex flex-col h-200 border-2 bg-white"
        >
            <h1 class="sticky top-0 text-center font-light border-b-2 mx-5">
                Chat Room
            </h1>
            <!-- user Chat -->
            <!-- 2 div, 1 for self 1 for other users -->
            <div class="user-others min-w-min">
                <img
                    class="h-12 w-12 rounded-full object-cover mr-4"
                    src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt=""
                />
                <p class="user-text-others">Hey what's up guys?</p>
            </div>
            <div class="user-self">
                <p class="user-text-self">nm hbu?</p>
                <img
                    class="h-12 w-12 rounded-full object-cover ml-4"
                    src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
                    alt=""
                />
            </div>
        </div>
        <form>
            <input
                class="w-full rounded-sm px-2 border-2 py-1 border-ch-peach outline-none"
                type="text"
                placeholder="Send a message"
            />
        </form>
    </div>
</template>

<script>
export default {
    name: "RoomChatBox",
};
</script>

<style>
</style>