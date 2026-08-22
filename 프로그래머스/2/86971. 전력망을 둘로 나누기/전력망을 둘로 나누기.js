
// node별 연결된 node의 갯수 순회 -> 어떤 자료 구조가 유리할까?
function solution(n, wires) { 
    const tree = Array.from({length: n + 1}, v => []);
    for (const [n1, n2] of wires) {
        tree[n1].push(n2);
        tree[n2].push(n1);
    }
    
    let minGap = Infinity;
    
    const dfs = (currN, blockedN, isVisited) => {
        isVisited[currN] = true;
        let cnt = 1;
        
        for (let next of tree[currN]) {
            if (!isVisited[next] && next !== blockedN) {
                cnt += dfs(next, blockedN, isVisited);
            }
        }
        return cnt;
    }
    
    for (const [n1, n2] of wires) {
        const isVisited = Array(n + 1).fill(false);
        const leftCnt = dfs(n1, n2, isVisited);
        const rightCnt = n - leftCnt;
        const gap = Math.abs(leftCnt - rightCnt);
        
        minGap = Math.min(minGap, gap);
    }
    
    return minGap;
}