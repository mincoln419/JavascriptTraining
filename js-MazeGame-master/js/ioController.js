import {
    erase,
    drawmaze
} from "./boardDrawing.js";

var d = document;
export function inputFunction(input, map) {
    if(d.finshed) return;
    switch (input) {
        case 'w': //up
            map[d.nowX][d.nowY] = 0;
            d.nowX--;
            if (map[d.nowX][d.nowY] == 1) {
                d.nowX++;
            }
            map[d.nowX][d.nowY] = 3;
            break;
        case 'd': //right
            map[d.nowX][d.nowY] = 0
            d.nowY++;
            if (map[d.nowX][d.nowY] == 1) {
                d.nowY--;
            } else if (map[d.nowX][d.nowY] == 2) {
                alert("축하합니다! 클리어하셨습니다.");
                d.finshed = true;
            }
            map[d.nowX][d.nowY] = 3;            
            break;
        case 'a': //left
            map[d.nowX][d.nowY] = 0;
            d.nowY--;
            if (map[d.nowX][d.nowY] == 1) {
                d.nowY++;
            }
            map[d.nowX][d.nowY] = 3;
            break;
        case 's': //down
            map[d.nowX][d.nowY] = 0;
            d.nowX++;
            if (map[d.nowX][d.nowY] == 1) {
                d.nowX--;
            }
            map[d.nowX][d.nowY] = 3;
            break;
    }
    erase(map);
    drawmaze(map);
};