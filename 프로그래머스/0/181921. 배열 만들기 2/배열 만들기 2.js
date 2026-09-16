// 5, 1
// 50, 55, 10, 11
// 2진법 변환 자릿수 계산
function makeNumber(digits) {
    const min = 2 ** (digits - 1);
    const max = 2 ** digits - 1;
    const numbers = Array.from({length: max - min + 1}, (_, i) => (min + i).toString(2) * 5);
    return numbers;
}

function solution(l, r) {
    const answer = [];
    const minDigits = String(l).length;
    const maxDigits = String(r).length;    

    for (let i = minDigits; i <= maxDigits; i++) {
        const testingNumbers = makeNumber(i);
        for (let num of testingNumbers) {
            if (num >= l && num <= r) answer.push(num);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}