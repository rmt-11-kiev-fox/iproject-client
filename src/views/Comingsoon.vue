<template>
<div>
    <!-- navbar -->
    <Navbar/>

    <!-- coming soon card -->
    <div class="container-fluid d-flex row wrap">
        <div class="row">
            <ComingSoon
            v-for="(comingSoon, i) in comingSoons" :key="i"
            :comingSoon="comingSoon"
            />
        </div>
    </div>
</div>
    
</template>

<script>
import ComingSoon from '../components/CardComingsooon.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Comingsoon',
    components: {
        ComingSoon,
        Navbar
    },
    created() {
        this.$store.dispatch('fetchDataComingSoon')
    },
    computed: {
        comingSoons() {
            console.log(this.$store.state.comingSoons, '<<<< ini data coming soon di home');
            return this.$store.state.comingSoons
        }
    }

}
</script>

<style>

</style>