<template>
    <ul class="t">
        <li v-for="tweet in tweets" :key="tweet">
            <a>{{ tweet.message }}</a>
        </li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
    data: ()=> {
        return {
            tweets: []
        }
    },
    mounted(){
        axios.get("https://fges-twitter-clone.herokuapp.com/allTweets", {
            headers: { 
                 "x-fges-user-key": "5iSshnbzuYJawqXMAW1rbiKOgbL0fYAW",
            },
        }).then((reponse)=> {this.tweets = reponse.data});
    }
    
})

</script>

<style>

.t{
    text-align: center;
    list-style-type: none;
}
</style>