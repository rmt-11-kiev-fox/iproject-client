<template>
    <div class="">
        <Navbar />
        <div>
            <h1 class="text-header">Relax and chill beats</h1>
            <h5 class="font-light text-lg text-center">
                Aldosupercoolman's room
            </h5>
        </div>
        <!-- "https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1"  SUPER LINK-->
        <div class="grid grid-cols-2">
            <iframe
                id="ytplayer"
                type="text/html"
                height="720"
                class="w-full p-4"
                src="https://www.youtube.com/embed/TUVcZfQe-Kw?autoplay=1&origin=http://localhost:8080&controls=0&fs=0&iv_load_policy=3&modestbranding=1"
                frameborder="0"
            ></iframe>
            <div class="grid grid-cols-2">
                <!-- Ini Queue Songs -->
                <div>
                    <h1>Queued Songs</h1>
                </div>

                <!-- Chat Box -->
                <div class="flex flex-col m-2">
                    <div
                        class="bg-gray-400 mb-1 rounded-lg overflow-scroll flex flex-col"
                    >
                        <!-- user Chat -->
                        <!-- 2 div, 1 for self 1 for other users -->
                        <div class="user-self">
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">Hey what's up guys?</p>
                        </div>
                        <div class="user-others bg-gray-300">
                            <!-- <h5></h5> -->
                            <p class="user-text font-medium text-gray-800">
                                nm hbu?
                            </p>
                            <img
                                class="h-12 w-12 rounded-full object-cover ml-4"
                                src="https://images.unsplash.com/photo-1590820225605-fe14606ee40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                        <div
                            class="flex ml-3 mt-2 items-center justify-start bg-ch-peach rounded-full w-1/2"
                        >
                            <img
                                class="h-12 w-12 rounded-full object-cover mr-4"
                                src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                alt=""
                            />
                            <!-- <h5></h5> -->
                            <p class="user-text">I'm good thanks!</p>
                        </div>
                    </div>
                    <form>
                        <input
                            class="w-full rounded-sm px-2 border-2"
                            type="text"
                            placeholder="Send a message"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
    name: "Room",
    components: { Navbar },
};
</script>

<style>
</style>