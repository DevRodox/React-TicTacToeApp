import { useEffect, useState } from 'react';
import { handleCellsChecker } from '../helpers/cellsChecker';

export const useCellController = () => {
    
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
        handleCellsChecker( cellsContainer );
    }, [cellsContainer]);

    return{
        turn,
        setTurn,
        handleCellsController
    };
};
