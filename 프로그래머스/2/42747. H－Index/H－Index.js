function solution(citations) {
    const n = citations.length;
    
    return citations.sort((a, b) => a - b).reduce((acc, v, i) => 
        acc = Math.max(acc, Math.min((n - i), v)), 0
    )
}