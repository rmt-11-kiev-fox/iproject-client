<template>
  <div class="row" id="cardList">
    <div
      id="cardDisplay"
      class="card"
      style="width: 18rem;"
      v-for="(el, i) in dataNewCard"
      :key="i"
    >
      <img :src="el.img_url" class="card-img-top" id="img" />
      <div class="card-body">
        <h5 class="card-title">Name : {{ el.name }}</h5>
        <p class="card-text">Kingdom : {{ el.kingdom }}</p>
        <span>Habitat: {{ el.habitat }}</span
        ><br />
        <hr />
        <span>Region: {{ el.region }}</span
        ><br />
        <hr />
        <div class="row">
          <span>Status: {{ el.status }}</span>
          <button class="btn btn-primary btn-sm" @click="deleteItem(el.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import { mapState } from "vuex";
export default {
  name: "card",
  methods: {
    displayCard() {
      this.$store.dispatch("displayCard");
    },
    deleteItem(value) {
      this.$store
        .dispatch("deleteItem", value)
        .then(data => {
          swal("Good job!", "Success Delete", "success", {
            button: "OK!"
          });
          this.displayCard();
        })
        .catch(err => {
          swal("Incorrect!", "Somethink wrong, please try again", "error", {
            button: "OK!"
          });
        });
    }
  },
  computed: mapState({
    dataNewCard: "dataNewSpeciesEx"
  }),
  created() {
    this.displayCard();
  }
};
</script>

<style>
#cardDisplay {
  margin: 10px;
}
#img {
  width: 250px;
  height: 250px;
}
</style>
