<template>
  <section class="food">
    <base-spinner v-if="loadingStatus" />
    <div v-else>
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
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue"
import { useStore } from "vuex"

import FoodItem from "../components/food/FoodItem.vue"

export default {
  components: { FoodItem },

  setup() {
    const store = useStore()
    const loadingStatus = ref(true)

    const foodList = computed(() => {
      return store.getters["food/getFoodList"]
    })

    const init = async () => {
      await store.dispatch("food/fetchFoodList")
      loadingStatus.value = false
    }

    init()

    return {
      loadingStatus,
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
    margin: 2rem 0;
  }

  &__list {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(14.5rem, 1fr)); */
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
  }
}
</style>
