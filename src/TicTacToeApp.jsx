import { renderCells } from "./helpers/renderCells";

export const TicTacToeApp = () => {
    
    

    return(
        <>
            <div className="Player-Names"> 
                <h1 className="X">X</h1>
                <h1 className="O">O</h1>
            </div>

            <div className="container">
               { renderCells() }
            </div>
            
        </>
    );
};