var d = document;

export function drawmaze(map) {
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (map[i][j] == 1) {
                ChangeColor(i, j, "#980000"); //벽돌
            } else if (map[i][j] == 2) {
                ChangeColor(i, j, "#FFFF48"); //출구
            } else if (map[i][j] == 3) {
                ChangeColor(i, j, "#90E4FF");
                d.getElementById("x" + i + "y" + j).innerHTML =
                    "<img src='Kkobuk.jpg' width='30' height='25'>"
            } else if (map[i][j] == 0) {
                ChangeColor(i, j, "white");
                d.getElementById("x" + i + "y" + j).innerHTML = "<img src=''>"
            }
        }
    }
}

export function erase() {
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            ChangeColor(i, j, "white");
        }
    }
}

export function ChangeColor(x, y, color) {
    d.getElementById("x" + x + "y" + y + "").bgColor = color;
}

