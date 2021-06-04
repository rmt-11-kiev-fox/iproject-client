<template>
  <tbody class="table-secondary">
    <tr>
      <th scope="row"> {{ data.id }} </th>
      <td> {{ data.category }} </td>
      <td> {{ data.description }} </td>
      <td>
        Rp {{ moneyFormatted(data.amount) }},-
        <a @click.prevent="updateExp(data.id)" class="btn"><i class="fas fa-pencil-alt"></i></a>
      </td>
      <td> {{ data.period }} </td>
      <td> {{ dateFormatted(data.updatedAt) }} </td>
      <td>
        <a class="btn btn-default btn-warning" @click.prevent="editExp(data.id)" >Edit</a>
        <a class="btn btn-default btn-danger" @click.prevent="deleteExp(data.id)" >Delete</a>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'ExpenseTable',
  props: ['data'],
  methods: {
    moneyFormatted (number) {
      return number.toLocaleString('id-ID')
    },
    dateFormatted (date) {
      const year = new Date(date).getFullYear()
      let month = new Date(date).getMonth() + 1
      let day = new Date(date).getDate()
      if (month < 10) month = `0${month}`
      if (day < 10) day = `0${day}`
      return `${year}/${month}/${day}`
    },
    deleteExp (id) {
      this.$store.dispatch('delExp', id)
    },
    editExp (id) {
      this.$store.dispatch('findExp', id)
      this.$router.push({ path: '/edit-expenses' })
    },
    updateExp (id) {
      this.$store.dispatch('findExp', id)
      this.$router.push({ path: '/update-expenses' })
    }
  }
}
</script>

<style>

</style>
