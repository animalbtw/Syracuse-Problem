const prompt = require('prompt-sync')();

let num = prompt('Enter a number: ');

function syracuseProblem(val) {
  let resultValue = []
  resultValue.push(val)
  if (val === 1) {
    resultValue.push(val)
  } else {
    while (val !== 1) {
      if (val % 2 === 0) {
        val = val / 2
        resultValue.push(val)
      } else if (val % 2 !== 0) {
        val = val * 3 + 1
        resultValue.push(val)
      }
    }
  }
  return resultValue
}

const result = syracuseProblem(Number(num))
console.log(result)