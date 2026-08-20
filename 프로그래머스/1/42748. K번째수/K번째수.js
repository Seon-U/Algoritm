function solution(array, commands) {
    const answer = [];
    
    // O(50 * 200 * 100 = 10^5) safe
    for (let [s, e, idx] of commands) {
        const newArray = array.slice(s - 1, e).sort((a, b) => a - b);
        answer.push(newArray[idx - 1]);
    }
    
    return answer;
}