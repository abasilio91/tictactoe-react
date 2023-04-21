import React from 'react';
import './index.css';

const Checkbox = ( {cb_id="", value="", content=""} ) => {
    return (
        <div className='cb-wrapper'>
            <input id={cb_id} type='checkbox' className='input'></input>
            <label className='check-label' htmlFor={cb_id} value={value}> {content} </label>
        </div>
    )
}

export default Checkbox