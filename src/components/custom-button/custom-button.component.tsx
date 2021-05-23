import React from 'react';
import './custom-button.styles.scss';

const CustomButton: React.FC<any> = ({children, isGoogleSignIn, ...props}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
)

export default CustomButton;