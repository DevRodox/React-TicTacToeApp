

export const TicTacToeApp = () => {



    return(
        <>
            <div className="Player-Names"> 
                <h1 className="X">X</h1>
                <h1 className="O">O</h1>
            </div>
            <div className="container">
                <div onClick={ () => console.log('Click') } className="square">1</div>
                <div className="square">2</div>
                <div className="square">3</div>
                <div className="square">4</div>
                <div className="square">5</div>
                <div className="square">6</div>
                <div className="square">7</div>
                <div className="square">8</div>
                <div className="square">9</div>
            </div>
        </>
    );
};