<template>
  <div
    class="modal fade"
    id="ModalAdd"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Add New Species need conservation
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addCardSpecies">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input v-model="name" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Img_url</label>
              <input v-model="imgUrl" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Kingdom</label>
              <input v-model="kingdom" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Habitat</label>
              <input v-model="habitat" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Region</label>
              <input v-model="region" type="text" class="form-control" />
            </div>

            <select v-model="status" id="cars" class="form-control">
              <option value="Ex">Extinct</option>
              <option value="EW">Extinct in The Wild</option>
              <option value="CR">Critically Endangered</option>
              <option value="EN">Endangered</option>
              <option value="VU">Vulnerable</option>
              <option value="NT">Near Threatened</option>
              <option value="LC">Least Concern</option>
              <option value="DD">Data Deficient</option>
              <option value="DD">Not Evaluted</option>
            </select>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click.prevent="addCardSpecies"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      imgUrl: "",
      kingdom: "",
      habitat: "",
      region: "",
      status: ""
    };
  },
  methods: {
    addCardSpecies() {
      const payload = {
        name: this.name,
        imgUrl: this.imgUrl,
        kingdom: this.kingdom,
        habitat: this.habitat,
        region: this.region,
        status: this.status
      };
      this.$store.dispatch("addCardSpecies", payload);
      //   console.log(payload);
    }
  }
};
</script>

<style></style>
