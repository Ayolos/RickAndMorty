<template>
  <div>
    <div class="container bg-yel">
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
          <!-- si il n'a pas de donnée dans dataLocation il ne l'affiche pas -->
          <h1 v-if="dataLocation" class="display-4">{{ dataLocation.name }}</h1>
          <h3>Information</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <ul class="list-group text-center" style="width: 100%">
          <!-- si il n'a pas de donnée dans dataLocation il ne l'affiche pas -->
          <li v-if="dataLocation" class="list-group-item">
            {{ dataLocation.type }}
          </li>
          <!-- si il n'a pas de donnée dans dataLocation il ne l'affiche pas -->
          <li v-if="dataLocation" class="list-group-item">
            {{ dataLocation.dimension }}
          </li>
        </ul>
      </div>
      <h1 class="text-center"><u>Résident :</u></h1>
      <!-- si il n'a pas de donnée dans dataCharaters il ne l'affiche pas -->
      <div v-if="dataCharacters" class="row justify-content-md-center">
        <div v-for="dataCharacter in dataCharacters" :key="dataCharacter" class="col-sm-4 p-2">
          <div class="card h-100 bg-col w-100" style="width: 18rem;">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  // récupère l'id de l'url
  props: { id: String },
  data: () => {
    return {
      // récupère les informations de la Location
      dataLocation: null,
      // récupère les informations des peronnages
      dataCharacters: null,
      // liste tout les id des personnages que l'on a besoin de rechercher
      list: [],
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/location/" + this.id)
      .then((reponse) => {
        this.dataLocation = reponse.data;
        this.getDataCharacter();
      })
      .catch(() => {
        // si il ne trouve pas les données envoie une erreur
        this.$router.push("/404");
      });
  },
  methods: {
    // fonction qui ajoute les id des personnages dans la liste
    getCharacter() {
      var urlPerso = this.dataLocation.residents;
      for (var i = 0; i < urlPerso.length; i++) {
        var tmp = urlPerso[i].split("/");
        this.list.push(tmp[tmp.length - 1]);
      }
      return this.list;
    },
    getDataCharacter() {
      var listId = this.getCharacter();
      axios
        .get("https://rickandmortyapi.com/api/character/" + listId)
        .then((reponse) => {
          this.dataCharacters = reponse.data;
        });
    },
  },
});
</script>

<style>
.bg-yel {
  margin-top: 10px;
  background-color: #f0e14a;
  border-radius: 10px;
}

.bg-marron {
  background-color: #e4a788;
}

</style>