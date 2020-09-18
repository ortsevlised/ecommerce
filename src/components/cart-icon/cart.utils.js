export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id);


    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === itemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem
        })
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeSingleItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
}
