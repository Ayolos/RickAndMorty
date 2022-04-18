<template>
  <div class="row">
    <div v-for="data in getElementsInLocalStorage" :key="data" class="col-sm-4 p-2">
      <div class="card" style="max-width: 20rem">
        <img class="card-img-top" :src="data.image" alt="Card image cap" />
        <div class="text-center card-img-overlay card-body text-black rgba-black-light p-2">
          <button @click="removeElementsInLocalStorage(data)" type="button" class="btn-close" aria-label="Close"></button>
          <h1>{{ data.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    // fonctions qui permet d'executer la mutation getData
    getElementsInLocalStorage() {
      return this.$store.getters.getData;
    },
  },
  methods: {
    // fonctions qui permet d'executer la mutation removeData
    removeElementsInLocalStorage(element) {
      this.$store.commit("removeData", element);
    },
  },
});
</script>
