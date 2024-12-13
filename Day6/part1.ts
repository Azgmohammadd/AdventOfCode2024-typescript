const file = Deno.readTextFileSync('./input.txt');
const lines = file.split('\n');

enum DIRECTIONS {
    UP = 'UP',
    RIGHT = 'RIGHT',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
}

const DIRECTION_VECTORS: Record<DIRECTIONS, [number, number]> = {
    [DIRECTIONS.UP]: [-1, 0],
    [DIRECTIONS.RIGHT]: [0, 1],
    [DIRECTIONS.DOWN]: [1, 0],
    [DIRECTIONS.LEFT]: [0, -1],
};

const ROTATE_CLOCKWISE: Record<DIRECTIONS, DIRECTIONS> = {
    [DIRECTIONS.UP]: DIRECTIONS.RIGHT,
    [DIRECTIONS.RIGHT]: DIRECTIONS.DOWN,
    [DIRECTIONS.DOWN]: DIRECTIONS.LEFT,
    [DIRECTIONS.LEFT]: DIRECTIONS.UP,
};

let guardRow = -1;
let guardCol = -1;
let visited = 1;
let currentDirection: DIRECTIONS = DIRECTIONS.UP;
const map: string[][] = [];

const isBlock = (row: number, col: number): boolean => map[row][col] === '#';

const nextPos = (row: number, col: number, direction: DIRECTIONS): [number, number] => {
    const [dRow, dCol] = DIRECTION_VECTORS[direction];
    return [row + dRow, col + dCol];
};
    

// create map
for (let rowIndex = 0; rowIndex < lines.length; rowIndex ++) {
    const row = [];

    for (let colIndex = 0; colIndex < lines[rowIndex].length; colIndex++) {
        const char = lines[rowIndex][colIndex];
        
        if (char === '^') {
            guardRow = rowIndex;
            guardCol = colIndex;
        }

        row.push(char);
    }
    
    map.push(row);
}

// Main loop
while (true) {
    let [nextRow, nextCol] = nextPos(guardRow, guardCol, currentDirection);
    
    if (nextRow < 0 || nextRow >= map.length || nextCol < 0 || nextCol >= map[0].length) break;
    
    if (isBlock(nextRow, nextCol)) {
        currentDirection = ROTATE_CLOCKWISE[currentDirection];
        [nextRow, nextCol] = nextPos(guardRow, guardCol, currentDirection);
    } else {
        map[guardRow][guardCol] = 'V'
        guardRow = nextRow;
        guardCol = nextCol;
        if (map[guardRow][guardCol] !== 'V')  visited++;
    }
}

console.log(visited);