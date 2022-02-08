<template>
        <button @click="set(1)" class="space_button">1</button>
        <button @click="set(2)" class="space_button">2</button>
        <button @click="set(3)" class="space_button">3</button><br>
        <button @click="set(4)" class="space_button">4</button>
        <button @click="set(5)" class="space_button">5</button>
        <button @click="set(6)" class="space_button">6</button><br>
        <button @click="set(7)" class="space_button">7</button>
        <button @click="set(8)" class="space_button">8</button>
        <button @click="set(9)" class="space_button">9</button><br>
        <button @click="set('+')" class="space_button">+</button>
        <button @click="set('-')" class="space_button">-</button>
        <button @click="set('/')" class="space_button">/</button>
        <button @click="set('*')" class="space_button">*</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    emits: ['update-data'],
    methods: {
      set(val){
        this.$emit('update-data', val),
    }
}

})
</script>

<style>
    .space_button {
        margin: 3px;
    }
</style>