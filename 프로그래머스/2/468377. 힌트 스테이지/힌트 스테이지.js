function solution(cost, hint) {
    const n = cost.length;
    const memo = new Map();
    
    function solve(round, hints) {
        if (round === n) return 0;
        
        const key = `${round}_${hints.join(',')}`;
        if (memo.has(key)) return memo.get(key);
        
        const usable = Math.min(hints[round], cost[round].length - 1);
        const stageCost = cost[round][usable];
        
        let best = stageCost + solve(round + 1, hints);
        
        if (round < n - 1) {
            const [hintCost, ...ticketNumbers] = hint[round];
            const newHints = [...hints];
            for (const num of ticketNumbers) newHints[num - 1]++;
            const candidate = stageCost + hintCost + solve(round + 1, newHints);
            best = Math.min(best, candidate);
        }
        memo.set(key, best);
        return best;
    }
    
    return solve(0, Array(n).fill(0));
}