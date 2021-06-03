<template>
    <div class="col-3">
        <div class="h-100 w-100 container mt-2">
            <div class="row text-center"><h5>=== LEADERBOARD ===</h5></div>
            <div class="w-100 text-wrap text-break row">
                <div class="col-2"></div>
                <div class="col-6">
                    <span>Username</span>
                </div>
                <div class="col-4">Points</div>
            </div>
            <div
                class="w-100 text-wrap text-break row"
                v-for="(user, i) in users"
                :key="i"
            >
                <div class="col-2">{{ i + 1 }}.</div>
                <div class="col-6">
                    <span class="text-primary"> {{ user.username }}</span>
                </div>
                <div class="col-4">{{ user.point }}</div>
            </div>
        </div>
        <!-- <div class="h-100 w-100 d-flex flex-column overflow-scroll">
            <div
                class="w-100 text-wrap text-break"
                v-for="(user, i) in users"
                :key="i"
            >
                <span class="text-primary"
                    >{{ i + 1 }}.) {{ user.username }}</span
                >, points:
                {{ user.point }}
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Leaderboard',
    computed: {
        users() {
            return this.$store.state.currentLeaderboard
        }
    },
    created() {
        this.$store.dispatch('fetchLeaderboard')
    }
}
</script>

<style></style>
