import mutations from './mutations.js';
import actions from './actions.js';
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
  actions,
  getters
}