<template>
  <div>
    <form class="form-inline">
      <input
        v-model="nom"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    <p v-if="data">{{ chercherNom }}</p>
    <div class="container">
    <div v-if="data" class="row">
      <div v-for="data in chercherNom.results" :key="data" class="col-sm-6 p-5 ">
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
  </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      nom: "",
      data: null,
    };
  },
  computed: {
    chercherNom() {
        return this.getData()
    },
  },
  methods: {
      getData(){
          axios
      .get("https://rickandmortyapi.com/api/character/?name=" + this.nom)
      .then((reponse) => {
        this.data = reponse.data;
        console.log(this.data)
      })
      }
  }
});
</script>
