// 1차 dfs 효율 실패
// 2차 메모이제이션 추가
// 3차 역순 조회 설정

function solution(triangle) {
    const newT = triangle.slice();
    const height = triangle.length;
    
    for (let i = height - 2; i >= 0; i--) {
        for (let j = 0; j < newT[i].length; j++) {
            newT[i][j] += Math.max(newT[i + 1][j], newT[i + 1][j + 1]);
        }
    }
    
    return newT[0][0];
}