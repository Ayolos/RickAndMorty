<template>
  <div class="justify-content-center input-group">
    <div class="form-outline" style="width: 40vh">
      <input v-model="name" placeholder="Search" type="search" id="form1" class="form-control" />
    </div>
    <button @click="sendDataToParent(name)" type="button" class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      name: "",
    };
  },
  emits: ["update-data"],
  methods: {
    sendDataToParent(data) {
      this.$emit("update-data", data);
    },
  },
});
</script>
<style>
</style>
