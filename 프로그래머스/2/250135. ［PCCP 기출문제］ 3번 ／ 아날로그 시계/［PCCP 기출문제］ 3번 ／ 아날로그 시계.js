function toS(h, m, s) {
    return h * 3600 + m * 60 + s;
}

// t = k*(num/den), 0<=t<=T 인 k의 개수 ("이하")
function countOverlaps(T, num, den) {
    if (T < 0) return 0;
    return Math.floor((T * den) / num) + 1;
}

// t = k*(num/den), t < T 인 k의 개수 ("미만")
function countLessThan(T, num, den) {
    const A = T * den;
    if (A <= 0) return 0;
    return Math.floor((A - 1) / num) + 1;
}

function rangeCount(T1, T2, num, den) {
    return countOverlaps(T2, num, den) - countLessThan(T1, num, den);
}

function solution(h1, m1, s1, h2, m2, s2) {
    const T1 = toS(h1, m1, s1);
    const T2 = toS(h2, m2, s2);    
    
    const minuteOverlap = rangeCount(T1, T2, 3600, 59);
    const hourOverlap = rangeCount(T1, T2, 43200, 719);
    const tripleOverlap = rangeCount(T1, T2, 43200, 1);
    
    return minuteOverlap + hourOverlap - tripleOverlap;
}