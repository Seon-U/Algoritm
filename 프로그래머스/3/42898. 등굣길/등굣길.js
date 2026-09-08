// 1차 dfs 스택 + 메모이제이션 => 시간초과 (효율성 4, 7, 8)
// 2차 DP 도입 => 메모이제이션 구조 효율화 (기존 좌표 통합 활용)

function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    
    const dp = Array.from({length: n}, () => Array(m).fill(0));
    const isPuddle = Array.from({length: n}, () => Array(m).fill(false));
    for (const [x, y] of puddles) {
        isPuddle[y - 1][x - 1] = true;
    }
    
    
    dp[0][0] = 1;
    
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if ((y === 0 && x === 0) || isPuddle[y][x]) continue;
            const up = y > 0 ? dp[y - 1][x] : 0;
            const left = x > 0 ? dp[y][x - 1] : 0;
            
            dp[y][x] = (up + left) % MOD;
        }
    }
    
    return dp[n - 1][m - 1];
}