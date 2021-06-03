<template>
  <div class="container mt-2 p-2 overflow-auto" style="height: 74vh">
    <div class="pb-4">
      <table v-if="donations.length" class="table-sm" style="width: 1000px">
        <thead>
          <tr id="thead">
            <th>No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody v-for="(item, i) in donations" :key="i">
          <tr
            v-if="i >= offset * pageLimit && i < offset * pageLimit + pageLimit"
          >
            <td>{{ i + 1 }}</td>
            <td>
              {{ item.createdAt.split("T")[0] }}
            </td>
            <td>{{ item.organizationName }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.paymentType }}</td>
            <td>
              <a
                type="btn"
                @click="$router.push(`/checkout?id=${item.organizationName}`)"
                ><i class="fas fa-donate"></i>Donate</a
              >
            </td>
            <td>
              <!-- <a type="btn" @click="toEditProduct(item.id)"
                ><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i
              ></a> -->
            </td>
          </tr>
        </tbody>
      </table>

      <div class="float-right">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">&laquo;</a>
          </li>
          <li
            v-for="page in totalPage"
            :key="page"
            @click="offset = page - 1"
            class="page-item"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donation",
  data() {
    return {
      offset: 0,
    };
  },
  methods: {},
  computed: {
    donations() {
      return this.$store.state.donations;
    },
    totalPage() {
      return this.$store.state.totalPage;
    },
    pageLimit() {
      return this.$store.state.pageLimit;
    },
  },
  created() {
    this.$store.dispatch("fetchDonation");
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 30px;
  display: -ms-flexbox;
  display: flex;
  float: none;
  justify-content: center;
  list-style: none;
}


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
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;

}
td{
  background-color: white;
}

#thead {
  background-color: #bfc2b8
}
/* thead th:first-child {
  border-radius: 10px 0 0 10px;
}
thead th:last-child {
  border-radius: 0 10px 10px 0;
} */

</style>