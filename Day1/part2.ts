const map = new Map<number, number>();
const leftGroup: Array<number> = [];

const file = await Deno.readTextFile('./input1.txt');
const lines = file.split('\n');

for (const line of lines) {
  const [left, right] = line.split(',').map(Number).filter(Boolean);
  leftGroup.push(left);

  const count = map.get(right) ?? 0;
  map.set(right, count + 1);
}

const sum = leftGroup.reduce((total, current) => {
  const count = map.get(current) ?? 0;
  return total + current * count;
}, 0);



console.log(sum);

