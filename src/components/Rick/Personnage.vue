<template>
  <div class="container">
    <div v-if="dataCharacters" class="row">
      <div v-for="dataCharacter in dataCharacters.results" :key="dataCharacter" class="col-sm-6 p-5 ">
        <div class="card h-100 bg-col">
          <img :src="dataCharacter.image" class="card-img-top" alt="..." />
          <div class="card-body bg-col">
            <h5 class="card-title">{{ dataCharacter.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-col">
              Status : <strong>{{ dataCharacter.status }}</strong>
            </li>
            <li class="list-group-item bg-col">
              Species : <strong>{{ dataCharacter.species }}</strong>
            </li>
            <li class="list-group-item bg-col">
              Gender : <strong>{{ dataCharacter.gender }}</strong>
            </li>
          </ul>
          <div class="card-body">
            <p href="#" class="card-link">Localisation : {{ dataCharacter.location.name }}</p>
            <!-- Router qui redirige vers la page de localisation correspondant au personnage et ajoute au localSotrage les infos du personnage (permet de faire un système de consultation récemment -->
            <RouterLink @click="setDataInLocalStorage(dataCharacter)" v-if="dataCharacters" :to='"/location/" + getIdUrl()' class="card-link">more</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- composant qui permet de créer la pagination -->
    <pagination v-model="page" :records="42" :per-page="1" @paginate="getPage(page)" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import pagination from 'v-pagination-3';

export default defineComponent({
  // Recupère l'id de la page du personnage
  props: {currentPage: String},
  components: {
    // Composant de pagination installer avec NPM
    pagination
  },
  data: () => {
    return {
      // variable qui contients les données de tout les personnages de l'API
      dataCharacters: null,
      page: 1,
    };
  },
  mounted() {

    this.page = parseInt(this.currentPage)
    this.getPage(this.currentPage)
  },
  methods: {
    // récupère les infos des personnages
    getDataCharacters(){
      axios
      .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
      .then((reponse) => {
        this.dataCharacters = reponse.data;
      }).catch(() => {
          this.$router.push("/404");
      });
    },
    getPage(page){
      this.getDataCharacters();
      this.$router.push("/personnage/" + page)
    },
    // split l'url pour récupérer l'id
    getIdUrl() {
      var id = this.dataCharacters.results[0].location.url.split("/");
      return id[id.length - 1];
    },
    // envoie les données au localStorage
    setDataInLocalStorage(data){
      this.$store.commit('setData', data);
    }
  }
});
</script>

<style>
.bg-col{
  background-color:#e89ac7
}

.pagination {
  display: flex;
  justify-content: center;
}

nav{
  display: flex;
  justify-content: center;
}
</style>
