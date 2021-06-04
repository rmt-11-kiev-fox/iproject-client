<template>
    <div class="col-3 h-100">
        <div class="h-100 w-100 container overflow-scroll border">
            <div class="text-center text-primary my-3">
                <h5>-- LEADERBOARD --</h5>
            </div>
            <div
                class="
                    w-100
                    text-wrap text-break text-danger text-center
                    d-flex
                "
            >
                <div class="w-20">Rank</div>
                <div class="w-40">Username</div>
                <div class="w-40">Points</div>
            </div>
            <div
                class="
                    w-100
                    text-wrap text-break text-light text-center
                    d-flex
                    my-1
                "
                v-for="(user, i) in users"
                :key="i"
            >
                <div class="w-20 mx-1">{{ i + 1 }}</div>
                <div class="w-40 mx-1">
                    {{ user.username }}
                </div>
                <div class="w-40 mx-1">{{ user.point }}</div>
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
