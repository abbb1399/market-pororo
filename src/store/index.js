import { createStore } from "vuex"

import cartModule from "./modules/cart/index.js"
import foodModule from "./modules/food/index"

const store = createStore({
  modules: {
    cart: cartModule,
    food: foodModule,
  },
})

export default store
