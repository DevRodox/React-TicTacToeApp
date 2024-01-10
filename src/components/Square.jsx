import { useSquare } from "../hooks/useSquare";

export const Square = ({ turn, setTurn }) => {
    
    const { value, setSquareValue } = useSquare(turn, setTurn);

    return(
        <>
            <div 
                className="square"
                onClick={ setSquareValue }
            >{ value }
            </div>
        </>
    );
};

