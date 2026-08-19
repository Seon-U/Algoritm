function solution(progresses, speeds) {
    var answer = [];
    let lastDates = [];
    const N = progresses.length;
    
    for (let i=0; i < N; i++) {
        lastDates.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let curr = 0;
    let next = 1;
    
    while (curr < N) {
        let cnt = 1;
        while (next < N && lastDates[next] <= lastDates[curr]) {
            cnt++;
            next++;
        }
        answer.push(cnt);
        curr = next;
        next = curr + 1;
    }
        
    return answer;
}