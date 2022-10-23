<template>
  <section class="cart">
    <header class="cart__header">
      <h1>주문 목록</h1>
    </header>

    <main class="cart__main">
      <div class="table-header">
        <span>상품명</span>
        <span>단위</span>
        <span>단가</span>
        <span>수량</span>
      </div>
      <div class="table-body">
        <ul>
          <cart-item
            v-for="item in cartList"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :unit-name="item.unitName"
            :unit-price="item.unitPrice"
            :amount="item.amount"
          />
        </ul>
      </div>
    </main>

    <footer class="cart__footer">
      <span>총 주문 수량: {{ totalCount }}</span
      >&nbsp;&nbsp;
      <span>합계: {{ totalAmount }} 원</span>
    </footer>
  </section>
</template>

<script>
import { ref,computed } from "vue"
import { useStore } from "vuex"

import CartItem from "../components/cart/CartItem.vue"

export default {
  components: { CartItem },
  setup() {
    const store = useStore()
    const totalCount = ref(0)

    const cartList = computed(() => {
      return store.getters.myItems
    })

    const totalAmount = computed(() => {
      return store.getters.getTotalAmount
    })

    totalCount.value = store.getters.myItems.reduce((curNumber, item) => {
      return curNumber + item.amount
    }, 0)


    return {
      cartList,
      totalAmount,
      totalCount,
    }
  },
}
</script>

<style lang="scss" scoped>
.cart {
  max-width: 62.5rem;
  margin: 0 auto;
  height: 80vh;

  display: flex;
  flex-direction: column;

  &__header {
    text-align: center;
    margin: 2rem 0;
  }

  &__main {
    flex: 1;

    .table-header {
      display: flex;
      background: #ECECEC;
      font-weight: 700;

      span {
        text-align: center;
        flex: 1;
        padding: .5rem;
      }
    }

    .table-body {
    
    }
  }

  &__footer {
    text-align: center;
  }
}
</style>
