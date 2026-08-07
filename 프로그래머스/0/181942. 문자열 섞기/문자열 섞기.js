function solution(str1, str2) {
    let answer = '';
    const n = Math.min(str1.length, str2.length);  
    for (let i = 0; i < n; i++) {
        answer += str1[i] + str2[i];
    }
    return answer;
}