import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogle, isInverted, ...otherProps}) => (
    <button className={`custom-button 
                                         ${isGoogle ? 'google-sign-in' : ''}
                                         ${isInverted ? 'inverted' : ''}`}
            {...otherProps}>{children}
    </button>)

export default CustomButton
