const { timeStamp } = require('console');
const aoc = require('./aoc');
const buffer = aoc.readfile('day5.txt');
const text = buffer.split(/\n/);

const values = text.map(x => parseInt(x.split(',')[2]));
const calc = values.map(x => Math.floor((x * 50 / 3)) - 2);
console.log(aoc.sum(calc));