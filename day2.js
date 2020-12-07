const dir = ['R8','L10','L8','L6','R6','R7','L5','L8','L1','L5','R10','R7','L2','R4','L1','R10','R8','R6','L6','R1'];

var example = ['R7', 'L3'];
var facing = 0;
// const dirs = ['n','e','s','w'];
var r = dir.reduce((acc, dir) => {
    const turn = dir[0];

    if (turn == 'R') {
        facing = ((facing + 5) % 4);
    } else {
        facing = ((facing + 3) % 4);
    }

    const d = parseInt(dir.substring(1));
    if (facing == 0) return {x: acc.x, y: acc.y + d};
    if (facing == 1) return {x: acc.x + d, y: acc.y};
    if (facing == 2) return {x: acc.x, y: acc.y - d};
    if (facing == 3) return {x: acc.x -d, y: acc.y};

    return acc;
}, {x:0, y:0});

console.log(r);
console.log((r.y * 9973) + r.x);