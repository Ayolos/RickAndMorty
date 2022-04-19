<template>
<!-- Simple composant qui affiche l'erreur 404 (Page innexistante) -->
<div class="card bg-light mb-3 mx-auto align-middle my-auto" style="max-width: 70rem; ">
  <div class="card-header">Erreur 404</div>
  <div class="card-body">
    <h5 class="card-title">La page rechercher n'existe pas</h5>
    <p class="card-text">Veuillez retourner a l'accueil.</p>
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
