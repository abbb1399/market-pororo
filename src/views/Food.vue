<template>
  <section class="food">
    <header class="food__header">
      <h1>제품 목록</h1>
    </header>

    <ul class="food__list">
      <food-item
        v-for="food in foodList"
        :key="food.id"
        :id="food.id"
        :name="food.name"
        :unit-name="food.unitName"
        :unit-price="food.unitPrice"
      />
    </ul>
  </section>
</template>

<script>
import { computed } from "vue"

import FoodItem from "../components/food/FoodItem.vue"
import items from "../data/items.json"

export default {
  components: { FoodItem },

  setup() {
    const foodList = computed(() => {
      return items
    })

    return {
      foodList,
    }
  },
}
</script>

<style lang="scss" scoped>
.food {
  max-width: 62.5rem;
  margin: 0 auto;

  &__header {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  &__list {
    display: grid;
    /* dynamic columns */
    grid-template-columns: repeat(auto-fit, minmax(13.4rem, 1fr));
    gap: 1.6rem;
  }
}
</style>
