//다음블럭을 보는 함수
export function nextColor(nextType, turn2, row2, col2, tetris) {
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