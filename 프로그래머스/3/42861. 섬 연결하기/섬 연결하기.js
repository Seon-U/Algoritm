// 최소 비용
// N = 2 ^ ((100 * (100 - 1)) / 2) => 완탐 시 시간초과

// - 연결된 섬 => LinkedNode
// - 가장 작은 값 선택이 실패하는 경우 ? 있음
// A - 10-- B - 30-- C ( A - 20-- C)
// 그러나 전체 다리 정렬 => 10, 20, 30 중에 무조건 20먼저 연결
// 같은 연결 제공 X
// MST(최소 신장 트리) 역전현상 X (컷 정성 법칙)
// 그룹 연결 중 가장 저렴한 다리 E는 무조건 최소 비용 트리에 포함되어야 한다

//크루스칼 알고리즘
// 가장 비용이 적게 드는 다리부터 일단 연결한다. 단, 이미 연결된 섬들 사이에 다리를 놓아 '순환(사이클)'이 생기는 경우만 건너뛴다.
function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    
    const parent = Array.from({length: n}, (_, i) => i);
    
    function find(x) {
        if (parent[x] === x) return x;
        return (parent[x] = find(parent[x]));
    }
    
    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);
        
        if (rootA !== rootB) {
            if (rootA < rootB) {
                parent[rootB] = rootA;
            } else {
                parent[rootA] = rootB;
            }
            return true;
        }
        
        return false;
    }
    
    let totalCost = 0;
    let bridgesCount = 0;
    
    for (const [u, v, cost] of costs) {
        if (union(u, v)) {
            totalCost += cost;
            bridgesCount++;
            
            if (bridgesCount === n - 1) break;
        }
    }
    
    return totalCost;
}