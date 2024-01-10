import { useEffect, useState } from 'react';
import { Cell } from '../components/Cell';

export const renderCells = () => {
    const cells = [];
    const [turn, setTurn] = useState(true);
    
    const [cellsContainer, setCellsContainer] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]);

    const handleCellsController = ( cellNumber, value ) => {   
        const newCellsContainer = cellsContainer.map((row) =>
            row.map((element) => (element === cellNumber ? value : element))
        );
        setCellsContainer(newCellsContainer);
    };

    useEffect( () => {
        console.log(cellsContainer);
    }, [cellsContainer]);

    for( let i = 0; i < 9; i++ ){
        cells.push( 
            <Cell 
                key={ i } 
                cellNumber= { i }
                turn={ turn } 
                setTurn={ setTurn } 
                cellController = { handleCellsController }
            /> 
        );
    }

    return cells;
}