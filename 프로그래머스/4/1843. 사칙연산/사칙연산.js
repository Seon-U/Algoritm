function solution(arr) {
    const nums = [];
    const ops = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) nums.push(Number(arr[i]));
        else ops.push(arr[i]);
    }
    
    const n = nums.length;
    const minDP = Array.from({length: n}, () => new Array(n).fill(0));
    const maxDP = Array.from({length: n}, () => new Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        minDP[i][i] = nums[i];
        maxDP[i][i] = nums[i];
    }
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            let mn = Infinity, mx = -Infinity;
            
            for (let k = i; k < j; k++) {
                const op = ops[k];
                let candMin, candMax;
                if (op === "+") {
                    candMin = minDP[i][k] + minDP[k + 1][j];
                    candMax = maxDP[i][k] + maxDP[k + 1][j];
                } else {
                    candMin = minDP[i][k] - maxDP[k + 1][j];
                    candMax = maxDP[i][k] - minDP[k + 1][j];
                }
                
                if (candMin < mn) mn = candMin;
                if (candMax > mx) mx = candMax;
            }
            
            minDP[i][j] = mn;
            maxDP[i][j] = mx;
        }
    }
    
    return maxDP[0][n - 1];
}