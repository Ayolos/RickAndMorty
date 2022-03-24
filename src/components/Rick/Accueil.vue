<template>
    <h3>PAGE ACCUEIL</h3>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data: () => {
    return {
      pokemon: [],
    };
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon", {}).then((reponse) => {
      this.pokemon = reponse.data;
    });
  },
});
</script>
