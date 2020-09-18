import React from "react";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selector";
import {connect} from "react-redux";
import './checkout-item.styles.scss'

const CheckoutItem = ({item}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item image' src={item.imageUrl}/>
        </div>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
        <span className='quantity'>{item.quantity}</span>
        <div className='remove-button'>&#10005;</div>
    </div>);

const mapDispatchToProps = createStructuredSelector({
    items: selectCartItems
})
export default connect()(CheckoutItem);
