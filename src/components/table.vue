<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">taxonid</th>
        <th scope="col">scientific_name</th>
        <th scope="col">subspecies</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(el, i) in dataFilter" :key="i">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ el.taxonid }}</td>
        <td>
          <a
            :href="
              'http://apiv3.iucnredlist.org/api/v3/taxonredirect/' + el.taxonid
            "
            >{{ el.scientific_name }}</a
          >
        </td>
        <td>{{ el.subspecies }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
import axios from "../config/axios.js";
export default {
  name: "table",
  computed: mapState({
    dataFilter: "dataSpecies"
  }),
  methods: {
    webLink(value) {
      const url = `http://apiv3.iucnredlist.org/api/v3/taxonredirect/${value}`;
      axios.get(url);
    }
  }
};
</script>

<style></style>
