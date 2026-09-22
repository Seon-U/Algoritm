function solution(begin, target, words) {
    let answer = 0;
    
    // push pop이 더 안전할지도 (최대 50!)
    const visited = new Set();
    
    // 초기값 세팅
    // state (현재 단어, 이전 단어갔는지 아닌지 체크(순환제거), 현재까지 거쳐온 개수)
    visited.add(begin);
    const queue = [[begin, visited]];
    
    while (0 < queue.length) {
        const [currWord, currVisited] = queue.shift();

        // 목적 달성 체크
        if (currWord === target) {
            const shiftCnt = currVisited.size - 1;
            
            if (answer === 0) answer = shiftCnt;
            else if (answer > shiftCnt) answer = shiftCnt;
            
        } else {
            // 넣어주기
            for (let word of words) {
                // 중복 순환 방지
                if (currVisited.has(word)) continue;

                // 1글자 차이 체크
                let diffCnt = 0;
                for (let i = 0; i < word.length; i++) {
                    if (word[i] !== currWord[i]) ++diffCnt;
                }
                if (diffCnt > 1) continue;

                const newVisited = new Set(currVisited).add(word);
                queue.push([word, newVisited]);
            }   
        }
    }
    
    return answer;
}