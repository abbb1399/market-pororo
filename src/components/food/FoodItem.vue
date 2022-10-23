<template>
  <li class="food-item" @click="toCart">
    <base-card class="food-item__card">
      <div class="name">
        <h4>{{ name }}</h4>
        <h4>({{ unitName }})</h4>
      </div>
      <h4 class="price">{{ unitPrice }}원</h4>
    </base-card>
  </li>
</template>

<script>
import { toRefs } from "vue"
import { useStore } from "vuex"

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    unitName: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const { id, name, unitName, unitPrice } = toRefs(props)

    const toCart = () => {
      const item = {
        id: id.value,
        name: name.value,
        unitName: unitName.value,
        unitPrice: unitPrice.value,
        amount: 1,
      }

      store.commit("addItem", item)
    }

    return {
      toCart,
    }
  },
}
</script>

<style lang="scss" scoped>
.food-item {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  &__card {
    cursor: pointer;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      display: flex;
      text-align: center;

      h4:first-child {
        margin-right: 0.2rem;
      }
    }

    .price {
      margin-top: 0.5rem;
    }
  }
}
</style>
