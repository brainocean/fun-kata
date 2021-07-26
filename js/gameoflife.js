const { indexOf, last } = require("ramda");

function nextGeneration(lastGeneration) {
    const GRID_SIZE = 8;
    // for each cell, 
    //  if live neighbors count <=1, 
    //      then cell dies
    //  else cell lives
    lastGeneration.forEach((elm,y) => {
        elm.forEach((pic,x) => {
            let neighbors = [];
            if (y - 1 >= 0 && x - 1 >= 0) {
                neighbors.push(lastGeneration[y - 1][x - 1]);
            }
            if (y + 1 < GRID_SIZE && x + 1 < GRID_SIZE) {
                neighbors.push(lastGeneration[y + 1][x + 1]);
            }
            if (y - 1 >= 0 && x + 1 < GRID_SIZE) {
                neighbors.push(lastGeneration[y - 1][x + 1]);
            }
            if (y + 1 < GRID_SIZE && x - 1 >= 0) {
                neighbors.push(lastGeneration[y + 1][x - 1]);
            }
            if (y - 1 >= 0) {
                neighbors.push(lastGeneration[y - 1][x]);
            }
            if (y + 1 < GRID_SIZE) {
                neighbors.push(lastGeneration[y + 1][x]);
            }
            if (x - 1 >= 0) {
                neighbors.push(lastGeneration[y][x - 1]);
            }
            if (x + 1 < GRID_SIZE) {
                neighbors.push(lastGeneration[y][x + 1]);
            }
            let livingNeighbors = [];
            neighbors.forEach(element => {
                if (element = 1) {
                    livingNeighbors.push(element);
                }
            });
            if (livingNeighbors.length <= 1 || livingNeighbors.length >= 4) {
                lastGeneration[x,y] = 0;
            } else if (livingNeighbors.length == 3) {
                lastGeneration[x,y] = 1;
            }
        });
    });
    return lastGeneration;
}

module.exports = nextGeneration;