function solution(arr, queries) {
    const N = queries.length;
    const LIMIT = 1_000_001;
    
    const answer = [];
    
    for (const [s, e, k] of queries) {
        let minVal = LIMIT;
        for (let i = s; i <= e; i++) {
            if (arr[i] > k) minVal = Math.min(minVal, arr[i]);
            if (minVal === k + 1) break;
        }
        answer.push(minVal === LIMIT ? -1 : minVal);
    }
    
    return answer;
}