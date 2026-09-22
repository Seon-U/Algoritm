function solution(my_string, m, c) {
    const N = my_string.length;
    
    var answer = '';
    
    for (let i = 0; i < N; i += m) {
        answer += my_string[i + c - 1];
    }
    
    return answer;
}