// 등차수열의 합
// a + a + d + a + 2d + a + 3d .... a + nd
// => na + (1 ~ n)d => na +  n(n+1)/2 * d

function solution(a, d, included) {
    let answer = 0;
    for (let i=0; i < included.length; i++) {
        if (included[i]) answer += a + i * d;
    } 
    return answer;
}