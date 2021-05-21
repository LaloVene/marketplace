import React from 'react';
import './custom-button.styles.scss';

const CustomButton: React.FC<any> = ({children, ...props}) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
)

export default CustomButton;