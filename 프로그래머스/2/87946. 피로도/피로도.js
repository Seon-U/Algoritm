// 피로도 시스템 (0이상의 정수로 표현합니다);
// 필요 피로도는 더 낮지만, 소모 피로도가 더 큰 경우 실행 순서가 반대인 것이 더 효율적일 수도 있음
// => 백트래킹 dfs
// "상태 값" - k, cnt, (isVisited, maxCnt => 외부 참조)
// "종료 조건(또는 기저 조건)", - !isVisited[i] && k >= dungeons[i][0] (리프노드 도착)
// "재귀 호출(방문)" - isVisited 변화 후 가능한 경우 호출, 다시 백트래킹
function solution(k, dungeons) {
    let maxCnt = 0;
    const isVisited = Array.from({length:dungeons.length}, (v) => false);
    
    
    const dfs = (k, cnt) => {  
        maxCnt = Math.max(maxCnt, cnt);
        
        for (let i=0; i < dungeons.length; i++) {
            if (!isVisited[i] && k >= dungeons[i][0]) {
                isVisited[i] = true;
                dfs(k - dungeons[i][1], cnt + 1);
                isVisited[i] = false;
            }
        }
    }
    
    dfs(k, maxCnt);
    return maxCnt;
}