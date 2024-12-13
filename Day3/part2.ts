const inputString = await Deno.readTextFile('./input.txt');
const regex = /mul\((\d{1,3}),\s*(\d{1,3})\)|don't|do/g; 

let match, sum  = 0, dont = false;

while ((match = regex.exec(inputString)) !== null) {
    if (match[0].startsWith('do')) dont = false;
    if (match[0].startsWith('don')) dont = true;

    if (!dont) sum += match[0].slice(4, -1).split(',').map(Number).reduce((acc, curr) => acc * curr, 1);
}

console.log(sum);
