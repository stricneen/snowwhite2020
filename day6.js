const aoc = require('./aoc');
const buffer = aoc.readfile('day6.txt');
const text = buffer.split(/\n/);

const ans = text
    .map(x => x.split(','))
    .map(x => x.map(y => parseInt(y)))
    .map(x => x[2] * x[2] + x[3] * x[3] + x[4] *x[4])
    .map(x => x.toString())
    .map(x => x.split(''))
    .map(x => x.filter(y => '02468'.includes(y)))
    .map(x => x.length);

console.log(aoc.sum(ans));

