let board = [];

//00 01 02
//10 11 12
//20 21 22
board[0] = [1,1,1];
board[1] = [0,5,0];
board[2] = [5,0,0];

function checkGameStatus(sum) {
  if(sum === 15) {
    return 'X';
  } else if( sum === 3) {
    return 'O';
  }
  return false;
}

function checkBoard(board) {
  let lDiagonal = 0;
  let rDiagonal = 0;

  //CHECK ROWS
  for(let i = 0; i < board.length; i++) {
    let rowResult = 0;
    let colResult = 0;


    lDiagonal += board[i][i];
    rDiagonal += board[i][board.length - 1 - i];
    for(let j = 0; j < board[i].length; j++) {
      rowResult += board[i][j];
      colResult += board[j][i];
    }

    rowResult = checkGameStatus(rowResult);
    colResult = checkGameStatus(colResult);

    if(rowResult === 'X' || rowResult === 'O') {
      return rowResult;
    }
    if(colResult === 'X' || colResult === 'O') {
      return colResult;
    }
  }

  let lDiagonalResult = checkGameStatus(lDiagonal);
  let rDiagonalResult = checkGameStatus(rDiagonal);

  if(lDiagonalResult === 'X' || lDiagonalResult === 'O') {
    return lDiagonalResult;
  }

  if(rDiagonalResult === 'X' || rDiagonalResult === ')') {
    return rDiagonalResult;
  }

  return false;
}

class TicTacToe {
  constructor() {
    this.board = [];
    this.resetBoard();
  }

  resetBoard() {
    this.board[0] = [0, 0, 0];
    this.board[1] = [0, 0, 0];
    this.board[2] = [0, 0, 0];
  }

  //RETURN TO THE MENU SCREEN
  quitGame() {

  }

  //START GAME
  startGame() {
    
  }

  //Plays the next round
  nextRound() {

  }

  //Player methods
  setPlayer1(settings) {

  }

  setPlayer2(settings) {

  }

  //Move
  takeTurn() {

  }
}


console.log('BEING TTT');
console.log(checkBoard(board));

