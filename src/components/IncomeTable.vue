<template>
  <tbody class="table-secondary">
    <tr>
      <th scope="row"> {{ data.id }} </th>
      <td> {{ data.category }} </td>
      <td> {{ data.description }} </td>
      <td>
        Rp {{ moneyFormatted(data.amount) }},-
        <a @click.prevent="updateInc(data.id)" class="btn"><i class="fas fa-pencil-alt"></i></a>
      </td>
      <td> {{ data.period }} </td>
      <td> {{ dateFormatted(data.updatedAt) }} </td>
      <td>
        <a class="btn btn-default btn-warning" @click.prevent="editInc(data.id)" >Edit</a>
        <a class="btn btn-default btn-danger" @click.prevent="deleteInc(data.id)" >Delete</a>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'IncomeTable',
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
    deleteInc (id) {
      this.$store.dispatch('delInc', id)
    },
    editInc (id) {
      this.$store.dispatch('findInc', id)
      this.$router.push({ path: '/edit-income' })
    },
    updateInc (id) {
      this.$store.dispatch('findInc', id)
      this.$router.push({ path: '/update-income' })
    }
  }
}
</script>

<style>

</style>
