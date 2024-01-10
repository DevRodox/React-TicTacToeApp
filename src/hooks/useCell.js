import { useState } from "react";

export const useCell = (turn, setTurn) => {

    const [ value, setValue ] = useState("")
    const [ click, setClick ] = useState(false); 

    const setCellValue = () => {
        if( click ) return;

        if(turn){
            setValue("X");
        }else{
            setValue("O");
        }
        setTurn( !turn );
        setClick( true );
    };

    return{
        value,
        setCellValue
    };
};