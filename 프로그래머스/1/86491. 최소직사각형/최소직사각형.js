function solution(sizes) {
    let minW = 0;
    let minH = 0;
    for (let i=0; i < sizes.length; i++) {
        if (sizes[i][0] >= sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        minW = Math.max(minW, sizes[i][0]);
        minH = Math.max(minH, sizes[i][1]);
    }
    
    return minW * minH;
}