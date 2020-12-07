const assert = require('assert');


const decrypt = (code, rot) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const decrypt = code.split('').map((x,i) =>  chars[(chars.indexOf(x) + rot + i) % chars.length]).join('');
    return decrypt;
};

assert.equal(decrypt('AAAA', 1) , 'BCDE');
assert.equal(decrypt('7X68', 2) , '90AD');


const password = '3IO8LMHBP5ZZHUAX';
const rotations = [...Array(36).keys()].map(x => decrypt(password, x+1));

console.log(rotations.filter(x => x.includes('DWARF')));
