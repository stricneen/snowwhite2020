const aoc = require('./aoc');
const buffer = aoc.readfile('day8.txt');
const text = buffer.split(/\n/);

const denoms = [50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];

const items = (amount, count) => {
    if (amount == 0) return count;
    const d = denoms.find((x) => x <= amount);
    return items(amount - d, count + 1);
}

const ans = text
    .map(x => x.split(','))
    .map(x => parseFloat(x[1]) * 100)
    .map(x => items(x, 0))
    .reduce((a,e) => a + e, 0);

console.log(ans);