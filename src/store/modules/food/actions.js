import getFood from '../../../data/food-promise'
import items from '../../../data/items.json'

export default {
  async fetchFoodList(context){
    try{
      const foodList = await getFood(items)
      
      context.commit('setFoodList', foodList)
    }catch(e){
      console.log(e)
    }
  },
}