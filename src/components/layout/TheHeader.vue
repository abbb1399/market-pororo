<template>
  <nav class="nav">
    <h1 class="nav__brand">
      <router-link to="/" class="logo">Market Pororo</router-link>
      <font-awesome-icon icon="bars" class="icon" @click="display" />
    </h1>

    <ul class="nav__items" :class="{ hide: !show }">
      <li>
        <router-link to="/food">제품 목록</router-link>
      </li>
      <li :class="{ bump: bumpStatus }">
        <div v-if="cartItemsCount > 0" :data-badge="cartItemsCount" />
        <router-link to="/cart">장바구니</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, computed, watch } from "vue"
import { useStore } from "vuex"

export default {
  setup() {
    const store = useStore()
    const show = ref(false)
    const bumpStatus = ref(false)

    const cartItemsCount = computed(() => {
      return store.getters.getTotalQuantity
    })

    watch(cartItemsCount, (curValue, oldValue, onInvalidate) => {
      if (curValue === 0) {
        return
      }

      bumpStatus.value = true

      const timer = setTimeout(() => {
        bumpStatus.value = false
      }, 300)

      // 연속 클릭시 setTimeout 중첩 방지
      onInvalidate(() => clearTimeout(timer))
    })

    const display = () => {
      show.value = !show.value
    }

    return {
      show,
      bumpStatus,
      cartItemsCount,
      display,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px $light-color solid;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @include respond(tab-port) {
    flex-direction: column;
    padding: 1rem 0;
  }

  &__brand {
    // Market Pororo로고
    .logo {
      font-family: "Lobster", cursive;
      font-size: 1.5rem;
      color: $primary-color;
    }

    .icon {
      display: none;

      @include respond(tab-port) {
        display: block;
        cursor: pointer;
        /* font-size: 20px; */
        position: absolute;
        right: 30px;
        top: 15px;
      }
    }
  }

  // 목록들
  &__items {
    display: flex;
    align-items: center;

    [data-badge] {
      position: relative;
      &:after {
        position: absolute;
        right: -1rem;
        top: -0.5rem;
        line-height: 0.6;
        padding: 0.25rem;

        background-color: #bf1f1f;
        border: solid 1px #c93a3a;

        font-size: 0.625rem;
        color: #fff;
        border-radius: 30px;
        content: attr(data-badge);

        @include respond(tab-port) {
          right: -1.3rem;
        }
      }
    }

    & > li {
      padding: 0 0.625rem;

      @include respond(tab-port) {
        margin-top: 10px;
      }

      a {
        color: $color-grey-dark-3;
        font-weight: 700;
        padding: 0.3rem;

        &:hover {
          border-bottom: 3px solid $medium-color;
        }

        &.router-link-active {
          border-bottom: 3px solid $primary-color;
        }
      }
    }
  }

  .hide {
    @include respond(tab-port) {
      display: none;
    }
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
