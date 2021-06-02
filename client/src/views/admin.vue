<template>
  <div >
      <div class="container my-5">
          <div class="card mx-auto px-3 py-5" style="width: 80rem; margin-top: 7rem; margin-bottom:11.45rem; padding-top: 2rem;">
            <div class="card-body">
              <h5 class="card-title text-center" style="padding-bottom: 3rem">BOOKING LIST</h5>
              <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">People</th>
          <th scope="col">Notes</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody v-for="(booking, i) in this.$store.state.bookings" :key="booking.id" :booking="booking">
        <tr>
          <th scope="row">{{i+1}}</th>
          <td>{{ booking.name }}</td>
          <td>{{ booking.email }}</td>
          <td>{{ booking.people }}</td>
          <td>{{ booking.notes }}</td>
          <td>
              <a
              href="#"
              class="btn mx-2"
              style="background-color: #b98853; color: snow"
              >Edit</a
            >
            <a
              @click="deleteBooking (booking.id)"
              href="#"
              class="btn mx-2"
              style="background-color: #b98853; color: snow"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
              </table>
              <a
              @click="logout"
              class="btn mx-2"
              style="background-color: #b98853; color: snow"
              >Logout</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import router from '../router/index'

export default {
  name: 'Admin',
  methods: {
    logout () {
      localStorage.clear()
      router.push('/login')
    },
    deleteBooking (bookingId) {
      this.$store.dispatch('deleteBooking', bookingId)
    }
  },
  computed: {
    fetchBookings () {
      return this.$store.dispatch('fetchBookings')
    }
  },
  created () {
    this.$store.dispatch('fetchBookings')
  }
}
</script>

<style>
</style>
