<template>
    <div class="position">
        <input class="box-style" v-model="result" />
        <button @click="ajout">valider</button>
        <ul v-if="legumes.length>3">
            <li v-for="legume in legumes" :key="legume.id"> 
                {{ legume.value }}
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Box',
  data() {
      return {
          incr: 3,
          legumes: [{id:1, value: 'salade'}, {id:2, value: 'tomate'}],
          result: 'insérer',
      }
  },
  methods: {
      ajout() {
          this.legumes.push({id: this.incr++, value: this.result});
      }

  }
})

</script>
<style>
    .position {
        text-align: center;
    }

    .box-style {
        background-color: red;
    }
</style>