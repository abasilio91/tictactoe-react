import React from 'react';
import Player from '../../objects/Player';
import './index.css';

const Base = ({children}) => {
    return (
        <ul className="grid-game">
            {children}
            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>

            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>

            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>
            <li className='item'><Player player='x'/></li>
        </ul>
    )
}

export default Base