import React from 'react';
import './index.css';

const Checkbox = ( {cb_id="", value="", content=""} ) => {
    return (
        <div className='wrapper'>
            <input id={cb_id} type='checkbox'></input>
            <label 
                className='check-label'
                htmlFor={cb_id}
                value={value}>
                    {content}
            </label>
        </div>
    )
}

export default Checkbox