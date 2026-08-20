function solution(operations) {
    let dq = [];
    //10 ^ 6 1회
    let max = 0, min = 0;
    for (let i=0; i < operations.length; i++) {
        const [op, t] = operations[i].split(" ");
        switch (op) {
            case "I": 
                dq.push(Number(t));
                // N log N (max 10 ^ 6 => 10 ^ 14, 터질 수 있음)
                dq = dq.sort((a, b) => b - a);
                break;
            case "D":
                // N
                dq.splice(t > 0 ? 0 : -1, 1);
        }
    }
    return dq.length > 0 ?[dq[0], dq[dq.length - 1]] : [0, 0]
}