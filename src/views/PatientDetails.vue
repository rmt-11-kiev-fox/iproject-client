<template>
    <div>
        <Navbar/>
        <section id="hero">            
            <!-- Patients Detail -->
            <div class="container mt-5">
                <h2>Patient details and diagnosis probability</h2>
                <form>
                  <div class="row">
                      <div class="col-6">
                        <div class="form-group mb-2">
                            <label for="first_name">First Name</label>
                            <input type="text" class="form-control" name="first_name" id="first_name" :value="patientDetails.data.first_name" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="last_name">Last Name</label>
                            <input type="text" class="form-control" name="last_name" id="last_name" :value="patientDetails.data.last_name" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="gender">Gender</label>
                            <input type="text" class="form-control" name="gender" id="last_name" :value="patientDetails.data.gender" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="gender">Age</label>
                            <input type="text" class="form-control" name="birth_year" id="birth_year" :value="getAge(patientDetails.data.birth_year)" required>
                        </div>
                    </div>
                    <div class="col-5">
                        <!-- DIAGNOSIS CARDS -->
                        <div v-if="patientDetails.diagnosis.length === 0" class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Sorry!</h5>
                                <h6 class="card-subtitle mb-2 text-muted">We couldn't diagnose the patient due to insufficient or misleading data</h6>
                            </div>
                        </div>
                        <DiagnosisCard
                        v-else
                        v-for="(diagnosis, index) in patientDetails.diagnosis" :key="index"
                        :diagnosis="diagnosis"
                        />
                    </div>
                </div>
            </form>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DiagnosisCard from '../components/DiagnosisCard'

export default {
  name: 'PatientDetail',
  components: {
    Navbar,
    DiagnosisCard
  },
  computed: {
      patientDetails () {
          return this.$store.state.patientDetails
      }
  }
}
</script>

<style>

</style>