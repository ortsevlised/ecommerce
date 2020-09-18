import {CartActionType} from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const removeItemsFromCart = (item) => ({
    type: CartActionType.REMOVE_ITEMS_FROM_CART,
    payload: item
});

export const removeSingleItem = (item) => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
});
