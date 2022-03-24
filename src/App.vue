<template>
<navbar />
<RouterView />
</template>

<script>
//import acceuil from '@/components/Rick/Accueil.vue'
import navbar from '@/components/Rick/Navbar.vue'


export default {
  name: 'App',
  components: {
    //acceuil,
    navbar,
  }

}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #97ce4c
}
</style>