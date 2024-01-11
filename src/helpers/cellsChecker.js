
const transposeMatrix= (matrix) => {
    let transposedMatrix = [];

    for(let i = 0; i < matrix[0].length; i++){
        transposedMatrix[i] = [];
        for(let j = 0; j < matrix.length ; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}

export const handleCellsChecker = ( cellsContainer ) => {
        
    cellsContainer.forEach( row => {
        if (row.every( element => element === 'X')) {
            console.log('win X');
        }

        if (row.every( element => element === 'O' )) {
            console.log('win O');
        }
    });

    const transposedCellsContainer = transposeMatrix( cellsContainer );

    transposedCellsContainer.forEach(row => {
        if(row.every( element => element === 'X')){
            console.log('Win X');
        };

        if(row.every( element => element === 'O')){
            console.log('Win O');
        };
    });
};
