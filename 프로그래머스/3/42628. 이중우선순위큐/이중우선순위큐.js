class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    push(val) {
        this.heap.push(val);
        this._up(this.heap.length - 1);
    }
    
    //logN
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down(0);
        return top;
    }
    
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    _up(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1 / 2));
            if (this.compare(this.heap[i], this.heap[parent]) <= 0) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
            
        }
    }
    
    _down(i) {
        const len = this.heap.length;
        while (i * 2 + 1 < len) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let target = left;
            
            if (right < len && this.compare(this.heap[right], this.heap[left]) > 0) {
                target = right;
            }
            if (this.compare(this.heap[target], this.heap[i]) <= 0) break;
            [this.heap[i], this.heap[target]] = [this.heap[target], this.heap[i]];
            i = target;
        }
    }
}




function solution(operations) {
    const maxHeap = new Heap((a, b) => a.val - b.val);
    const minHeap = new Heap((a, b) => b.val - a.val);
    
    const visited = new Array(operations.length).fill(false);
    
    operations.forEach((op, id) => {
        const [command, numStr] = op.split(' ');
        const num = Number(numStr);
        
        if (command === "I") {
            const node = { val: num, id };
            maxHeap.push(node);
            minHeap.push(node);
            visited[id] = true;
        } else if (num === 1) {
            //Lazy deletion
            while (maxHeap.peek() && !visited[maxHeap.peek().id]) {
                maxHeap.pop();
            }
            if (maxHeap.peek()) {
                visited[maxHeap.pop().id] = false;
            }
        } else if (num === -1) {
            //Lazy deletion
            while (minHeap.peek() && !visited[minHeap.peek().id]) {
                minHeap.pop();
            }
            if (minHeap.peek()) {
                visited[minHeap.pop().id] = false;
            }
        }
    });
    
    while (maxHeap.peek() && !visited[maxHeap.peek().id]) maxHeap.pop();
    while (minHeap.peek() && !visited[minHeap.peek().id]) minHeap.pop();
    
    if (!maxHeap.peek() || !minHeap.peek()) {
        return [0, 0];
    }
    
    return [maxHeap.peek().val, minHeap.peek().val];
}