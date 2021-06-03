<template>
    <div>
        <!-- navbar -->
        <Navbar/>

        <!-- coming soon card -->
        <div class="container-fluid d-flex row wrap">
            <div class="row">
                <CinemaBody
                v-for="(cinema, i) in cinemas" :key="i"
                :cinema="cinema"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CinemaBody from '../components/Cinemabody.vue'
export default {
    name: 'Cinema',
    components: {
        Navbar,
        CinemaBody
    },
    created() {
        this.$store.dispatch('fetchDataCinema')
    },
    computed: {
        cinemas() {
            console.log(this.$store.state.cinemas, '<<<< ini data coming soon di home');
            return this.$store.state.cinemas
        }
    }

}
</script>

<style>

</style>