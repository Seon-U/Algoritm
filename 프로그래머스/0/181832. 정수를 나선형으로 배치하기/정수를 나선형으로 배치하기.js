function solution(n) {
    let answer = Array.from({length: n}, v => new Array(n).fill(0));
    const maxN = n * n;
    const dirs = [
        [0, 1], 
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let r = 0;
    let c = 0;
    let dh = 0;
    
    for (let i=1; i <= maxN; i++) {
       if (r < n && c < n && answer[r][c] === 0) {
           answer[r][c] = i;
       } else {
           const [bR, bC] = dirs[dh];
           --i;
           r -= bR;
           c -= bC;
           dh = (dh + 1) % 4;
       }
        const [pR, pC] = dirs[dh];
       r += pR;
       c += pC;
    }
    return answer;
}