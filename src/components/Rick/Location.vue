<template>
  <ul class="list-group text-center" style="width: 50%">
    <li v-if="data" class="list-group-item disabled" aria-disabled="true">
      {{ data.name }}
    </li>
    <li v-if="data" class="list-group-item">{{ data.type }}</li>
    <li v-if="data" class="list-group-item">{{ data.dimension }}</li>
    <!--<li class="list-group-item">{{ getCharacter() }}</li>-->
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  props: { id: String },
  data: () => {
    return {
      data: null,
      allData: null,
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/location/" + this.id)
      .then((reponse) => {
        this.data = reponse.data;
      })
      .catch(() => {
        //this.$router.push("/404");
      });
  },
  methods: {
    getCharacter() {
      console.log(this.data);
    },
  },
});
</script>
