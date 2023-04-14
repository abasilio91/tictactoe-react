import React from 'react';
import './index.css';

const Base = ({children}) => {
    return (
        <ul className="grid-game">
            {children}
            <li className='item'>item1</li>
            <li className='item'>item2</li>
            <li className='item'>item3</li>

            <li className='item'>item4</li>
            <li className='item'>item5</li>
            <li className='item'>item6</li>

            <li className='item'>item7</li>
            <li className='item'>item8</li>
            <li className='item'>item9</li>
        </ul>
    )
}

export default Base