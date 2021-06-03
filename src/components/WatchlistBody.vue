<template>
    <tbody>
        <tr v-for="(watchList, i) in watchLists" :key="i">
            <th scope="row">{{ i+1 }}</th>
            <td>
                <img :src="watchList.imageUrl" alt="" width="150px"></td>
            <td>{{watchList.title}}</td>
            <td width="140px">
                <a @click.prevent="deleteWatchList(watchList.id)" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i> Delete</a>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'WatchlictBody',
    props: [ 'watchLists' ],
    methods: {
        deleteWatchList(id) {
            this.$store.dispatch('deleteWatchList', id)
        }
    }

}
</script>

<style>

</style>