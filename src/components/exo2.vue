<template>
    <div v-if="val">
        <input v-model="nom" class="box-style"><br>
        <input v-model="prenom" class="box-style"><br>
        <input v-model="date" type="date" class="box-style"><br>
        <input v-model="mail" type="email" class="box-style"><br>
        <button @click="hide()">valider</button>
    </div>
    <div v-else>Félicitations, vous êtes inscrits</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return {
            nom: '',
            prenom: '',
            date: '',
            mail: '',
            val: true,
        }
    },
    methods: {
        hide(){
            if(this.nom == '' || this.prenom == '' || this.date == '' || this.mail == ''){ 
                return 0;
            }else{
                if(isNaN(this.nom) & isNaN(this.prenom)){
                    this.val=false
                }
            }
        }
    }
})
</script>