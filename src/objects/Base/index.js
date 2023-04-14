import React from 'react';
import './index.css';

const Base = ({children}) => {
    return (
        <article className='base'>
            {children}
        </article> 
    )
}

export default Base