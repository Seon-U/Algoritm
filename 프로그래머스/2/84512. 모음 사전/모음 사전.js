const cache = new Map();

let count = 0;
const alphabet = ['A', 'E', 'I', 'O', 'U'];


function solution(word) { 
    if (cache.has(word)) return cache.get(word);
    
    const dfs = (w) => {
        if (w.length > 0 && !cache.has(w)) {
            count++;
            cache.set(w, count);
        }
        
        if (w === word) return true;
        if (w.length === 5) return false;
        
        for (const a of alphabet) {            
            const newW = w + a;    
            
            if (dfs(newW)) return true;
        }
        
        return false;
    }
    
    dfs('');
    return cache.get(word);
}