import React from "react";
import Base from '../../objects/Base';
import GridLine from '../../objects/GridLine';

const Tabuleiro = () => {
    return (
        <>
            <Base className='base'>
                <GridLine className='grid-left' />
                <GridLine className='grid-right' />
                <GridLine className='grid-top' />
                <GridLine className='grid-bottom' />
            </Base>
        </>
    )

}

export default Tabuleiro