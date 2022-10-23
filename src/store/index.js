import { createStore } from "vuex"

import cartModule from "./cart/index.js"

const store = createStore({
  modules: {
    cart: cartModule,
  },
})

export default store
