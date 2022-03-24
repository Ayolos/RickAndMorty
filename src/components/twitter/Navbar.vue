<template>
    <ul class="nav">
        <router-link class="h-text" to="/home">Home</router-link>
        <router-link class="h-text" to="/tweet">Tweet</router-link>
    </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style>
.nav{
    padding: 0;
    margin: 0;
    background-color: whitesmoke;
    height: 100px;
}
.h-text {
    display: inline-block;
    padding: 8px;
    text-decoration: none;
    background-color: #1DA1F2;
}
</style>