


//값을 입력받아 블럭의 위치를 움직이는 함수
export function myFunction(keydown, board, engin) {
    //alert('keyPress:'+String.fromCharCode(ChangeValue))
    //alert('keyPress:'+ChangeValue)
    const turn = board.turn;
    const type = board.type;
    const row = board.row;
    const col = board.col;
    if (board.turn % 4 == 0) {
        board.turn = 0;
    }
    switch (keydown) {
        case 'k': //5번 turn
            engin.ghostDelete(type, turn, row, col);
            engin.deleteColor(type, turn, row, col);
            var tmpturn = board.turn + 1;
            if (tmpturn > 3) {
                tmpturn = 0;
                if (engin.isMove(type, tmpturn, row, col)) {
                    board.turn++;
                    if (board.turn % 4 == 0) {
                        board.turn = 0;
                    }
                }
            } else {
                if (engin.isMove(type, board.turn + 1, row, col)) {
                    board.turn++;
                }
            }
            engin.ghostColor(type, board.turn, row, col);
            engin.drawColor(type, board.turn, row, col);
            break;
        case 'a': //4번 left
            engin.ghostDelete(type, turn, row, col);
            engin.deleteColor(type, turn, row, col);
            if (engin.isMove(type, turn, row, col - 1)) {
               board.col--;
            }
            engin.ghostColor(type, turn, row, board.col);
            engin.drawColor(type, turn, row, board.col);
            break;
        case 'd': //6번 right
            engin.ghostDelete(type, turn, row, col);
            engin.deleteColor(type, turn, row, col);
            if (engin.isMove(type, turn, row, col + 1)) {
                board.col++;
            }
            engin.ghostColor(type, turn, row, board.col);
            engin.drawColor(type, turn, row, board.col);
            break;
        case 's': //2번 drop
            engin.ghostDelete(type, turn, row, col);
            engin.deleteColor(type, turn, row, col);
            if (engin.isMove(type, turn, board.row + 1, col)) {
                board.row++;
            }
            engin.ghostColor(type, turn, board.row, col);
            engin.drawColor(type, turn, board.row, col);
            break;
        case 'b': //스페이스바 drop
            engin.ghostDelete(type, turn, row, col);
            engin.deleteColor(type, turn, row, col);
            while (engin.isMove(type, turn, board.row + 1, col)) {
                board.row++;
            }
            engin.hostColor(type, turn, board.row, col);
            engin.drawColor(type, turn, board.row, col);
            engin.arrayBlock(type, turn, board.row, col);
            engin.deleteLine();
            board.row = 0;
            board.col = 4;
            board.type = board.nextType;
            board.nextType = Math.round(Math.random() * 6);
            engin.nextColor(board.nextType, board.turn2, board.row2, board.col2);
            break;
    }
}