const file = await Deno.readTextFile('./input.txt');

const reports = file.split('\n').map(line => line.split(' ').map(Number));

const checkCondition = (report: number[]) => {
  const strictlyIncreasing = report[1] > report[0];

  for (let index = 1; index < report.length; index++) {
    const diff = report[index] - report[index - 1];
  
    if (diff === 0) return false;
    
    if (strictlyIncreasing) {
      if (!(1 <= diff && diff <= 3)) {
        return false;
      }
    }
    else {
      if(!(-3 <= diff && diff <= -1)) {
        return false;
      }
    }
  }
  return true;

};
const sum = reports.reduce((total: number, report: number[]) => {
  for (let index = 0; index < report.length; index++) {
    const copy = [...report]
    copy.splice(index, 1)
    if (checkCondition(copy)) {
      return total + 1;
    }
  }
  return total;
}, 0);



console.log(sum);
