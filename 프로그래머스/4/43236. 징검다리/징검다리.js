function solution(distance, rocks, n) {
    let answer = 0;
    
    rocks.sort((a, b) => a - b);
    
    const allPoints = [...rocks, distance];
    
    let left = 1;
    let right = distance;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let removedCount = 0;
        let prevPosition = 0;
        
        for (const currentPosition of allPoints) {
            if (currentPosition - prevPosition < mid) {
                removedCount++;
            } else {
                prevPosition = currentPosition;
            }
        }
        
        if (removedCount > n) {
            right = mid - 1;
        } else {
            answer = mid;
            left = mid + 1;
        }
    }
    
    return answer;
}