const file = Deno.readTextFileSync('./input.txt');
const lines = file.split('\n');

function generateExpressions(arr: number[], number: number): boolean {
    let finalSet = new Set<number>([arr[0]]);

    for (let index = 1; index < arr.length; index++) {
        const set = new Set<number>();

        for (const s of finalSet) {
            set.add(arr[index] + s);
            set.add(arr[index] * s);
            set.add(+`${s}${arr[index]}`)
        }
        finalSet = set;
    }

    return finalSet.has(number);
}

const total = lines.reduce((sum, line) => {
    const [result, rest] = line.split(":");
    const numbers = rest.trim().split(" ").map(Number);
    return generateExpressions(numbers, +result) ? sum + +result : sum;
}, 0);

console.log(`Total: ${total}`);
