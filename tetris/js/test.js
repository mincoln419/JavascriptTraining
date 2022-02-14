var colSize = 12;
var rowSize = 25;
var row = 0,
    col = 4,
    turn = 0;
var row2 = 2,
    col2 = 4,
    turn2 = 0;
var type = Math.round(Math.random() * 6); //처음불러오는 블럭을 랜덤으로 불러옴
var nextType = Math.round(Math.random() * 6); //처음불러오는 넥스트블럭을 랜덤으로 불러옴


//게임테이블
document.write("<div id='wrap'>");
document.write("<div id='gameTable'>");
document.write("<table border='1'>");
document.write("<caption>*4:left,6:right,2:down,5:rotate,spacebar:drop*</caption>");
for (var i = 0; i < rowSize; i++) {
    document.write("<tr>");
    for (var j = 0; j < colSize; j++) {
        document.write("<td id='x" + i + "y" + j + "'> </td>");
        document.getElementById("x" + (i) + "y" + (j)).bgColor = "white";
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");




//다음블럭보는 테이블
document.write("<div id='nextBlock'>");
document.write("<table border='1'>");
document.write("<caption>NEXT BLOCK</caption>")
for (var i = 0; i < 6; i++) {
    document.write("<tr>");
    for (var j = 0; j < 6; j++) {
        document.write("<td id='sx" + i + "sy" + j + "'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");
document.write("</div>");

//색상변경
function ChangeColor(x, y, color) {
    document.getElementById("x" + x + "y" + y).bgColor = color;
}

//테트리스 블럭구현
var tetris = [
    [
        [ /////////짝대기
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],
    [
        [ //개단1
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [ //계단2
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [ //기역
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 1],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [ //ㄴ 
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [ //ㅁ
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [ //ㅗ
            [0, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ]
    ]
];
var gamepan = //이동가능한 공간을 비교할 배열 선언
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


//변수값을 받아 블럭을 종류에따라 색상을 지정하여 그리는 함수
function drawColor(type, turn, row, col) {

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
            if (tetris[type][turn][i][j] == 1) {
                document.getElementById("x" + (row + i) + "y" + (col + j)).bgColor = color;
            }
        }
    }
}


//그렸던 블럭을 지우는 함수
function deleteColor(type, turn, row, col) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (tetris[type][turn][i][j] == 1) {
                document.getElementById("x" + (row + i) + "y" + (col + j)).bgColor = "white";
            }
        }
    }
}


//다음블럭을 보는 함수
function nextColor(nextType, turn2, row2, col2) {
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
nextColor(nextType, turn2, row2, col2);





//값을 입력받아 블럭의 위치를 움직이는 함수
function myFunction(ChangeValue) {
    //alert('keyPress:'+String.fromCharCode(ChangeValue))
    //alert('keyPress:'+ChangeValue)
    if (turn % 4 == 0) {
        turn = 0;
    }
    switch (ChangeValue) {
        case 53: //5번 turn
            ghostDelete(type, turn, row, col);
            deleteColor(type, turn, row, col);
            var tmpturn = turn + 1;
            if (tmpturn > 3) {
                tmpturn = 0;
                if (isMove(type, tmpturn, row, col)) {
                    turn++;
                    if (turn % 4 == 0) {
                        turn = 0;
                    }
                }
            } else {
                if (isMove(type, turn + 1, row, col)) {
                    turn++;
                }
            }
            ghostColor(type, turn, row, col);
            drawColor(type, turn, row, col);
            break;
        case 52: //4번 left
            ghostDelete(type, turn, row, col);
            deleteColor(type, turn, row, col);
            if (isMove(type, turn, row, col - 1)) {
                col--;
            }
            ghostColor(type, turn, row, col);
            drawColor(type, turn, row, col);
            break;
        case 54: //6번 right
            ghostDelete(type, turn, row, col);
            deleteColor(type, turn, row, col);
            if (isMove(type, turn, row, col + 1)) {
                col++;
            }
            ghostColor(type, turn, row, col);
            drawColor(type, turn, row, col);
            break;
        case 50: //2번 drop
            ghostDelete(type, turn, row, col);
            deleteColor(type, turn, row, col);
            if (isMove(type, turn, row + 1, col)) {
                row++;
            }
            ghostColor(type, turn, row, col);
            drawColor(type, turn, row, col);
            break;
        case 32: //스페이스바 drop
            ghostDelete(type, turn, row, col);
            deleteColor(type, turn, row, col);
            while (isMove(type, turn, row + 1, col)) {
                row++;
            }
            ghostColor(type, turn, row, col);
            drawColor(type, turn, row, col);
            arrayBlock(type, turn, row, col);
            deleteLine();
            row = 0;
            col = 4;
            type = nextType;
            nextType = Math.round(Math.random() * 6);
            nextColor(nextType, turn2, row2, col2);
            break;
    }
}


//움직일수있는지 확인하는 함수
function isMove(type, turn, row, col) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (tetris[type][turn][i][j] != 0) {
                if ((col + j) == (colSize) || (col + j) < 0) {
                    return false;
                }
                if ((row + i) == (rowSize)) {
                    return false;
                }
            }
            if (tetris[type][turn][i][j] != 0 && gamepan[row + i][col + j] != 0) {
                return false;
            }
        }
    }
    return true;
}




//고스트색상지정 함수
function ghostColor(type, turn, row, col) {
    var ghostRow = row;
    while (isMove(type, turn, ghostRow + 1, col)) {
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
            if (tetris[type][turn][i][j] == 1) {
                document.getElementById("x" + (ghostRow + i) + "y" + (col + j)).bgColor = color;
            }
        }
    }
}




//고스트삭제 함수
function ghostDelete(type, turn, row, col) {
    var ghostRow1 = row;
    while (isMove(type, turn, ghostRow1 + 1, col)) {
        ghostRow1++;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (tetris[type][turn][i][j] == 1) {
                document.getElementById("x" + (ghostRow1 + i) + "y" + (col + j)).bgColor = "white";
            }
        }
    }
}



//테트리스블럭을 띄우는 함수
function arrayBlock(type, turn, row, col) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (tetris[type][turn][i][j] != 0) {
                gamepan[row + i][col + j] = 1;
            }
        }
    }
}





