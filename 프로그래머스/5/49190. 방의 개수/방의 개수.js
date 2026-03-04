function solution(arrows) {
    const dx = [ 0,    1,    1,    1,    0,   -1,   -1,   -1];
    const dy = [ 1,    1,    0,   -1,   -1,   -1,    0,    1];
    
    const normalizeEdge = (x1, y1, x2, y2) => {
        if (x1 < x2 || (x1 === x2 && y1 < y2)) {
            return `${x1},${y1}-${x2},${y2}`;
        }
        return `${x2},${y2}-${x1},${y1}`;
    }

    const visitedNodes = new Set();
    const visitedEdges = new Set();

    let answer = 0;
    let x = 0, y = 0;

    visitedNodes.add(`${x},${y}`);

    for (const arrow of arrows) {
        for (let step = 0; step < 2; step++) {
            const nx = x + dx[arrow];
            const ny = y + dy[arrow];

            const nodeKey = `${nx},${ny}`;
            const edgeKey = normalizeEdge(x, y, nx, ny);

            if (!visitedEdges.has(edgeKey)) {
                if (visitedNodes.has(nodeKey)) {
                    answer++;
                }
                visitedEdges.add(edgeKey);
            }

            visitedNodes.add(nodeKey);
            x = nx;
            y = ny;
        }
    }

    return answer;
}