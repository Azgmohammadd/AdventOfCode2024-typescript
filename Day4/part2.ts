const file = Deno.readTextFileSync('./input.txt');
const lines = file.split('\n');
let sum = 0;

for (let lineIndex = 0; lineIndex < lines.length - 2; lineIndex++) {
    for (let charIndex = 0; charIndex < lines[lineIndex].length - 2; charIndex++) {
        if (
            lines[lineIndex][charIndex] === 'M' &&
            lines[lineIndex + 2][charIndex] === 'M' &&
            lines[lineIndex][charIndex + 2] === 'S' &&
            lines[lineIndex + 2][charIndex + 2] === 'S' &&
            lines[lineIndex + 1][charIndex + 1] === 'A'
        )
        sum += 1;
        
        if (
            lines[lineIndex][charIndex] === 'S' &&
            lines[lineIndex + 2][charIndex] === 'S' &&
            lines[lineIndex][charIndex + 2] === 'M' &&
            lines[lineIndex + 2][charIndex + 2] === 'M' &&
            lines[lineIndex + 1][charIndex + 1] === 'A'
        )
        sum += 1;

        if (
            lines[lineIndex][charIndex] === 'S' &&
            lines[lineIndex + 2][charIndex] === 'M' &&
            lines[lineIndex][charIndex + 2] === 'S' &&
            lines[lineIndex + 2][charIndex + 2] === 'M' &&
            lines[lineIndex + 1][charIndex + 1] === 'A'
        )
        sum += 1;

        if (
            lines[lineIndex][charIndex] === 'M' &&
            lines[lineIndex + 2][charIndex] === 'S' &&
            lines[lineIndex][charIndex + 2] === 'M' &&
            lines[lineIndex + 2][charIndex + 2] === 'S' &&
            lines[lineIndex + 1][charIndex + 1] === 'A'
        )
        sum += 1;
    }    
}

console.log(sum);