//게임오버를 알리는 함수
function gameOver(type, turn, row, col) {
    for (var i = 0; i < colSize; i++) {
        if (gamepan[0][i] != 0) {
            var over = setTimeout(function () {
                clearInterval(intervalID);
            }, 0);
            alert("GAMEOVER!!!!");
        }
    }
}
var count = 0;





//게임클리어를 알리는 함수   
function gameClear() {
    if (count == 10) {
        var over = setTimeout(function () {
            clearInterval(intervalID);
        }, 0);
        alert("Congratulation!!!!");
    }
}




//꽉찬 줄을 지우는 함수
function deleteLine() {
    for (var i = 0; i < rowSize; i++) {
        for (var j = 0; j < colSize; j++) {
            if (gamepan[i][j] == 0) {
                break;
            } else if (gamepan[i][j] == 1 && j == colSize - 1) {
                count++;
                for (var i2 = i; i2 > 0; i2--) {
                    for (var x = 0; x < colSize; x++) {
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




var intervalID = setInterval(function () {
    gameClear(); //게임을 성공했는지확인
    gameOver(); //게임이 끝났는지 확인

    if (isMove(type, turn, row + 1, col)) { //블록이 아래로 이동가능하면
        ghostDelete(type, turn, row, col); //고스트 지우기
        deleteColor(type, turn, row, col); //블록 지우기
        row = row + 1; //로우 증가
        ghostColor(type, turn, row, col); //고스트 그리기
        drawColor(type, turn, row, col); //블록 그리기
    } else { //블록이 아래로 이동 불가능하면
        deleteLine(); //채워진 라인을 지우고
        arrayBlock(type, turn, row, col); //테트리스 블록을 불러오고
        row = 0;
        col = 4; //새로뜰 블록의 좌표를 정해주고
        type = nextType; //넥스트블록에 뜬 블록을 보드에 받아온다
        nextType = Math.round(Math.random() * 6); //넥스트블록에 넣을 새로운 난수를 받아옴
        nextColor(nextType, turn2, row2, col2); //넥스트블록에 새로받은 난수로 호출함
    }
}, 300);

myFunction(); //키보드를 입력받아 처리해주는 함수호출