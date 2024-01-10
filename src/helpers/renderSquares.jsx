import { Square } from '../components/Square';

export const renderSquares = () => {
    const squares = [];

    for( let i = 0; i < 9; i++ ){
        squares.push( <Square key={i} casilla={i} /> );
    }

    return squares;
}