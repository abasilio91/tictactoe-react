import React from 'react';
import './index.css';

const CheckEventos = () => {
    return (
        <div className='wrapper'>
            <input type='checkbox'></input>
            <label className='check-label' name='eventos' value='show-event'>Mostrar eventos</label>
        </div>
    )
}

export default CheckEventos