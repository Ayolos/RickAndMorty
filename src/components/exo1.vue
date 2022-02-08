<template>
    <input v-model="input" class="box-style">
    <select v-model="selected">
        <option value="km">km</option>
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="mm">mm</option>
    </select>
    <select v-model="selectedconv">
        <option value="km">km</option>
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="mm">mm</option>
    </select>
    <p>{{ calc }}</p>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            input: '',
            selected: 'm',
            selectedconv: 'm',
        }
    },
    methods() {
        
    }
    computed: {
        calc() {
            if(this.selected == 'km' & this.selectedconv == "m"){
                return `${this.input}` * 1000 + " mètre";
            }
            else if(this.selected == 'km' & this.selectedconv == "cm"){
                return `${this.input}` * 100000 + " centimètre";
            }
            else if(this.selected == 'km' & this.selectedconv == "mm"){
                return `${this.input}` * 1000000 + " millimètre";
            }
            else if(this.selected == "m" & this.selectedconv == "km"){
                return `${this.input}` / 1000 + "kilomètre";
            }
            else if(this.selected == "m" & this.selectedconv == "cm"){
                return `${this.input}` / 100 + "centimètre";
            }
            else if(this.selected == "m" & this.selectedconv == "mm"){
                return `${this.input}` * 1000 + "millimètre";
            }
            else if(this.selected == "cm" & this.selectedconv == "km"){
                return `${this.input}` / 100000 + "kilomètre";
            }
            else if(this.selected == "cm" & this.selectedconv == "m"){
                return `${this.input}` / 100 + "mètre";
            }
            else if(this.selected == "cm" & this.selectedconv == "mm"){
                return `${this.input}` * 10 + "millimètre";
            }
            else if(this.selected == "mm" & this.selectedconv == "km"){
                return `${this.input}` / 1000000;
            }
            else if(this.selected == "mm" & this.selectedconv == "m"){
                return `${this.input}` / 1000;
            }
            else if(this.selected == "mm" & this.selectedconv == "cm"){
                return `${this.input}` / 10;
            }
            else{
                return this.input;
            }
            
            
        }
    }
})
</script>