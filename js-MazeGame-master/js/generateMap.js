var defaultMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


/**
 * 미로 생성 규칙
 * 
 * 
 * 
 */
export function getRandomMap() {

    for (var y = 1; y < 14; y++) {
        for (var x = 1; x < 14; x++) {

            if (y == 13 && x == 1) {
                defaultMap[y][x] = 3;
            } else {
                defaultMap[y][x] = getRandom(2);
            }
        }
    }

    return defaultMap;
}


function getRandom(divNum = 1){
    return Math.ceil(Math.random() * 10) % divNum;
}


const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = new Array();
function makeRoute(x, y){

    while(true){
        let randInt = getRandom(4);
        let nextX = x + dx[randInt];
        let nextY = y + dy[randInt];

        if(nextX > 1 || nextX < 14)continue;
        if(nextY > 1 || nextY < 14)continue;
        break;
    }
}