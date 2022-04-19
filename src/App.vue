<template>
<navbar />
<RouterView />
</template>

<script>
import navbar from '@/components/Rick/Navbar.vue'

export default {
  name: 'App',
  components: {
    navbar,
  },
  mounted() {
    // initialise les données du localStorage
    this.$store.commit('initData', JSON.parse(localStorage.getItem('data')));
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