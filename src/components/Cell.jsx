import { useCell } from "../hooks/useCell";

export const Cell = ({ turn, setTurn, cellController, cellNumber }) => {
    
    const { value, setCellValue } = useCell(turn, setTurn);

    const cellClicked = () => {
        setCellValue( (value) => {
            cellController( cellNumber, value );
        });
    }

    return(
        <>
            <div 
                className="square"
                onClick={ cellClicked }
            >{ value }
            </div>
        </>
    );
};