const input =
    [
    'DLLDUDRURDDLUDURDDRR',
    'ULUDDRRDUUDULRRULLUL',
    'DDRLDDRUURUURRRDLULD',
    'ULRUUDDRLUULUUULUURD',
    'LDRRRULLDLDDLUUUULUL',
    'DLDLLLLDRUDULLUDLLLR'
    ];

    // 789
    // 456
    // 123
    // *0#

const inp = 
[
'ULDR',	 
'UULDR',
'L',
'DDR',
'LR',
'UD',
];

// 554#55

const move = input.map(entry => {

    const e = entry.split('').reduce((a,c) => {

        let r = a;
        if (c == 'U' && a.y > 0) {
            r = {x: a.x, y:(a.y)-1};
        }
        if (c == 'D' && a.y < 3) {
            r = {x: a.x, y:(a.y)+1};
        }
        if (c == 'L' && a.x > 0) {
            r = {x: a.x-1, y:a.y};
        }
        if (c == 'R' && a.x < 2) {
            r = {x: a.x+1, y:a.y};
        }

        // console.log(c);
        return r;
     }, {x:1, y:1});
    
     console.log("-->" ,e);
    
    
    }

);