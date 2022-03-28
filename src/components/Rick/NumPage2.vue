<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <p>/ {{ totalPages }}</p>
      <li class="page-item">
        <RouterLink class="page-link" :to='"/personnage/" + 3 '> {{ nextPage }} </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { totalPages: Number, nextPage: String, previousPage: Number},
  data: () => {
    return {};
  },
});
</script>
