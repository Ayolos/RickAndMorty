<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded w-100">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <a class="navbar-brand me-5">
      <img
        src="https://logo-marque.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
        height="70"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-3 mb-lg-0">
        <li class="nav-item">
          <!-- router vers qui redirige vers le composant Accueil -->
          <RouterLink class="nav-link" to="/">Accueil</RouterLink>
        </li>
        <li class="nav-item">
          <!-- router vers qui redirige vers le composant Personnage -->
          <RouterLink class="nav-link" to="/personnage/1">Personnage</RouterLink>
        </li>
        <li class="nav-item">
          <!-- router vers qui redirige vers le composant Rechercher -->
          <RouterLink class="nav-link" to="/rechercher">Rechecher</RouterLink>
        </li>
      </ul>
      <!-- Left links --> 
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {page:Number},
  setup() {},
});
</script>
