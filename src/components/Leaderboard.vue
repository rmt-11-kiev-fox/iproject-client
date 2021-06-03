<template>
    <div class="col-3">
        <div class="h-100 w-100 container">
            <div class="row text-center text-primary my-3">
                <h5>-- LEADERBOARD --</h5>
            </div>
            <div class="w-100 text-wrap text-break row text-danger text-center">
                <div class="col-3">Rank</div>
                <div class="col-5">Username</div>
                <div class="col-4">Points</div>
            </div>
            <div
                class="w-100 text-wrap text-break text-light text-center row"
                v-for="(user, i) in users"
                :key="i"
            >
                <div class="col-3">{{ i + 1 }}</div>
                <div class="col-5">
                    {{ user.username }}
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
