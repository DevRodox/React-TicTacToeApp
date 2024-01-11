import { useState } from "react";

export const useCell = (turn, setTurn) => {

    const [ value, setValue ] = useState("")
    const [ click, setClick ] = useState(false); 

    const setCellValue = (callback) => {
        if( click ) return;
        const newValue = turn ? 'X' : 'O';
        setTurn( !turn );
        setClick( true );
        setValue(newValue);
        callback(newValue);
    };

    return{
        value,
        setCellValue
    };
};