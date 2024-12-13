const leftGroup: Array<number> = [];
const rightGroup: Array<number> = [];

const file = await Deno.readTextFile('./input.txt');
const lines = file.split('\n');

for (const line of lines) {
  const [left, right] = line.split(',').map(value => +value).filter(Boolean);
  leftGroup.push(left)
  rightGroup.push(right)
}

leftGroup.sort((a, b) => a - b);
rightGroup.sort((a, b) => a - b)

let sum = 0;

for (let index = 0; index < 1000; index++) {
  sum += Math.abs(leftGroup[index] - rightGroup[index])
}

console.log(sum)

