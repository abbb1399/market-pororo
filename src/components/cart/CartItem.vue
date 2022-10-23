<template>
  <li class="cart-item">
    <span>{{ name }}</span>
    <span>{{ unitName }}</span>
    <span>{{ unitPrice }}</span>
    <span class="cart-item__qunatity">
      <div class="quantity-input">
        <div class="wrapper">
          <font-awesome-icon class="btns" icon="minus" @click="subtractNum" />
          <p class="value">{{ itemAmount }}</p>
          <font-awesome-icon class="btns" icon="plus" @click="addNum" />
        </div>
      </div>
      <font-awesome-icon class="x-btn" icon="x" @click="test" />
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

    itemAmount.value = parseInt(amount.value)

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
      store.commit("removeItem", { id: id.value, amount: 1 })
      itemAmount.value -= 1
    }

    const test = () => {
      store.commit("removeAll", { id: id.value})
    }

    return {
      itemAmount,
      addNum,
      subtractNum,
      test
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;

  &__qunatity {
    display: flex;
    align-items: center;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    .quantity-input {
      flex: 1;
      display: flex;
      justify-content: center;

      .wrapper {
        display: flex;
        align-items: center;
        border: 2px solid #ececec;
        border-radius: 5px;

        .btns {
          cursor: pointer;
          padding: 5px;
        }

        .value {
          padding: 0 1rem;
        }
      }
    }

    .x-btn {
      cursor: pointer;
      padding: 5px 0;
    }
  }

  span {
    text-align: center;
    flex: 1;
    padding: 0.5rem;
  }
}
</style>
