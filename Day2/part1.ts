const file = await Deno.readTextFile('./input.txt');

const reports = file.split('\n').map(line => line.split(' ').map(Number));

const sum = reports.reduce((total: number, report: number[]) => {
  const strictlyIncreasing = report[1] > report[0];

  for (let index = 1; index < report.length; index++) {
    const diff = report[index] - report[index - 1];
  
    if (diff === 0) return total;
    
    if (strictlyIncreasing) {
      if (!(1 <= diff && diff <= 3)) {
        return total;
      }
    }
    else {
      if(!(-3 <= diff && diff <= -1)) {
        return total;
      }
    }
  }
  return total + 1;
}, 0);

console.log(sum);
