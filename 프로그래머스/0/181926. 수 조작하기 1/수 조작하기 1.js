function solution(n, control) {
    const op = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10,
    }
    
    for (const ch of control) {
        n += op[ch];
    }
        
    return n;
}