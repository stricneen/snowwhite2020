const aoc = require('./aoc');
const buffer = aoc.readfile('day7.txt');
const text = buffer.split(/\n/);

const items = (amount) => {


}

const ans = text
    .map(x => x.split(','))
    .map(x => parseInt(x[2]))
    .map(earn)
    .reduce((a,e) => a + e, 0);

console.log(parseInt(ans));