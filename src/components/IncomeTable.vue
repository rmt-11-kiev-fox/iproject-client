<template>
  <tbody class="table-secondary">
    <tr>
      <th scope="row"> {{ data.id }} </th>
      <td> {{ data.category }} </td>
      <td> {{ data.description }} </td>
      <td> Rp {{ moneyFormatted(data.amount) }},- </td>
      <td> {{ data.period }} </td>
      <td> {{ dateFormatted(data.updatedAt) }} </td>
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
    }
  }
}
</script>

<style>

</style>
