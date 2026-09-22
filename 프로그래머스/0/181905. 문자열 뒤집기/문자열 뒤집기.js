function solution(my_string, s, e) {
    const strArr = [...my_string];
    
    while (s < e) {
        const temp = strArr[s];
        strArr[s] = strArr[e]
        strArr[e] = temp;
        
        s++;
        e--;
    }
    
    return strArr.join('');
}