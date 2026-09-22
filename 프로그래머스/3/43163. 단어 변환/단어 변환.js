// BFS, 그리고 그래프 특성 상 제일먼저 목적 달성이 가장 짧고, 
// 뒷 순위 방문 시 그보다 먼저 방문할 경우가 더 최단거리임 (여러 길 중 최단거리)
function solution(begin, target, words) {
    
    if (!words.includes(target)) return 0;
    
    const visited = new Set();

    visited.add(begin);
    const queue = [[begin, 0]];
    
    let head = 0;
    
    while (head < queue.length) {
        const [currWord, cnt] = queue[head];

        // 목적 달성 체크
        if (currWord === target) return cnt;

        // 넣어주기
        for (let word of words) {
            // 중복 순환 방지
            if (visited.has(word)) continue;

            // 1글자 차이 체크
            let diffCnt = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== currWord[i]) diffCnt++;
            }
            
            if (diffCnt === 1) {
                visited.add(word);
                queue.push([word, cnt + 1]);
            }
        }  
        
        head++;
    }
    
    return 0;
}