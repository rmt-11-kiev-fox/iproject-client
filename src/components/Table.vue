<template>
  <tr>
    <th scope="row">{{index + 1}}</th>
    <td>{{col.name}}</td>
    <td>{{col.address}}</td>
    <td>{{col.date}}</td>
    <td>{{col.notes}}</td>
  </tr>
</template>

<script>
export default {
  name: 'Table',
  props: ['index', 'col']
}
</script>

<style>

</style>
