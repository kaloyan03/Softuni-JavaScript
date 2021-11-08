function ticTacToe(moves) {
    function readBoard() {
        board = [];
        for (let row = 0; row < 3; row++) {
            board.push([]);
            for (let col = 0; col < 3; col++) {
                board[row].push('false');
            }
        
        }
        return board;
    }


    function checkRowsWinnerCondition(board) {
        for (let row = 0; row < board.length; row++) {
            currentRow = board[row];
            firstElement = currentRow[0];
            rowWinner = true;
            for (element of currentRow) {
                if (element !== 'false') {
                    if (firstElement !== element) {
                        rowWinner = false;
                        break;
                    }
                } else {
                    rowWinner = false;
                        break;
                } 
            }
            if (rowWinner == true) {
                return true;
            }
        }

    }

    function checkColsWinnerCondition(board) {
        for (let col = 0; col < board.length; col++) {
            firstElement = board[0][col]
            colWinner = true;
            if (firstElement === 'false') {
                continue;
            }
            for (let row = 0; row < board.length; row++) {
                element = board[row][col];
                if (element !== firstElement) {
                    colWinner = false;
                    break;
                }
            
            } 
            if (colWinner === true) {
                return true;
            } 
                
            
        }
    }


    function checkPrimaryDiagonalWinnerCondition(board) {
        diagonalWinner = true;
        firstElement = board[0][0];
        for (let i = 0;i < board.length; i++){ 
            element = board[i][i];
            if (element === 'false' || element !== firstElement) {
                    diagonalWinner = false;
                    break;
                } 
            
        }
        if (diagonalWinner === true) {
            return true;
        }
    }

    function checkSecondaryDiagonalWinnerCondition(board) {
        isDiagonalWinner = true;
        row = 0;
        col = 2;
        firstElement = board[row][col];
        if (firstElement === 'false') {
            isDiagonalWinner = false;
            return false;
        }
        for (let i = 0; i < board.length; i++) {
            element = board[row][col];
            row ++;
            col --;
            if (element !== 'false') {
                if (element !== firstElement) {
                    isDiagonalWinner = false;
                }
            } else {
                isDiagonalWinner = false;
                return false;
            }
        }
        if (isDiagonalWinner === true) {
            return true;
        }
    }



    function checkIfFreeSpace(board) {
        counter = 0;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if(board[row][col] === 'false') {
                    counter += 1;
                    return true;
                }
                
            }
            
        }
    if (counter === 0) {
        return false;
    }
    }


    function printBoard(board) {
        for (let row = 0; row < board.length; row++) {
            console.log(board[row].join('\t'));
            
        }
    }

    board = readBoard();
    playerTurn = 1;
    for (move of moves) {
        moveData = move.split(' ');
        moveRow = Number(moveData[0]);
        moveCol = Number(moveData[1]);
        if (board[moveRow][moveCol] === 'false') {
            if (playerTurn === 1) {
                board[moveRow][moveCol] = 'X';
                playerTurn = 2;
            } else {
                board[moveRow][moveCol] = 'O';
                playerTurn = 1;
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }


        isWinner = false;
        if (checkColsWinnerCondition(board) === true || checkRowsWinnerCondition(board) === true) {
            isWinner = true;
        } else if (checkPrimaryDiagonalWinnerCondition(board) === true || checkSecondaryDiagonalWinnerCondition(board) === true) {
            isWinner = true;
        }


        if (isWinner) {
            winnerSymbol = '';
            if (playerTurn === 2) {
                winnerSymbol = 'X';
            } else {
                winnerSymbol = 'O';
            }
            console.log(`Player ${winnerSymbol} wins!`);
            printBoard(board);
            break;
        }

        if (checkIfFreeSpace(board) === false) {
            console.log('The game ended! Nobody wins :(');
            printBoard(board);
            break;
        }


    }



}
 

// ticTacToe(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// )

// console.log('--------------');


// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// )

// console.log('---------');


// ticTacToe(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]
// )