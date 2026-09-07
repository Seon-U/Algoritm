function solution(n, control) {
    const move = (c) => {
        switch (c) {
            case "w": return n += 1;
            case "s": return n -= 1;
            case "d": return n += 10;
            case "a": return n -= 10;
        }
    }
    
    [...control].forEach(move);
        
    return n;
}