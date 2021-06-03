<template>
  <div id="about">
    <Navbar />
    <div class="row" id="myProfil">
      <div id="imgProfil">
        <img id="myImgProfil" src="../assets/myPhoto.jpg" alt="" />
      </div>
      <div id="dataProfil">
        <h1>Creator: M. Yustanzah.Q</h1>
        <p>Tempat/tanggal lahir: Tanjung Pandan, 27 Januari 1997</p>
        <p>Hobby: Futsal, ngoding, mancing</p>
        <p>Quotes: "Orang hebat adalah orang yang bangun pagi lebih awal"</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbarGeneral";
export default {
  nama: "about",
  components: {
    Navbar
  }
};
</script>

<style>
#myProfil {
  height: 800px;
  width: 100%;
  padding: 20px;
}

#imgProfil {
  width: 400px;
  height: 700px;
}
#myImgProfil {
  width: 26vw;
  height: auto;
  border-radius: 40px;
}
#dataProfil {
  width: 500px;
  height: 400px;
  background-color: blanchedalmond;
  border-radius: 10px;
  padding: 20px;
}
</style>
