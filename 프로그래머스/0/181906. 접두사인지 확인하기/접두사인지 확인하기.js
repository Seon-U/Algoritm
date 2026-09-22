function solution(my_string, is_prefix) {
    const N = is_prefix.length; 
    if (N > my_string.length) return 0;
    
    for (let i = 0; i < is_prefix.length; i++) {
        if (my_string[i] !== is_prefix[i]) return 0;
    }
    
    return 1;
}