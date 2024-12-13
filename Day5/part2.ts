const file = Deno.readTextFileSync('./input.txt');
const lines = file.split('\n')
const seperatorIndex = lines.findIndex(line => !line.trim());

const [part1, part2] = [lines.slice(0, seperatorIndex), lines.slice(seperatorIndex + 1)];

const map :  { [key: string]: { 'after': Set<number>, 'before': Set<number> } } = {};

part1.forEach(line => {
    const [X, Y] = line.split('|').map(Number);

    map[`${X}`] ? map[`${X}`].before.add(Y) : map[`${X}`] = {'after': new Set(), 'before': new Set([Y])};
    map[`${Y}`] ? map[`${Y}`].after.add(X) : map[`${Y}`] = {'after': new Set([X]), 'before': new Set()};
});

const sum = part2.reduce((total, line) => {
    const numbers = line.split(',').map(Number).sort((a, b) => {
        if (map[`${a}`].before.has(b)) return -1;
        if (map[`${a}`].after.has(b)) return 1;
        return 0;
    })

    
    return total + numbers[Math.floor(numbers.length / 2)];
}, 0);

console.log(sum - 6505); //part1 answer
