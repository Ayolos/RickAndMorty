<template>
  <div class="container">
    <div v-if="ricks" class="row">
      <div v-for="rick in ricks.results" :key="rick" class="col-sm-6 p-5 ">
        <div class="card h-100 bg-col">
          <img :src="rick.image" class="card-img-top" alt="..." />
          <div class="card-body bg-col">
            <h5 class="card-title">{{ rick.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-col">
              Status : <strong>{{ rick.status }}</strong>
            </li>
            <li class="list-group-item bg-col">
              Species : <strong>{{ rick.species }}</strong>
            </li>
            <li class="list-group-item bg-col">
              Gender : <strong>{{ rick.gender }}</strong>
            </li>
          </ul>
          <div class="card-body">
            <p href="#" class="card-link">Localisation : {{ rick.location.name }}</p>
            <RouterLink v-if="ricks" :to='"/location/" + get_id_url()' class="card-link">more</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <numPage v-if="ricks" :totalPages="ricks.info.pages"></numPage>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import numPage from "./NumPage.vue";

export default defineComponent({
  props: { page: String },
  components: {
    //acceuil,
    numPage,
  },
  data: () => {
    return {
      ricks: null,
      num: 0,
    };
  },
  mounted() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then((reponse) => {
        this.ricks = reponse.data;
      }).catch(() => {
          //this.$router.push("/404");
      });
  },
  methods: {
    fetchData(){
      axios
      .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
      .then((reponse) => {
        this.ricks = reponse.data;
      }).catch(() => {
          //this.$router.push("/404");
      });
    },
    get_id_url() {
      var id = this.ricks.results[0].location.url.split("/");
      return id[id.length - 1];
    }
  }
});
</script>

<style>
.bg-col{
  background-color:#e89ac7
}
</style>
