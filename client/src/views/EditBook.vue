<template>
  <div>
    <div class="container-fluid" >
      <div class="row" >
        <div class="col-12" style="margin-top: 11rem; margin-bottom: 5rem">
          <div class="card mx-auto" style="width: 40rem">
            <div class="card-body shadow">
              <h5 class="card-title">BOOK FORM</h5>
              <form @submit.prevent="addBooking">
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    v-model="booking.email"
                    type="email"
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Name</label>
                  <input
                  v-model="booking.name"
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlSelect1">People</label>
                  <select class="form-control my-3" id="exampleFormControlSelect1" v-model="booking.people">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlTextarea1"
                    >Notes</label
                  >
                  <textarea
                    v-model="booking.notes"
                    class="form-control my-3"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="e.g: Near Window, Smoking Area"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'EditBook',
  components: {
  },
  data () {
    return {
      booking: {
        id: this.$store.state.bookTemp.id,
        name: this.$store.state.bookTemp.name,
        email: this.$store.state.bookTemp.email,
        people: this.$store.state.bookTemp.people,
        notes: this.$store.state.bookTemp.notes
      }
    }
  },
  methods: {
    addBooking () {
      this.$store.dispatch('editBooking', this.booking)
    }
  }
}
</script>

<style>
</style>
