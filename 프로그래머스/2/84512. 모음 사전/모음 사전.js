function solution(word) {    
    // 반복하는 배열
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    let isFound = false;
    // 상태값 (현재 w, dfs 재귀로 queue 상태 공유, answer, isUsed는 외부 공유)
    const isUsed = new Set();
    
    const dfs = (w) => {
        if (w === word) {
            isFound = true; 
            return;
        }
        
        if (w.length === 5) return;
        
        for (const a of alphabet) {
            if (isFound) return;
            
            const newW = w + a;            
            if (!isUsed.has(newW)) {
                dfs(newW);
                isUsed.add(newW);
            }
        }
    }
    
    dfs('');
    return isUsed.size;
}