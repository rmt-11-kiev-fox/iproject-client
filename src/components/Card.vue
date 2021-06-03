<template>
    <div class="card-body col-md-3">
        <div class="card mb-3 m-3" style="width: 20vmax;">
            <h3 class="card-header">Now Playing</h3>
            <img :src="nowPlaying.img" alt="" srcset="">
            <div class="card-body">
                <p class="card-text text-danger">{{nowPlaying.title}}</p>
            </div>
            <div class="card-body">
                <a :href="nowPlaying.url" class="card-link">Show Schedule</a>
                <a @click="watchList(nowPlaying.title)" class="card-link">Add Watch List</a>
            </div>
            <div class="card-footer text-muted">
                Now Playing
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: [ 'nowPlaying' ],
    methods: {
        watchList(title) {
            console.log(title, '<<<<<<< ini add cart');
            this.$store.dispatch('addToWatchlist', title)
        }
    }

}
</script>

<style>

</style>