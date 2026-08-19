function solution(arr) {
    const answer = [arr[0]];
    
    for (let i=1; i < arr.length; i++) {
        const last = answer[answer.length - 1];
        if (last === arr[i]) continue;
        answer.push(arr[i]);
    }
    
    return answer;
}