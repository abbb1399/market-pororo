<template>
  <li class="cart-item">
    <span>{{ name }}</span>
    <span>{{ unitName }}</span>
    <span>{{ unitPrice }}</span>
    <span>
      <button @click="subtractNum">-</button>
      <input type="text" v-model="itemAmount" />
      <button @click="addNum">+</button>
    </span>
  </li>
</template>

<script>
import { ref, toRefs } from "vue"
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
    amount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const itemAmount = ref(0)
    const { id, name, unitName, unitPrice, amount } = toRefs(props)

    itemAmount.value = amount.value

    const addNum = () => {
      const item = {
        id: id.value,
        name: name.value,
        unitName: unitName.value,
        unitPrice: unitPrice.value,
        amount: 1,
      }

      store.commit("addItem", item)
      itemAmount.value += 1
    }

    const subtractNum = () => {
      store.commit("removeItem",{id: id.value, amount: 1})
      itemAmount.value -= 1
    }

    return {
      itemAmount,
      addNum,
      subtractNum,
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;

  span {
    text-align: center;
    flex: 1;
    padding: 0.5rem;

    input {
      width: 20%;
      text-align: center;
    }
  }
}
</style>
