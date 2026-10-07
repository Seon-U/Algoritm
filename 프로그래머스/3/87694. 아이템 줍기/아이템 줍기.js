// console.log(MAP.map(v => v.join('')).join('\n')); use it for test

const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
];


function solution(rectangle, characterX, characterY, itemX, itemY, result) {
    
    const SAFEN = 102;
    
    const MAP = Array.from({length: SAFEN}, () => Array(SAFEN).fill(0));
    
    // 사각형 영역 1로 채우기 (중복도 1로 처리됨)
    for (const [lx, ly, rx, ry] of rectangle) {
        // 두 배 처리하기
        const drx = rx * 2;
        const dry = ry * 2;
        for (let x = lx * 2; x <= drx; x++) {
            for (let y = ly * 2; y <= dry; y++) {
                MAP[y][x] = 1;
            }
        }    
    }
    
    // 1 인 영역 중 테두리 안쪽을 전부 0으로 바꾸기 (중복 영역 관계 없이 제거)
    for (const [lx, ly, rx, ry] of rectangle) {
        const drx = rx * 2;
        const dry = ry * 2;
        for (let x = lx * 2 + 1; x < drx; x++) {
            for (let y = ly * 2 + 1; y < dry; y++) {
                MAP[y][x] = 0;
            }
        }    
    }

    
    const queue = [[characterX * 2, characterY * 2, 0]];
    let head = 0;
    
    while (head < queue.length) {
        const [currX, currY, distance] = queue[head++];
        
        //visited 처리
        MAP[currY][currX] = 0;
        
        if (currX === itemX * 2 && currY === itemY * 2) return Math.floor(distance / 2);
        
        for (const [dx, dy] of DIRECTIONS) {
            const [newX, newY] = [currX + dx, currY + dy];
            
            if (newX < 0 || newX > SAFEN ) continue;
            if (newY < 0 || newY > SAFEN ) continue;
            
            if (MAP[newY][newX] !== 1) continue;
           
            queue.push([newX, newY, distance + 1]);
        }
    }
    
    //ERROR
    return -1;
}