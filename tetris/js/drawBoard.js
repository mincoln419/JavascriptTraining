

    //처음 테이블 그리기
    export function drawBoard(board, callback) {
        document.write("<div id='wrap'>");
        document.write("<div id='gameTable'>");
        document.write("<table border='1'>");
        document.write("<caption>*4:left,6:right,2:down,5:rotate,spacebar:drop*</caption>");
        for (var i = 0; i < board.rowSize; i++) {
            document.write("<tr>");
            for (var j = 0; j < board.colSize; j++) {
                document.write("<td id='x" + i + "y" + j + "'> </td>");
                document.getElementById("x" + (i) + "y" + (j)).bgColor = "white";
            }
            document.write("</tr>");
        }
        document.write("</table>");
        document.write("</div>");

        return callback();
    }


    export function nextBoard() {
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
    }


    //색상변경
    export function changeColor(x, y, color) {
        document.getElementById("x" + x + "y" + y).bgColor = color;
    }