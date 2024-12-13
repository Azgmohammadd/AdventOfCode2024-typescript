const inputString = await Deno.readTextFile('./input3.txt');
const regex = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;

let match, sum  = 0;

while ((match = regex.exec(inputString)) !== null) {
    sum += match[0].slice(4, -1).split(',').map(Number).reduce((acc, curr) => acc * curr, 1);
}

console.log(sum);