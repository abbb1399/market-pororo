import { createStore } from "vuex"

import foodModule from "./food/index.js"

const store = createStore({
  modules: {
    food: foodModule,
  },
})

export default store
