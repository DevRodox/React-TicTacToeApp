import { useState } from "react";

export const useSquare = (turn, setTurn) => {

    const [ value, setValue ] = useState("")
    const [ click, setClick ] = useState(false); 

    const setSquareValue = () => {
        if( click ) return;

        if(turn){
            setValue("X");
        }else{
            setValue("O");
        }
        setTurn( !turn );
        setClick( true );
        return value;
    };

    return{
        value,
        setSquareValue
    };
};