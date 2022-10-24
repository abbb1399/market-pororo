import mutations from './mutations.js';
import getters from './getters.js';

export default {
  state(){
    return{
      items:[],
      totalAmount: 0,
      totalQuantity: 0
    }
  },
  mutations,
  getters
}