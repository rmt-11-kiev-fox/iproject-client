<template>
  <div id="fecthdata">
    <div id="filterList">
      <div id="filter">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search By species
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('EX')"
                >Extinct</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('EW')"
                >Extinct in The Wild</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('CR')"
                >Critically Endangered</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('EN')"
                >Endangered</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('VU')"
                >Vulnerable</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('NT')"
                >Near Threatened</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('LC')"
                >Least Concern</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('DD')"
                >Data Deficient</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterBySpecies('NE')"
                >Not Evaluted</a
              >
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search By country
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('AF')"
                >Afghanistan</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('AL')"
                >Albania</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('DZ')"
                >Algeria</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('AQ')"
                >Antartica</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('AR')"
                >Argentina</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('AU')"
                >Australia</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('BH')"
                >Bahrain</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('BR')"
                >Brazil</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('CA')"
                >Canada</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('CN')"
                >China</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('CL')"
                >Chile</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('CG')"
                >Congo</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('EG')"
                >Egypt</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('FR')"
                >France</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('DE')"
                >Germany</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('GR')"
                >Yunani</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('HT')"
                >Haiti</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('IS')"
                >Iceland</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterByCountry('ID')"
                >Indonesia</a
              >
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search By Family
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('reef_building_corals')"
                >reef_building_corals</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('chameleons')"
                >chameleons</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('mammals')"
                >mammals</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('mangrove_plants')"
                >mangrove_plants</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('seagrasses')"
                >seagrasses</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('cycads')"
                >cycads</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('blennies')"
                >blennies</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('cone_snails')"
                >cone_snails</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('magnolias')"
                >magnolias</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('seasnakes')"
                >seasnakes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('fw_caridean_shrimps')"
                >fw_caridean_shrimps</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('fw_crayfish')"
                >fw_crayfish</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('tunas_and_billfishes')"
                >tunas_and_billfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('butterfly_fishes')"
                >butterfly_fishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('groupers')"
                >groupers</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('pufferfishes')"
                >pufferfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('surgeonfishes')"
                >surgeonfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('birds')"
                >birds</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('crocodiles_and_alligators')"
                >crocodiles_and_alligators</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('sharks_and_rays')"
                >sharks_and_rays</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('fw_crabs')"
                >fw_crabs</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('cacti')"
                >cacti</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('tarpons_and_ladyfishes')"
                >tarpons_and_ladyfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('sturgeons')"
                >sturgeons</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('angelfishes')"
                >angelfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('lobsters')"
                >lobsters</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('amphibians')"
                >amphibians</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('seabreams_porgies_picarels')"
                >seabreams_porgies_picarels</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('hagfishes')"
                >hagfishes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="filterbyKingdom('wrasses_and_parrotfishes')"
                >wrasses_and_parrotfishes</a
              >
            </li>
          </ul>
        </div>
        <ModalAddCard />
        <button
          class="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#ModalAdd"
        >
          Add card
        </button>
      </div>
    </div>

    <div id="showList-part">
      <div id="showList">
        <router-link to="/dashboard/table"><b>Table</b></router-link>
        |
        <router-link to="/dashboard/card"><b>Card</b></router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ModalAddCard from "./modalAddCard";
export default {
  name: "bodyDashboard",
  components: {
    ModalAddCard
  },
  methods: {
    filterBySpecies(value) {
      this.$store.dispatch("filterBySpecies", value);
    },
    filterByCountry(value) {
      this.$store.dispatch("filterByCountry", value);
    },
    filterbyKingdom(value) {
      this.$store.dispatch("filterbyKingdom", value);
    }
  }
};
</script>

<style>
#fecthdata {
  width: 100vw;
  height: 1300px;
  display: flex;
  flex-direction: row;
}
#filterList {
  width: 20vw;
  height: 100%;
  padding: 30px;
  border-right: 1px solid black;
}
#filter {
  width: auto;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#showList-part {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
#showList {
  width: 80%;
  height: 900px;
  padding-top: 30px;
  max-height: 91%;
  overflow-y: auto;
}
</style>
