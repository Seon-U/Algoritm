function solution(numbers) {
    let answer = 0;
    const isCheckBefore = new Set();
    
    const isPrime = (num) => {
        if (num === 2) return true;
        if (num < 2) return false;
        
        for (let i=2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const queue = [];
    for (let i=0; i< numbers.length; i++) {
        const num = numbers[i];
        queue.push([num, Array.from({length: numbers.length}, (_, idx) => idx === i)]);
    }
    
    let head = 0;
    while (head < queue.length) {
        const round = queue[head][0].length;
        const num = +queue[head][0];
        const status = queue[head][1];
        head++;
        
        if (isCheckBefore.has(num)) continue;
        isCheckBefore.add(num);
        
        if (isPrime(num)) answer++;
        
        if (round === numbers.length) continue;
        
        for (let i=0; i < numbers.length; i++) {
            if (!status[i]) {
                const newStatus = [...status];
                newStatus[i] = true;
                queue.push([num + numbers[i], newStatus]);
            }
        }
        
    }
    
    return answer;
}