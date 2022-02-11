import {
    drawmaze
} from "./boardDrawing.js";

import {
    inputFunction
} from "./ioController.js";

import {
    getRandomMap
} from "./generateMap.js";


document.addEventListener("DOMContentLoaded", main);

function main() {
    document.finshed = false;
    document.nowX = 13;
    document.nowY = 1;
    Board(drawmaze);
}

var map = getRandomMap();


function Board(callback) {
    for (var i = 0; i < 15; i++) {
        document.write("<table bgcolor='white' border='1'><tr>");
        for (var j = 0; j < 15; j++) {
            +document.write("<td id=x" + i + "y" + j + " width='30' height='30'></td>");
        }
        document.write("</tr></table>");

        if (i == 14) {
            callback(map);
            window.addEventListener('keydown', (e) => inputFunction(e.key, map));
        }
    }
}