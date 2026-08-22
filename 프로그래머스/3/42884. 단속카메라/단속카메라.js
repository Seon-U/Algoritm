// N = 10 ^ 4
function solution(routes) {
    const sortedR = routes
        .map((v) => v[0] > v[1] ? [v[1], v[0]] : [v[0], v[1]])
        .sort((a, b) => a[1] - b[1]);
    
    let cameraCount = 0;
    let lastCamera = -Infinity;
    
    for (const [st, e] of sortedR) {
        if (st > lastCamera) {
            cameraCount++;
            lastCamera = e;
        }
    }
    
    return cameraCount;
}