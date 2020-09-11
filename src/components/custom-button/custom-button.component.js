import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogle, ...otherProps}) => (
    <button className ={`custom-button ${isGoogle ?'google-sign-in':''}`} {...otherProps}>{children}</button>)

export default CustomButton
