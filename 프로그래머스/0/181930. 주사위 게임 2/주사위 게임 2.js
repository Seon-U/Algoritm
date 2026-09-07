function solution(a, b, c) {
    const isABSame = a === b;
    const isBCSame = b === c;
    
    if (isABSame && isBCSame) {
        return a ** 6 * 27;
    } else if (!isABSame && !isBCSame && a !== c) {
        return a + b + c;
    } else {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    }
    
    return -1;
}