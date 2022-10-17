<template>
  <ul>
    <food-item/>
  </ul>
</template>

<script>
// import {useStore} from 'vuex'

import FoodItem from '../components/food/FoodItem.vue'
// import items from '../data/items.json'

export default {
  components: { FoodItem },
 
  setup(){

    // console.log(items)
    // const store = useStore()    
    // store.dispatch("articles/loadArticles", payload)

    return{


    }
  }
}
</script>
