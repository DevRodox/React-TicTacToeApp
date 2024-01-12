
const transposeMatrix = (matrix) => {
    let transposedMatrix = [];

    for(let i = 0; i < matrix[0].length; i++){
        transposedMatrix[i] = [];
        for(let j = 0; j < matrix.length ; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}

const checkDiagonal = (value, cellsContainer) => {
    if ((cellsContainer[0][0] === value && cellsContainer[1][1] === value && cellsContainer[2][2] === value) ||
        (cellsContainer[0][2] === value && cellsContainer[1][1] === value && cellsContainer[2][0] === value)) {
        console.log(`Win ${value}`);
    }
};

export const handleCellsChecker = ( cellsContainer ) => {
   
    //Vertical 

    cellsContainer.forEach( row => {
        if (row.every( element => element === 'X')) {
            console.log('win X');
        }

        if (row.every( element => element === 'O' )) {
            console.log('win O');
        }
    });

    //Horizontal

    const transposedCellsContainer = transposeMatrix( cellsContainer );

    transposedCellsContainer.forEach(row => {
        if(row.every( element => element === 'X')){
            console.log('Win X');
        };

        if(row.every( element => element === 'O')){
            console.log('Win O');
        };
    });

    //Diagonal
    
    checkDiagonal('X', cellsContainer);
    checkDiagonal('O', cellsContainer);

};
