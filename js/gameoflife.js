const { indexOf, last } = require("ramda");

function nextGeneration(lastGeneration) {
    const GRID_SIZE = 8;
    let newGeneration = [];
    for(let i=0;i<GRID_SIZE; i++) {
        newGeneration.push([]);
        for(let j=0; j<GRID_SIZE; j++) {
            newGeneration[i][j] = lastGeneration[i][j];
        }
    }
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
            let livingNeighborsCounter = 0;
            neighbors.forEach(element => {
                if (element === 1) {
                    livingNeighborsCounter += 1;
                }
            });
            if (livingNeighborsCounter <= 1 || livingNeighborsCounter >= 4) {
                newGeneration[y][x] = 0;
            } else if (livingNeighborsCounter === 3) {
                newGeneration[y][x] = 1;
            }
        });
    });
    return newGeneration;
}

module.exports = nextGeneration;