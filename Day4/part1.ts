const file = await Deno.readTextFile('./input.txt')

const lines = file.split('\n')
let sum = 0;

function horizontal(lineIndex: number, charIndex: number): void {
    //Check XMAS
    if (lines[lineIndex].length - 1 >= charIndex + 3)
        if (lines[lineIndex].slice(charIndex, charIndex+4).includes('XMAS')) sum += 1;
    
    //Check SAMX
    if (0 <= charIndex - 3)
        if (lines[lineIndex].slice(charIndex-3, charIndex + 1).includes('SAMX')) sum += 1;
}

function vertical(lineIndex: number, charIndex: number) : void {
    /* chack
        X
        M
        A
        S
    */
    if (lines.length - 1 >= lineIndex + 3) {
        if (lines[lineIndex + 1][charIndex] === 'M' &&  lines[lineIndex + 2][charIndex] === 'A' && lines[lineIndex + 3][charIndex] === 'S') sum += 1;
    }

    /* chack
        S
        A
        M
        X
    */
   if (lineIndex >= 3) {
        if (lines[lineIndex - 1][charIndex] === 'M' && lines[lineIndex - 2][charIndex] === 'A' && lines[lineIndex - 3][charIndex] === 'S') sum += 1;
    }

}

function diagonal(lineIndex: number, charIndex: number) : void {
    if (lineIndex + 3 <= lines.length - 1) {
        if (lines[lineIndex].length - 1 >= charIndex + 3) {
            if (lines[lineIndex + 1][charIndex + 1] === 'M' && lines[lineIndex + 2][charIndex + 2] === 'A' && lines[lineIndex + 3][charIndex + 3] === 'S') sum += 1;
        }
    }

    if (lineIndex >= 3) {
        if (charIndex >= 3) {
            if (lines[lineIndex - 1][charIndex - 1] === 'M' && lines[lineIndex - 2][charIndex - 2] === 'A' && lines[lineIndex - 3][charIndex - 3] === 'S') sum += 1;
        }
    }
    
    if (lineIndex + 3 <= lines.length - 1) {
        if (charIndex - 3 >= 0) {
            if (lines[lineIndex + 1][charIndex - 1] === 'M' && lines[lineIndex + 2][charIndex - 2] === 'A' && lines[lineIndex + 3][charIndex - 3] === 'S') sum += 1;
        }
    }

    if (lineIndex >= 3) {
        if (lines[lineIndex].length - 1 >= charIndex + 3) {
            if (lines[lineIndex - 1][charIndex + 1] === 'M' && lines[lineIndex - 2][charIndex + 2] === 'A' && lines[lineIndex - 3][charIndex + 3] === 'S') sum += 1;
        }
    }
}

for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    for (let charIndex = 0; charIndex < lines[lineIndex].length; charIndex++) {
        if (lines[lineIndex][charIndex] === 'X') {
            horizontal(lineIndex, charIndex);
            vertical(lineIndex, charIndex);
            diagonal(lineIndex, charIndex);
        }
    }
}

console.log(sum);

