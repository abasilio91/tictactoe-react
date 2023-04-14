import React from "react";
import Base from '../../objects/Base';

const Tabuleiro = ({children}) => {
    return (
        <>
            <Base className='base'>
                {children}
            </Base>
        </>
    )

}

export default Tabuleiro