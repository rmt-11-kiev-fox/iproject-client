<template>
    <div>
        <Navbar/>
        <section id="hero">
            <!-- Home -->
            <div class="container mt-5">
                <h2>Patients List</h2>
                <button @click.prevent="$router.push('/addPatient').catch(() => {})" class="btn btn-info text-white">Add Patient</button>
                <b-table striped hover :items="patients" :fields="fields">
                  <template #cell(actions)="row">
                      <b-button @click.prevent="examine(row.item.id)" class="btn btn-info text-white mx-1" size="sm">
                        <i class="fas fa-stethoscope"></i>
                      </b-button>
                      <b-button @click.prevent="deletePatient(row.item.id)" class="btn btn-danger mx-1" size="sm">
                        <i class="far fa-trash-alt"></i>
                      </b-button>
                  </template>
                </b-table>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      fields: ['first_name', 'last_name', 'gender', 'birth_year', 'actions']
    }
  },
  computed: {
    patients () {
      return this.$store.state.patients
    }
  },
  methods: {
    examine (patientId) {
      // console.log(patientId);
      this.$store.dispatch('examine', patientId)
    },
    deletePatient(patientId) {
      this.$store.dispatch('deletePatient', patientId)
    }
  },
  created () {
    this.$store.dispatch('fetchAllPatients')
  }
}
</script>
