function solution(friends, gifts) {
    const n = friends.length;
    
    const index = {};
    for (let i = 0; i<n; i++) {
        index[friends[i]] = i;
    }
    
    const give = Array.from({length: n}, () => new Array(n).fill(0));
    const giftScore = new Array(n).fill(0);
    
    for (let i=0; i<gifts.length; i++) {
        const spaceIdx = gifts[i].indexOf(" ");
        
        const from = index[gifts[i].slice(0, spaceIdx)];
        const to = index[gifts[i].slice(spaceIdx + 1)];
        
        give[from][to]++;
        giftScore[from]++;
        giftScore[to]--;
    }
    
    const next = new Array(n).fill(0);
    
    for (let i=0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const ij = give[i][j];
            const ji = give[j][i];
            
            if (ij > ji) {
                next[i]++;
            } else if (ij < ji) {
                next[j]++;
            } else {
                if (giftScore[i] > giftScore[j]) {
                    next[i]++;
                } else if (giftScore[i] < giftScore[j]) {
                    next[j]++;
                }
            }
        }
    }
    return Math.max(...next);
}
