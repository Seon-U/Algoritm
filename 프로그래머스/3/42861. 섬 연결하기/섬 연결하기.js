// 프림 알고리즘
// 임의의 섬 하나에서 시작해서, 현재 연결된 섬들과 '아직 연결되지 않은 섬'을 잇는 가장 싼 다리를 하나씩 확장해 나간다.
// 밀집 그래프 (간선수 > 노드 수) => 최선의 선택
function solution(n, costs) {
    const graph = Array.from({length: n}, () => []);
    for (const [u, v, cost] of costs) {
        graph[u].push([v, cost]);
        graph[v].push([u, cost]);
    }
    
    const visited = new Array(n).fill(false);
    const minEdge = new Array(n).fill(Infinity);
    
    let totalCost = 0;
    minEdge[0] = 0;
    
    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || minEdge[j] < minEdge[u])) u = j;
        }
        
        visited[u] = true;
        totalCost += minEdge[u];
        
        for (const [next, cost] of graph[u]) {
            if (!visited[next] && cost < minEdge[next]) {
                minEdge[next] = cost;
            }
        }
    }
    return totalCost;
}