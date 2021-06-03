<template>
  <div>
    <div class="floating-button">
      <i class="fas fa-backspace icon"></i> Dashboard
    </div>
    <div class="chat-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"
export default {
  name: "Chat",
  data() {
    return {
    };
  },
 components:{
   Header,
   Footer,
   Body
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles.scss";
</style>
