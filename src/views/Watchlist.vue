<template>
<div class="mb-5">
    <!-- navbar -->
    <Navbar/>
    
    <!-- table -->
    <div class="container col-sm-12 py-5">
        <table class="table table-hover table-dark table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
                <WatchlistBody
                :watchLists="watchLists"
                />
            <!-- <tbody>
            </tbody> -->
        </table>
    </div>
</div>
</template>

<script>
import WatchlistBody from '../components/WatchlistBody.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Watchlist',
    components: {
        WatchlistBody,
        Navbar
    },
    created() {
        this.$store.dispatch('fetchDataWatchlist')
    },
    computed: {
        watchLists() {
            return this.$store.state.watchLists
        }
    }

}
</script>

<style scoped>

</style>