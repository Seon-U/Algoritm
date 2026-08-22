function solution(N, number) {
    if (N === number) return 1;
    
    const S = Array.from({length: 9}, () => new Set());
    
    for (let k = 1; k <=8; k++) {
        S[k].add(Number(String(N).repeat(k)));
        
        for (let i = 1; i < k; i++) {
            for (const num1 of S[i]) {
                for (const num2 of S[k - i]) {
                    S[k].add(num1 + num2);
                    S[k].add(num1 - num2);
                    S[k].add(num1 * num2);
                    
                    if (num2 !== 0) {
                        S[k].add(Math.floor(num1 / num2));
                    }
                }
            }
        }    
        if (S[k].has(number)) return k;
    }
    
    return -1;
}