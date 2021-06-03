<template>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
        <div class="container-fluid">
            <a class="navbar-brand text-danger"><i class="fas fa-film"></i> Ted's Cinema</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" @click="$router.push('/').catch(() => {})"><i class="fas fa-home"></i> Home
                        <span class="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="$router.push('/cinemas').catch(() => {})"><i class="fas fa-video"></i> Cinema</a>
                    </li>
                </ul>
                <!-- <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fas fa-search"></i>Search</button>
                </form> -->
                <button @click="$router.push('/watchLists').catch(() => {})" class="btn btn-outline-warning mx-2" type="submit"><i class="fas fa-heart"></i> Watch List</button>
                <button @click="clickLogout()" class="btn btn-outline-danger mx-2" type="submit"><i class="fas fa-sign-out-alt"></i> Logout</button>
            </div>
        </div>
    </nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'Navbar',
    methods: {
        clickLogout() {
            localStorage.clear()
            this.$router.push('/login')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })

                Toast.fire({
                icon: 'success',
                title: 'Logged out successfully'
                })
        }
    }

}
</script>

<style>

</style>