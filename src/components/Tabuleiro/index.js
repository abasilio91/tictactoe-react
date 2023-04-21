import React from "react";
import './index.css';

import GridButtons from '../GridButtons';
import GridLines from '../../objects/GridLines';

const Tabuleiro = () => {
    return (
        <div className="tabuleiro">
            <GridLines />
            <GridButtons />
        </div>
    )

}

export default Tabuleiro