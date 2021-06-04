<template>
    <div>
        <Navbar/>
        <section id="hero">
            <!-- Add Patients -->
            <div class="container mt-5">
                <h2>Add new patient</h2>
                <p>Please fill out the patient data</p>
                <form @submit.prevent="addPatient">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <input v-model="first_name" type="text" class="form-control" name="first_name" id="first_name" placeholder="Patient's First name" required>
                            </div>
                            <div class="form-group mt-2">
                                <input v-model="last_name" type="text" class="form-control" name="last_name" id="last_name" placeholder="Patient's Last Name" required>
                            </div>
                            <div class="form-group mt-2">
                                <select v-model="gender" class="form-select" aria-label="Default select example" required>
                                    <option selected disabled>Define the patient's gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div class="form-group mt-2">
                                <input v-model="birth_year" type="text" class="form-control" name="birth_year" id="birth_year" placeholder="Patient's Birth Year" required>
                            </div>
                            <button type="submit" class="btn btn-info text-white mt-3">Submit</button>
                        </div>
                        <div class="col-5">
                            <div class="form-group mb-2">
                                <select v-model="symptom1" class="form-select" aria-label="Default select example">
                                    <option selected disabled>Specify patient's symptom</option>
                                    <option v-for="symptom in symptoms" :key="symptom.id" :value="symptom.id">{{symptom.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <select v-if="showSymptom2" v-model="symptom2" class="form-select" aria-label="Default select example">
                                    <option selected disabled>Specify patient's symptom</option>
                                    <option v-for="symptom in symptoms" :key="symptom.id" :value="symptom.id">{{symptom.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <select v-if="showSymptom3" v-model="symptom3" class="form-select" aria-label="Default select example">
                                    <option selected disabled>Specify patient's symptom</option>
                                    <option v-for="symptom in symptoms" :key="symptom.id" :value="symptom.id">{{symptom.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <select v-if="showSymptom4" v-model="symptom4" class="form-select" aria-label="Default select example">
                                    <option selected disabled>Specify patient's symptom</option>
                                    <option v-for="symptom in symptoms" :key="symptom.id" :value="symptom.id">{{symptom.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <select v-if="showSymptom5" v-model="symptom5" class="form-select" aria-label="Default select example">
                                    <option selected disabled>Specify patient's symptom</option>
                                    <option v-for="symptom in symptoms" :key="symptom.id" :value="symptom.id">{{symptom.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-1">
                            <button @click.prevent="toggleSymptom2" type="button" class="btn btn-info text-white mb-2">
                            <i class="fas fa-plus"></i>
                            </button><br>
                            <button @click.prevent="toggleSymptom3" v-if="showSymptom2" type="button" class="btn btn-info text-white mb-2">
                            <i class="fas fa-plus"></i>
                            </button><br>
                            <button @click.prevent="toggleSymptom4" v-if="showSymptom3" type="button" class="btn btn-info text-white mb-2">
                            <i class="fas fa-plus"></i>
                            </button><br>
                            <button @click.prevent="toggleSymptom5" v-if="showSymptom4" type="button" class="btn btn-info text-white mb-2">
                            <i class="fas fa-plus"></i>
                            </button><br>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import itemTemplate from '../components/item-template'
import { VueSuggestion } from 'vue-suggestion';

export default {
  name: 'AddPatient',
  data () {
      return {
          first_name: '',
          last_name: '',
          gender: ``,
          birth_year: '',
          symptom1: '',
          symptom2: '',
          symptom3: '',
          symptom4: '',
          symptom5: '',
          showSymptom2: false,
          showSymptom3: false,
          showSymptom4: false,
          showSymptom5: false
      }
  },
  computed: {
    symptoms () {
        return this.$store.state.symptoms;
    }
  },
  methods: {
      toggleSymptom2 () {
          this.showSymptom2 = true
      },
      toggleSymptom3 () {
          this.showSymptom3 = true
      },
      toggleSymptom4 () {
          this.showSymptom4 = true
      },
      toggleSymptom5 () {
          this.showSymptom5 = true
      },
      addPatient () {
          const payload = {
              first_name: this.first_name,
              last_name: this.last_name,
              gender: this.gender,
              birth_year: this.birth_year,
              symptom1: this.symptom1,
              symptom2: this.symptom2,
              symptom3: this.symptom3,
              symptom4: this.symptom4,
              symptom5: this.symptom5
          }
          this.$store.dispatch('addPatient', payload)
      }
  },
  components: {
    Navbar,
    VueSuggestion
  },
  created () {
      this.$store.dispatch('fetchSymptoms')
  }
}
</script>

<style scope>

</style>