

const squareClick = () => {
    console.log('Click');
};

export const Square = ({ casilla }) => {

    return(
        <>
            <div 
                className="square"
                onClick={ squareClick }
            >{ casilla }
            </div>
        </>
    );
};
