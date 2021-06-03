<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg h-100">
        <div class="container-fluid">
            <div class="navbar-brand">TriviaSiks</div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul
                    class="navbar-nav me-auto mb-2 mb-lg-0"
                    v-if="$store.state.currentUser"
                >
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" @click.prevent="logout"
                            >Logout</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logout() {
            localStorage.clear()
            this.$store.commit('SET_CURRENT_USER', null)
            this.$router.push('/login')
        }
    }
}
</script>

<style></style>
