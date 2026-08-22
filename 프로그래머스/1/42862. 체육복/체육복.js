// 바로 앞 뒤번호 학생에게만 빌려주기 가능 (왼쪽 주는 게 낫니, 오른쪽 주는 게 낫니)
// => 정렬 후 무조건 왼쪽 가능하면 주도록 셋업 (맨 왼쪽은 더 왼쪽 없음)
// N = 30 (완탐돌려도 가능하긴 함)
// 수업 들을 수 있는 학생의 최대값

function solution(n, lost, reserve) {
    // 중복 제거 + 학생 정렬
    let realLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
        
    for (let i = 0; i < realReserve.length; i++) {
        const lender = realReserve[i];
        
        const frontIndex = realLost.indexOf(lender - 1);
        if (frontIndex !== -1) {
            realLost.splice(frontIndex, 1);
            continue;
        }
        
        const backIndex = realLost.indexOf(lender + 1);
        if (backIndex !== -1) {
            realLost.splice(backIndex, 1);
        }
    }
    return n - realLost.length;
}