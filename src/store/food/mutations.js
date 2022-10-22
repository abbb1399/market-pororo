export default {
  addItem(state, {id, name, unitName, unitPrice, amount}){
    const updatedTotalAmount = state.totalAmount + unitPrice * amount
    
    const existingCartItemIndex = state.items.findIndex((item) => item.id === id)
    
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem, 
        amount: existingCartItem.amount + amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }else{
      updatedItems = state.items.concat({id,name, unitName, unitPrice, amount})
    } 

    state.items = updatedItems
    state.totalAmount = updatedTotalAmount
  },
  removeItem(){



  }
}