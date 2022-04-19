<template>
<!-- composant qui contient la barre de recherche -->
  <div class="justify-content-center input-group">
    <div class="form-outline" style="width: 40vh">
      <input v-model="name" placeholder="Search" type="search" id="form1" class="form-control" />
    </div>
    <!-- Quand on click sur le boutton chercher il envoie le contenue au composant parent -->
    <button @click="sendDataToParent(name)" type="button" class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      name: "",
    };
  },
  emits: ["update-data"],
  methods: {
    // fonction qui envoie une donnée au composant parents
    sendDataToParent(data) {
      this.$emit("update-data", data);
    },
  },
});
</script>
<style>
</style>
