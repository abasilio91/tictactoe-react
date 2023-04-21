import React from 'react';
import './index.css';

const GridLines = () => {
    return (
        <div className="grid-wrapper">
            <div className="vertical">
                <div className='grid-dummy' />
                <div className='grid-left' />
                <div className='grid-right' />
                <div className='grid-dummy' />
            </div>
            <div className="horizontal">
                <div className='grid-dummy' />
                <div className='grid-top' />
                <div className='grid-bottom' />
                <div className='grid-dummy' />
            </div>
        </div>
    )
}

export default GridLines