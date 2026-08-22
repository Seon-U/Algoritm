// 프림 알고리즘
// 임의의 섬 하나에서 시작해서, 현재 연결된 섬들과 '아직 연결되지 않은 섬'을 잇는 가장 싼 다리를 하나씩 확장해 나간다.
// 밀집 그래프 (간선수 > 노드 수) => 최선의 선택

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._up(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down(0);
        return top;
    }
    
    _up(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    
    _down(i) {
        const len = this.heap.length;
        while (i * 2 + 1 < len) {
            let left = i * 2 + 1, right = i * 2 + 2, min = left;
            if (right < len && this.heap[right][0] < this.heap[left][0]) {
                min = right;
            }
            if (this.heap[i][0] <= this.heap[min][0]) break;
            [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
            i = min;
        }
    }
    
    size() {
        return this.heap.length;
    }
}



function solution(n, costs) {
    const graph = Array.from({length: n}, () => []);
    for (const [u, v, cost] of costs) {
        graph[u].push([cost, v]);
        graph[v].push([cost, u]);
    }
    
    const visited = new Array(n).fill(false);
    const pq = new MinHeap();
    
    pq.push([0, 0]);
    
    let totalCost = 0;
    let connectedCount = 0;
    
    
    while (pq.size() > 0) {
        const [cost, u] = pq.pop();
        
        if (visited[u]) continue;
        
        visited[u] = true;
        totalCost += cost;
        connectedCount++;
        
        if (connectedCount === n) break;
        
        for (const [nextCost, nextNode] of graph[u]) {
            if (!visited[nextNode]) {
                pq.push([nextCost, nextNode]);
            }
        }
    }
    
    return totalCost;
}