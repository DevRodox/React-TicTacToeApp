import { Cell } from '../components/Cell';
import { useCellController } from '../hooks/useCellController';

export const renderCells = () => {
    const cells = [];

    const { turn, setTurn, handleCellsController } = useCellController();

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