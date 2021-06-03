<template>
  <div class="container mt-2 p-2 overflow-auto" style="height: 74vh">
    <div class="pb-4">
      <div class="m-4">
      <h1>{{ organizationData.charityName }}</h1>

      </div>
      <table class="table-sm border" style="width: 1000px">
        <tbody>
          <tr>
            <td>EIN</td>
            <td>{{ organizationData.ein }}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{{ organizationData.charityName }}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{ organizationData.city }}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{{ organizationData.state }}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{{ organizationData.category }}</td>
          </tr>
          <tr>
            <td>url</td>
            <td>{{ organizationData.url }}</td>
          </tr>
          <tr v-if="organizationData.missionStatement">
            <td>State</td>
            <td>{{ organizationData.missionStatement }}</td>
          </tr>
        </tbody>
      </table>
      <!-- <div>
      <router-link to="/profile/edit"
        ><a href="" class="btn">Edit Profile</a>
      </router-link>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizationDetails",
  computed: {
    organizationData() {
      return this.$store.state.organizationData;
    },
  },
  created() {
    const id = this.$route.params.id;
    console.log(id, ";ini params ");
    this.$store.dispatch("fetchOrganizationById", id);
  },
};
</script>

<style scoped>
table,
td,
th {
  /* border: 1px solid #ddd; */
  /* text-align: left; */
  /* background-color: white; */
  margin: 4rem;
  text-align: center;
  padding: 15px;
  /* font-weight: bold; */
  border: 1px solid black;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
}
/* 
#thead {
  border: 1px solid #deb3ad;
}
thead th:first-child {
  border-radius: 10px 0 0 10px;
}
thead th:last-child {
  border-radius: 0 10px 10px 0;
} */

.pagination {
  color: black;
}
</style>