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
      <span><strong>총 주문 수량: {{ totalQuantity }} </strong></span>
      <span><strong>합계: {{ totalAmount }} 원</strong></span>
    </footer>
  </section>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

import CartItem from "../components/cart/CartItem.vue"

export default {
  components: { CartItem },
  setup() {
    const store = useStore()

    const cartList = computed(() => {
      return store.getters.myItems
    })

    const totalAmount = computed(() => {
      return store.getters.getTotalAmount.toLocaleString('ko-KR')
    })

    const totalQuantity = computed(() => {
      return store.getters.getTotalQuantity
    })

    return {
      cartList,
      totalAmount,
      totalQuantity,
    }
  },
}
</script>

<style lang="scss" scoped>
.cart {
  max-width: 62.5rem;
  margin: 0 auto;

  &__header {
    text-align: center;
    margin: 2rem 0;
  }

  &__main {
    .table-header {
      display: flex;
      background: #ececec;
      font-weight: 700;

      span {
        text-align: center;
        flex: 1;
        padding: 0.5rem;
      }
    }

    .table-body {
      max-height: 26rem;
      overflow-y: auto;
    }
  }

  &__footer {
    span:not(:first-child) {
      margin-left: 2rem;
    }

    margin-top: 2.5rem;
    text-align: center;
  }
}
</style>
