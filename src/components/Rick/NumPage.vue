<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li v-for="pages in totalPages" :key="pages" class="page-item">
        <RouterLink class="page-link" :to='"/personnage/" + pages'>{{ pages }}</RouterLink>
        <!--<a @click="sendDataToParent(pages)" class="page-link">{{ pages }}</a>-->
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { totalPages: Number },
  data: () => {
    return {
    };
  },
});
</script>
