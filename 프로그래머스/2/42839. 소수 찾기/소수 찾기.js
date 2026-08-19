function dfs(str, status, numbers, isCheckBefore) {
    let count = 0;
    
    if (str.length > 0) {
        const num = Number(str); 
       if (!isCheckBefore.has(num)) {
           isCheckBefore.add(num);
           if (isPrime(num)) count++;
       }
    }
    
    for (let i=0; i < numbers.length; i++) {
        if (!status[i]) {
            status[i] = true;
            count += dfs(str + numbers[i], status, numbers, isCheckBefore);
            status[i] = false;
        }
    }
    
    return count;
}

function isPrime(num) {
    if (num < 2) return false;

    for (let i=2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const isCheckBefore = new Set();
    const status = Array.from({length: numbers.length}, () => false);
    
    return dfs("", status, numbers, isCheckBefore);
}