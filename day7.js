const aoc = require('./aoc');
const buffer = aoc.readfile('day7.txt');
const text = buffer.split(/\n/);

const earn = (mins) => {
    let tally = mins;
    const minsAt1 = tally < 480 ? tally : 480;
    tally -= 480;

    if (tally < 0) tally = 0;
    const minsAt15 = tally <= 240 ? tally : 240;
    tally -= 240

    if (tally < 0) tally = 0;
    const minsAt2 = tally;

    return parseFloat((((minsAt1 * 50) + (minsAt15 * 75) + (minsAt2 * 100)) / 60).toFixed(2));   
}

const ans = text
    .map(x => x.split(','))
    .map(x => parseInt(x[2]))
    .map(earn)
    .reduce((a,e) => a + e, 0);

console.log(parseInt(ans));