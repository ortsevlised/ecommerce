import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/jojo_logo.svg';
import './header.styles.scss';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ?
                <div className='option'
                     onClick={() => (auth.signOut())}>SIGN OUT</div>
                : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
       {hidden ? null : <CartDropDown/>}
        </div>
    </div>
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})


export default connect(mapStateToProps)(Header);
