export default {
  addItem(state, {id, name, unitName, unitPrice, amount}){
    const updatedTotalAmount = state.totalAmount + (unitPrice * amount)
    const updatedTotalQuantity = state.totalQuantity + amount
    
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
    state.totalQuantity = updatedTotalQuantity
  },

  removeItem(state, {id, amount}){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === id)
    const updatedTotalQuantity = state.totalQuantity - amount

    const existingItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.unitPrice

    let updatedItems
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== id)
    }else{
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    state.items = updatedItems
    state.totalAmount = updatedTotalAmount
    state.totalQuantity = updatedTotalQuantity
  },

  removeAll(state, {id}){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === id)
    const existingItem = state.items[existingCartItemIndex]

    const updatedTotalQuantity = state.totalQuantity - existingItem.amount
    const updatedTotalAmount = state.totalAmount - (existingItem.unitPrice * existingItem.amount)
    const updatedItems = state.items.filter(item => item.id !== id)

    state.items = updatedItems
    state.totalAmount = updatedTotalAmount
    state.totalQuantity = updatedTotalQuantity
  }
}