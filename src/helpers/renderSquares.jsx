import { useState } from 'react';
import { Square } from '../components/Square';

export const renderSquares = () => {
    const squares = [];
    const [turn, setTurn] = useState(true);

    for( let i = 0; i < 9; i++ ){
        squares.push( <Square key={i} turn={ turn } setTurn={ setTurn }/> );
    }

    return squares;
}