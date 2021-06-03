<template>
    <tbody>
        <tr v-for="(watchList, i) in watchLists" :key="i">
            <th scope="row">{{ i+1 }}</th>
            <td>
                <img :src="watchList.imageUrl" alt="" width="150px"></td>
            <td>{{watchList.title}}</td>
            <td width="140px">
                <a @click.prevent="deleteWatchList()" class="btn btn-danger"><i class="fas fa-trash-alt"></i> Delete</a>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'WatchlictBody',
    props: [ 'watchLists' ]

}
</script>

<style>

</style>