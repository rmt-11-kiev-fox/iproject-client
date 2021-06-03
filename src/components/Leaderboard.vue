<template>
    <div class="col-3">
        <div class="h-100 w-100 d-flex flex-column overflow-scroll">
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
        </div>
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
