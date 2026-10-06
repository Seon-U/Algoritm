function solution(rectangle, characterX, characterY, itemX, itemY) {
    //1 ~ 50 까지 경우 2배 확대
    const SIZE = 102;
    
    const map = Array.from({length: SIZE}, () => new Array(SIZE).fill(0));
    
    for (const [lx, ly, rx, ry] of rectangle) {
        for (let x = lx * 2; x <= rx * 2; x++) {
            for (let y = ly * 2; y <= ry * 2; y++) {
                map[y][x] = 1;
            }
        }
    }
    
    for (const [lx, ly, rx, ry] of rectangle) {
        for (let x = lx * 2 + 1; x < rx * 2; x++) {
            for (let y = ly * 2 + 1; y < ry * 2; y++) {
                map[y][x] = 0;
            }
        }
    }
    
    
    const startX = characterX * 2;
    const startY = characterY * 2;
    const targetX = itemX * 2;
    const targetY = itemY * 2;
    
    const queue = [[startX, startY, 0]];
    let head = 0;
    
    const visited = Array.from({length: SIZE}, () => new Array(SIZE).fill(false));
    
    const directions = [
        [1, 0],
        [-1,0],
        [0, 1],
        [0, -1]
    ];
    
    while (head < queue.length) {
        const [x, y, distance] = queue[head++];
        
        if (x === targetX && y === targetY) return distance / 2;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
        
            if (nx < 0 || nx >= SIZE || ny < 0 || ny >= SIZE) continue;
            
            if (map[ny][nx] !== 1 || visited[ny][nx]) continue;
            
            visited[ny][nx] = true;
            queue.push([nx, ny, distance + 1]);
        }
    }
    
    return 0;
    
}