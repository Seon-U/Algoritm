function solution(cost, hint) {
    let minCost = Infinity;
    let head = 0;
    const queue = [{
        c: 0,
        r: 0,
        h: Array(cost.length).fill(0)
    }];
    
    const visited = new Set();
    
    while (head < queue.length) {
        const curr = queue[head];
        head++;        
        
        if (visited.has(`${curr.c}_${curr.r}_${curr.h.join(',')}`)) continue;
        visited.add(`${curr.c}_${curr.r}_${curr.h.join(',')}`);
        
        if (curr.r === cost.length) {
            minCost = Math.min(curr.c, minCost);
            continue;
        }
        
        const usable = Math.min(curr.h[curr.r], cost[curr.r].length - 1);
        
        const next = {
            c: curr.c + cost[curr.r][usable],
            r: curr.r + 1,
            h: [...curr.h],
        }
        
        queue.push(next);
        
        if (curr.r < cost.length - 1) {
            const [hintCost, ...hints] = hint[curr.r];
            const newHints = [...next.h];
            for (const hnum of hints) newHints[hnum - 1]++;
            
            const next2 = {
                c: next.c + hintCost,
                r: next.r,
                h: newHints
            }
                        
            queue.push(next2);
        }
    }
    return minCost;
}