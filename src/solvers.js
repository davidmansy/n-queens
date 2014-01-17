/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){

  var board = new Board({'n':n});
  var rows = board.rows();

  for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    for (var colIndex = 0; colIndex < rows[rowIndex].length; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(board.hasAnyRooksConflicts()) {
        board.togglePiece(rowIndex, colIndex);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(rows));
  return rows;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){

  var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(board, rowIndex, size) {
    if(rowIndex === size) {
      solutionCount++;
      return;
    }

    for (var colIndex = 0; colIndex < size; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(board, rowIndex + 1, size);
      }
      board.togglePiece(rowIndex, colIndex);
    }    
  };

  findSolution(board, 0, n);

  console.log(solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  var board = new Board({n:n});

  var findSolution = function(board, rowIndex, size) {
    if(rowIndex === size) {
      solution = board.rows();
      return;
    }

    for (var colIndex = 0; colIndex < size; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasAnyQueensConflicts()) {
        findSolution(board, rowIndex + 1, size);
      }
      board.togglePiece(rowIndex, colIndex);
    }
  }

  findSolution(board, 0, n);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){

  var board = new Board({n:n});
  var solutionCount = 0;

  var findSolution = function(board, rowIndex, size) {
    if(rowIndex === size) {
      solutionCount++;
      return;
    }

    for (var colIndex = 0; colIndex < size; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasAnyQueensConflicts()) {
        findSolution(board, rowIndex + 1, size);
      }
      board.togglePiece(rowIndex, colIndex);
    }    
  };

  findSolution(board, 0, n);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
