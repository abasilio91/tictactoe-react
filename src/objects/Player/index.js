import React from 'react';
import playerX from './imgs/X.svg';
import playerO from './imgs/Circle.svg';
import './index.css';

const Player = (props) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (
        <button className='player'>
            <img src={players[props.player]} alt={`Jogador ${props.player.toUpperCase()}`} />
        </button>
    )
}

export default Player