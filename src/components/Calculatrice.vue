<template>
    <EcranCalculatrice />
    <BoutonCalculatrice @updateData="handleChildData" />
</template>

<script>
import { defineComponent } from 'vue';
import BoutonCalculatrice from './BoutonCalculatrice.vue';
import EcranCalculatrice from './EcranCalculatrice.vue';

export default defineComponent({
    data() {
      return {
          res: []
      }
    },

    components: {
        BoutonCalculatrice,
        EcranCalculatrice,

    },
    methods: {
        handleChildData(data) {
            this.res.push(data);
            console.log(data);
        }
    }
})

</script>