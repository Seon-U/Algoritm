function solution(s){
    if (s.length % 2 !== 0) return false;
    let cnt = 0;
    for (let c of s) {
       if (c === ")") {
           if (cnt === 0) return false;
           cnt--;
       } else {
           cnt++;
       }
    }
    return cnt === 0;
}