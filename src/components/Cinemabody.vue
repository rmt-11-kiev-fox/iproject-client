<template>
    <div class="card-body col-md-3">
        <div class="card mb-3 m-3" style="width: 20vmax;">
            <h3 class="card-header">Cinema</h3>
            <img :src="cinema.image" alt="" srcset="">
            <div class="card-body">
                <p class="card-text text-danger">{{cinema.nama}}</p>
            </div>
            <div class="card-footer text-muted">
                Cinema
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cinemabody',
    props: [ 'cinema' ]

}
</script>

<style>

</style>