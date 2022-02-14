var count = 0;

export default class GameEngin {
    constructor(board, tetris, gamepan) {
        this.board = board,
            this.tetris = tetris,
            this.gamepan = gamepan
        this.type = board.type;
        this.turn = board.turn;
        this.row = board.row;
        this.col = board.col;
        this.nextType = board.nextType;
        this.turn2 = board.tunr2;
        this.row2 = board.row2;
        this.col2 = board.col2;
        this.colSize = board.colSize;
        this.rowSize = board.rowSize;
        this.tetris = tetris;
        this.gamepan = gamepan;
    }


    playCheck() {

        this.gameClear(); //게임을 성공했는지확인
        this.gameOver(); //게임이 끝났는지 확인

        if (this.isMove(this.type, this.turn, this.row + 1, this.col)) { //블록이 아래로 이동가능하면
            this.ghostDelete(this.type, this.turn, this.row, this.col); //고스트 지우기
            this.deleteColor(this.type, this.turn, this.row, this.col); //블록 지우기
            this.board.row = this.row + 1; //로우 증가
            this.ghostColor(this.board.type, this.board.turn, this.board.row, this.board.col); //고스트 그리기
            this.drawColor(this.board.type, this.board.turn, this.board.row, this.board.col); //블록 그리기
        } else { //블록이 아래로 이동 불가능하면
            this.deleteLine(); //채워진 라인을 지우고
            this.arrayBlock(this.type, this.turn, this.row, this.col); //테트리스 블록을 불러오고
            this.board.row = 0;
            this.board.col = 4; //새로뜰 블록의 좌표를 정해주고
            this.board.type = this.nextType; //넥스트블록에 뜬 블록을 보드에 받아온다
            this.board.nextType = Math.round(Math.random() * 6); //넥스트블록에 넣을 새로운 난수를 받아옴
            this.nextColor(this.board.nextType, this.board.turn2, this.board.row2, this.board.col2, this.board.tetris); //넥스트블록에 새로받은 난수로 호출함
        }
    }

    //게임오버를 알리는 함수
    gameOver(colSize, gamepan) {
        for (var i = 0; i < colSize; i++) {
            if (gamepan[0][i] != 0) {
                var over = setTimeout(function () {
                    clearInterval(intervalID);
                }, 0);
                alert("GAMEOVER!!!!");
            }
        }
    }

    //게임클리어를 알리는 함수 
    gameClear() {
        if (count == 10) {
            var over = setTimeout(function () {
                clearInterval(intervalID);
            }, 0);
            alert("Congratulation!!!!");
        }
    }

    //움직일수있는지 확인하는 함수
    isMove(type, turn, row, col) {
        console.log(row);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] != 0) {
                    if ((col + j) == (this.colSize) || (col + j) < 0) {
                        return false;
                    }
                    if ((row + i) == (this.rowSize)) {
                        return false;
                    }
                }
                if (this.tetris[type][turn][i][j] != 0 && this.gamepan[row + i][col + j] != 0) {
                    return false;
                }
            }
        }
        return true;
    }

    //그렸던 블럭을 지우는 함수
    deleteColor(type, turn, row, col) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] == 1) {
                    document.getElementById("x" + (row + i) + "y" + (col + j)).bgColor = "white";
                }
            }
        }
    }

    //고스트색상지정 함수
    ghostColor(type, turn, row, col) {
        var ghostRow = row;
        while (this.isMove(type, turn, ghostRow + 1, col)) {
            ghostRow++;
        }
        if (turn % 4 == 0) {
            turn = 0;
        }
        var color;
        if (type == 0) {
            color = "#B2EBF4";
        }
        if (type == 1) {
            color = "#B7F0B1";
        }
        if (type == 2) {
            color = "#FFA7A7";
        }
        if (type == 3) {
            color = "#B5B2FF";
        }
        if (type == 4) {
            color = "#FFE08C";
        }
        if (type == 5) {
            color = "#FAED7D";
        }
        if (type == 6) {
            color = "#D1B2FF";
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] == 1) {
                    document.getElementById("x" + (ghostRow + i) + "y" + (col + j)).bgColor = color;
                }
            }
        }
    }


    //고스트삭제 함수
    ghostDelete(type, turn, row, col) {
        var ghostRow1 = row;
        while (this.isMove(type, turn, ghostRow1 + 1, col)) {
            ghostRow1++;
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] == 1) {
                    document.getElementById("x" + (ghostRow1 + i) + "y" + (col + j)).bgColor = "white";
                }
            }
        }
    }

    //테트리스블럭을 띄우는 함수
    arrayBlock(type, turn, row, col) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] != 0) {
                    this.gamepan[row + i][col + j] = 1;
                }
            }
        }
    }


    //변수값을 받아 블럭을 종류에따라 색상을 지정하여 그리는 함수
    drawColor(type, turn, row, col) {

        if (turn % 4 == 0) {
            turn = 0;
        }
        if (type % 7 == 0) {
            type = 0;
        }
        var color;
        if (type == 0) {
            color = "#00D8FF";
        }
        if (type == 1) {
            color = "#1DDB16";
        }
        if (type == 2) {
            color = "red";
        }
        if (type == 3) {
            color = "#0100FF";
        }
        if (type == 4) {
            color = "orange";
        }
        if (type == 5) {
            color = "#FFE400";
        }
        if (type == 6) {
            color = "purple";
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetris[type][turn][i][j] == 1) {
                    document.getElementById("x" + (row + i) + "y" + (col + j)).bgColor = color;
                }
            }
        }
    }


    //다음블럭을 보는 함수
    nextColor(nextType, turn2, row2, col2) {
        var color;
        if (nextType % 7 == 0) {
            nextType = 0;
        }
        if (nextType == 0) {
            color = "#00D8FF";
        }
        if (nextType == 1) {
            color = "#1DDB16";
        }
        if (nextType == 2) {
            color = "red";
        }
        if (nextType == 3) {
            color = "#0100FF";
        }
        if (nextType == 4) {
            color = "orange";
        }
        if (nextType == 5) {
            color = "#FFE400";
        }
        if (nextType == 6) {
            color = "purple";
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (tetris[nextType][turn2][i][j] == 1) {
                    document.getElementById("sx" + ((row2 - 1) + i) + "sy" + ((col2 - 3) + j)).bgColor = color;
                } else {
                    document.getElementById("sx" + ((row2 - 1) + i) + "sy" + ((col2 - 3) + j)).bgColor = "white";
                }
            }
        }

    }
}