const aoc = require('./aoc');
const buffer = aoc.readfile('day4.txt');
const text = buffer.split(/\n/);


const timesheets = text.map(x => {
    const parts = x.split(',');
    return {
        day: parseInt(parts[0]),
        time: parts[1],
        dwarf: parts[2],
        event: parts[3]
    };
});

const minsBetween = (s, e) => {
    const timeToMin = (t) => {
        const parts = t.split(':');
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    return timeToMin(e) - timeToMin(s);
}

const total = timesheets.reduce((acc, dwarf, i) => {
    if (i % 2 == 0) {
        acc.push(dwarf.time);
        return acc;
    } else {
        const last = acc[acc.length - 1];
        acc[acc.length - 1] = minsBetween(last, dwarf.time);
        return acc;
    }
}, []);

console.log(aoc.sum(total));