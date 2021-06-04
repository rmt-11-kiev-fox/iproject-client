<template>
  <tbody class="table-secondary">
    <tr>
      <th scope="row">{{data.exchange}}</th>
      <td> {{ data.quoteType }} </td>
      <td> {{ data.symbol }} </td>
      <td> {{ data.shortname }} </td>
      <td> {{ data.longname }} </td>
      <td> {{ data.score }} </td>
      <!-- <td> <a @click.prevent="toEdit(product.id)" class="btn btn-warning"> Edit </a> <a @click.prevent="toDelete(product.id)" class="btn btn-danger"> Delete </a> </td> -->
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'Table',
  props: ['data']
}
</script>

<style>

</style>
