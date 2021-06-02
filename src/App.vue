<template>
    <div>
        <!-- navbar -->
        <div style="height: 10vh">
            <Navbar />
        </div>
        <!-- router-view -->
        <div style="height: 78vh">
            <router-view />
        </div>
        <!-- hfooter -->
        <HFooter />
    </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv8-footer'

// import axios from './config/api'

export default {
    name: 'App',
    components: {
        Navbar,
        HFooter
    },
    created() {
        if (localStorage.access_token && localStorage.current_user) {
            this.$store.commit(
                'SET_CURRENT_USER',
                JSON.parse(localStorage.current_user)
            )
        }
    }
}
</script>

<style></style>
