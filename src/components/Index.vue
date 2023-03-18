<template>
  <div class="index-box">
    <div class="nav">
      <Header></Header>
      <Nav></Nav>
    </div>
    <Container></Container>
  </div>
</template>

<script>
import Header from "./pages/Header.vue";
import Nav from "./pages/Nav.vue";
import Container from "./pages/Container.vue";

export default {
  name: "IndexPage",
  
  mounted() {
    this.$router.push({
      name: "OfficialNews",
    });
  },
  components: {
    Header,
    Nav,
    Container,
  },
};
</script>

<style scoped>
.index-box {
  width: 100%;
  height: 100%;
  display: flex;
}

.nav {
  width: 180px;
  height: 100%;
  box-shadow: 0 0 5px rgb(214, 214, 214);
}


</style>