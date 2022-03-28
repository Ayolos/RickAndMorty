<template>
  <div>
    <barreDeRecherche @updateData="handleChildData" />
    <div class="container">
      <div v-if="data && !erreur" class="row">
        <div v-for="data in data.results" :key="data" class="col-sm-6 p-5">
          <div class="card h-100 bg-col">
            <img :src="data.image" class="card-img-top" alt="..." />
            <div class="card-body bg-col">
              <h5 class="card-title">{{ data.name }}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-col">
                Status : <strong>{{ data.status }}</strong>
              </li>
              <li class="list-group-item bg-col">
                Species : <strong>{{ data.species }}</strong>
              </li>
              <li class="list-group-item bg-col">
                Gender : <strong>{{ data.gender }}</strong>
              </li>
            </ul>
            <div class="card-body">
              <p href="#" class="card-link">Localisation : {{ data.location.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="erreur" style="margin: 70px">
        <Erreur />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import barreDeRecherche from "./BarreDeRecherche.vue"
import Erreur from "./Erreur.vue"

export default defineComponent({
  components: {
    barreDeRecherche,
    Erreur,
  },
  data() {
    return {
      nom: "",
      data: null,
      erreur: false,
    };
  },
  
   methods: {
    handleChildData(payload) {
      this.nom = payload;

    }
  },
   watch: {
    nom: function(newnom) {
      axios
        .get("https://rickandmortyapi.com/api/character/?name=" + newnom)
        .then((reponse) => {
          this.data = reponse.data;
          this.erreur = false;
        }).catch(() => {
            this.erreur = true;
        });
    },
  },
});
</script>
