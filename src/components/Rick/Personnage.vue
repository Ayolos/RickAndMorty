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
            <RouterLink @click="setDataInLocalStorage(dataCharacter)" v-if="dataCharacters" :to='"/location/" + getIdUrl()' class="card-link">more</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <pagination v-model="page" :records="42" :per-page="1" @paginate="getPage(page)" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import pagination from 'v-pagination-3';

export default defineComponent({
  props: {currentPage: String},
  components: {
    pagination
  },
  data: () => {
    return {
      dataCharacters: null,
      page: 1,
    };
  },
  mounted() {
    this.page = parseInt(this.currentPage)
    this.getPage(this.currentPage)
  },
  methods: {
    getDataCharacters(){
      axios
      .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
      .then((reponse) => {
        this.dataCharacters = reponse.data;
      }).catch(() => {
          this.$router.push("/404");
      });
    },

    getPage(pagen){
      this.getDataCharacters();
      this.$router.push("/personnage/" + pagen)
    },
    
    getIdUrl() {
      var id = this.dataCharacters.results[0].location.url.split("/");
      return id[id.length - 1];
    },
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
