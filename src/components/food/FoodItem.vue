<template>
  <li class="food-item" @click="toCart" >
    <base-card>
      <h4>{{ name }}</h4>
      <h4>{{ unitName }}</h4>
      <h4>{{ unitPrice }}</h4>
    </base-card>
  </li>
</template>

<script>
import { toRefs } from "vue"
import {useStore} from 'vuex'

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

    const toCart = () =>{
      const item = {
        id: id.value,
        name: name.value,
        unitName: unitName.value,
        unitPrice: unitPrice.value,
        amount: 1
      }

      store.commit('addItem',item)
    }

    return{
      toCart
    }

  },
}
</script>

<style lang="scss" scoped>
.food-item {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
}
</style>
