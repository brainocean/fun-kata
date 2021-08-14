const GRID_SIZE = 8;

function getCellValue(y, x, grid) {
    if( x<0 || x>=GRID_SIZE || y<0 || y>=GRID_SIZE) {
        return 0;
    } else {
        return grid[y][x];
    }
}

function getNeighborsCount(y, x, grid) {
    const neighborCoords = [
        [-1, -1], [-1, 0], [-1, 1], 
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];
    const neighborCount = neighborCoords.reduce( 
        (sum, coords)=>{ 
            return sum + getCellValue(y+coords[0], x+coords[1], grid);
        }, 
        0
    );
    return neighborCount;
}

function cellNextGen(value, x, y, grid) {
    const neighborCount = getNeighborsCount(x,y,grid);
    if (value === 0 && neighborCount === 3) {
        return 1;
    }
    if (value === 1 && (neighborCount === 2 || neighborCount === 3)) {
        return 1;
    }
    return 0;
}

function nextGeneration1(lastGeneration) {
    let newGeneration = [];
    for(let i=0;i<GRID_SIZE; i++) {
        newGeneration.push([]);
        for(let j=0; j<GRID_SIZE; j++) {
            newGeneration[i][j] = cellNextGen(lastGeneration[i][j], i, j, lastGeneration)
        }
    }
    return newGeneration;
}

function nextGeneration(lastGeneration) {
    return lastGeneration.map( 
        (row, x) => row.map( 
            (elm, y) => cellNextGen( elm, x, y, lastGeneration )
        )
    );
}

module.exports = nextGeneration;

function cellToTD(x, y, value) {
    const td = `<td class="${value===1 ? "cell-live" : "cell"}" id="${x+"-"+y}"></td>`;
    return td;
}

function rowToTR(y, row) {
    const tds = row.map( (cell, x) => cellToTD(x, y, cell) );
    return `<tr>${tds.join("")}</tr>`;
}

function gridToTable(grid) {
    const trs = grid.map((row, y) => rowToTR(y, row));
    return `<table>${trs.join("")}</table>`;
}