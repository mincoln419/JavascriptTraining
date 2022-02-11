
import {erase, drawmaze} from "./util";

function inputFunction(input) {
    switch (input) {
        case 119: //up
            map[nowX][nowY] = 0;
            nowX--;
            if (map[nowX][nowY] == 1) {
                nowX++;
            }
            map[nowX][nowY] = 3;
            break;
        case 100: //right
            map[nowX][nowY] = 0
            nowY++;
            if (map[nowX][nowY] == 1) {
                nowY--;
            } else if (map[nowX][nowY] == 2) {
                alert("축하합니다! 클리어하셨습니다.")
            }
            map[nowX][nowY] = 3;
            break;
        case 97: //left
            map[nowX][nowY] = 0;
            nowY--;
            if (map[nowX][nowY] == 1) {
                nowY++;
            }
            map[nowX][nowY] = 3;
            break;
        case 115: //down
            map[nowX][nowY] = 0;
            nowX++;
            if (map[nowX][nowY] == 1) {
                nowX--;
            }
            map[nowX][nowY] = 3;
            break;
    }
    erase();
    drawmaze();

};