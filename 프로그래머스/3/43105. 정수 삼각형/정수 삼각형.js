// 1차 dfs 효율 실패
// 2차 메모이제이션 추가

function solution(triangle) {
    const height = triangle.length;
    const memo = Array.from({length: height}, () => Array(height).fill(-1));
    
    const dfs = (h, i) => {
        if (h === height - 1) return triangle[h][i];
        
        if (memo[h][i] !== -1) return memo[h][i];
        
        memo[h][i] = triangle[h][i] + Math.max(dfs(h + 1, i), dfs(h + 1, i + 1));
        
        return memo[h][i];
    }
    
    return dfs(0, 0);
}