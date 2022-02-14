import {
    drawBoard,
    nextBoard,
    changeColor
} from "./drawBoard.js";

import Block from "./store.js";

import {
    myFunction
} from "./ioController.js";

import {
    nextColor
} from "./blockMove.js";

import GameEngin from "./gameEngin.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const board = new Board();
    const block = new Block();
    var tetris = block.tetris;
    var gamepan = block.gamepan;
    var engin  = drawBoard(board, initEngin);
    nextBoard(board);

    function initEngin(){
        return new GameEngin(board, tetris, gamepan);
    }

    nextColor(board.nextType, board.turn2, board.row2, board.col2, tetris);
    document.addEventListener('keydown', (e) => myFunction(e.key, board, engin)); //키보드를 입력받아 처리해주는 함수호출
    
    var intervalID = setInterval(engin.playCheck(board, tetris, gamepan), 300);

    //꽉찬 줄을 지우는 함수
    function deleteLine() {
        for (var i = 0; i < board.rowSize; i++) {
            for (var j = 0; j < board.colSize; j++) {
                if (gamepan[i][j] == 0) {
                    break;
                } else if (gamepan[i][j] == 1 && j == board.colSize - 1) {
                    count++;
                    for (var i2 = i; i2 > 0; i2--) {
                        for (var x = 0; x < board.colSize; x++) {
                            document.getElementById("x" + i2 + "y" + x).bgColor = "white";
                            gamepan[i2][x] = gamepan[(i2 - 1)][x];
                            var oldId = document.getElementById("x" + i2 + "y" + x);
                            var newId = document.getElementById("x" + (i2 - 1) + "y" + x);
                            oldId.bgColor = newId.bgColor;
                            newId.bgColor = "white";
                        }
                    }
                }
            }
        }
    }
}

class Board {
    constructor() {
        this.colSize = 12;
        this.rowSize = 25;
        this.row = 0;
        this.col = 4;
        this.turn = 0;
        this.row2 = 2;
        this.col2 = 4;
        this.turn2 = 0;
        this.type = Math.round(Math.random() * 6); //처음불러오는 블럭을 랜덤으로 불러옴
        this.nextType = Math.round(Math.random() * 6); //처음불러오는 넥스트블럭을 랜덤으로 불러옴
    }
}






