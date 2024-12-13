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
    const numbers = line.split(',').map(Number);
    
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const [beforeNumbers, afterNumbers] = [numbers.slice(0, index), numbers.slice(index + 1)];
        const { before: beforeMap, after: afterMap } = map[`${number}`];

        if(!beforeNumbers.every(number => afterMap.has(number))) return total;
        if(!afterNumbers.every(number => beforeMap.has(number))) return total;
    }

    
    return total + numbers[Math.floor(numbers.length / 2)];
}, 0);

console.log(sum);
