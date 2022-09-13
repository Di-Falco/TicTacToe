function ticTacToe(board) {

  // list of win conditions as squares in the 9-element board array
  const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  // for each win condition, check to see if all squares in that condition have the same value and are not empty
  for (let i=0; i<winConditions.length; i++) {
    if (board[winConditions[i][0]] !== "" && board[winConditions[i][1]] !== "" && board[winConditions[i][2]] !== "" &&
        board[winConditions[i][0]] === board[winConditions[i][1]] && board[winConditions[i][1]] === board[winConditions[i][2]]) {
        return board[winConditions[i][0]] + " wins";
    }
  }
  // return in case of a tie
  return board.includes("") ? "" : "tie";
}

$(document).ready(function(){

  // added feature to update result on each input
  $(".input").on('input', function(){
    let board = [];

    board[0] = $("#one").val().toUpperCase();
    board[1] = $("#two").val().toUpperCase();
    board[2] = $("#three").val().toUpperCase();
    board[3] = $("#four").val().toUpperCase();
    board[4] = $("#five").val().toUpperCase();
    board[5] = $("#six").val().toUpperCase();
    board[6] = $("#seven").val().toUpperCase();
    board[7] = $("#eight").val().toUpperCase();
    board[8] = $("#nine").val().toUpperCase();
  
    let win = ticTacToe(board);
  
    $("#output").html(win);
  });
  
});