<template>
  <div class="container d-flex">
            <div class="row">
                <div class="col-4" v-for="genre in $store.state.dataHome.querySearch" :key="genre.id">
                    <iframe :src="`https://open.spotify.com/embed/track/${genre.query}`" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" class="mx-2 my-2"></iframe>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'DataPlay'
}
</script>
