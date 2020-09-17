export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id ===itemToAdd.id);


    if (existingCartItem) {
      console.log("EXiste")
       return cartItems.map(cartItem => {
            if (cartItem.id === itemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem
        })
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];

}
