<template>
  <div>
    <Navbar />
    <div id="contact">
      <div id="form">
        <div id="form-1">
          <div class="mb-3">
            <label class="form-label">Username / Email</label>
            <input
              type="text"
              v-model="user"
              class="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Message</label
            >
            <textarea
              class="form-control"
              rows="3"
              v-model="textMsg"
            ></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-dark" @click="sendMsgData">Submit</button>
          </div>
        </div>
      </div>
      <div id="box-card">
        <div id="card" v-for="(el, i) in aboutMsg" :key="i">
          <h3>{{ el.user }}</h3>
          <hr />
          <span>{{ el.msg }}</span
          ><br />
          <hr />
          <span style="float:right;">{{
            new Date(el.createdAt).toDateString()
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbarGeneral";
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: "",
      textMsg: ""
    };
  },
  components: {
    Navbar
  },
  methods: {
    sendMsgData() {
      let input = {
        user: this.user,
        message: this.textMsg
      };
      this.$store.dispatch("sendMsgData", input);
    },
    readMsg() {
      this.$store.dispatch("readMsg");
    }
  },
  computed: mapState({
    aboutMsg: "aboutMsg"
  }),
  created() {
    this.$store.dispatch("readMsg");
  }
};
</script>

<style>
#contact {
  width: 98.5vw;
  height: 1000px;
  background-color: red;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#form {
  width: 80%;
  height: auto;
}

#box-card {
  width: 60%;
  height: auto;
  max-height: 92%;
  overflow-y: auto;
}

#form-1 {
  width: 900px;
}

#card {
  width: 500px;
  background-color: whitesmoke;
  border-radius: 0px 50px 0px 50px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
