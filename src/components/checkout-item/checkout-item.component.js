import React from "react";
import {connect} from "react-redux";
import './checkout-item.styles.scss'
import {addItem, removeSingleItem, removeItemsFromCart} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, removeItems, removeSingleItem, addItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={item.imageUrl}/>
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeSingleItem(item)}>&#10094;</div>
            <span className='value'>{item.quantity}</span>
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div className='remove-button' onClick={() => removeItems(item)}>&#10005;</div>
    </div>);

const mapDispatchToProps = dispatch => ({
    removeItems: item => dispatch(removeItemsFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeSingleItem: item => dispatch(removeSingleItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);
