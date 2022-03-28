<template>
  <div>
    <div class="container bg-yel">
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-center">
          <h1 v-if="dataLocation" class="display-4">{{ dataLocation.name }}</h1>
          <h3>Information</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <ul class="list-group text-center" style="width: 100%">
          <li v-if="dataLocation" class="list-group-item">
            {{ dataLocation.type }}
          </li>
          <li v-if="dataLocation" class="list-group-item">
            {{ dataLocation.dimension }}
          </li>
        </ul>
      </div>
      <h1 class="text-center"><u>Résident :</u></h1>
      <div v-if="dataPerso" class="row justify-content-md-center">
        <div v-for="data in dataPerso" :key="data" class="col-sm-4 p-2">
          <div class="card h-100 bg-col w-100" style="width: 18rem;">
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
  props: { id: String },
  data: () => {
    return {
      dataLocation: null,
      dataPerso: null,
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
        //this.$router.push("/404");
      });
  },
  methods: {
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
      console.log();
      axios
        .get("https://rickandmortyapi.com/api/character/" + listId)
        .then((reponse) => {
          this.dataPerso = reponse.data;
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

.card-img-top {
    border-radius: 10px;
}
</style>