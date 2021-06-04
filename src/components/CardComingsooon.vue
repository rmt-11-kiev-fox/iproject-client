<template>
    <div class="card-body col-md-3">
        <div class="card text-danger mb-3 m-3" style="width: 20vmax;">
            <h3 class="card-header">Coming Soon</h3>
            <img :src="comingSoon.img" alt="" srcset="">
            <div class="card-body">
                <p class="card-text text-danger">{{comingSoon.title}}</p>
            </div>
            <div class="card-body">
                <a :href="comingSoon.url" class="card-link">Show Schedule</a>
                <a href="#" class="card-link">Watch List</a>
            </div>
            <div class="card-footer text-danger">
                Coming Soon
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComingsoon',
    props: [ 'comingSoon' ]

}
</script>

<style>

</style>