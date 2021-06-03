<template>
<div class="home">
    <!-- Navbar -->
    <Navbar/>

    <!-- Username -->
    <h4 class="d-flex text-light mt-4 mx-3">Welcome, {{userGreeting}}</h4>

    <!-- carousel -->
    <Carousel
    :comingSoons="comingSoons"
    />

    <!-- card -->
    <div class="container-fluid d-flex row wrap">
        <div class="row">
            <Card
            v-for="(nowPlaying, i) in nowPlayings" :key="i"
            :nowPlaying="nowPlaying"
            />
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Carousel from '../components/Carousel.vue'

export default {
    name: 'Home',
    data() {
        return {
            userGreeting: localStorage.username
        }
    },
    components: {
        Navbar,
        Card,
        Carousel
    },
    created() {
        this.$store.dispatch('fetchDataNowPlaying')
        this.$store.dispatch('fetchDataComingSoon')
    },
    computed: {
        nowPlayings() {
            console.log(this.$store.state.nowPlayings, '<<<< ini data now playing di home');
            return this.$store.state.nowPlayings
        },
        comingSoons() {
            console.log(this.$store.state.comingSoons, '<<<< ini data coming soon di home');
            return this.$store.state.comingSoons
        }
    }

}
</script>
