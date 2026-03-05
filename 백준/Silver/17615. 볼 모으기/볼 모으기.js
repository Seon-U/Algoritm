const rl = require('readline');

const line = rl.createInterface(process.stdin, process.stdout);
let args = [];
let cnt = 0;

const answer = (n, arr) => {
    const redArr = [];
    const blueArr = [];

    arr[0] == "R" ? blueArr.push(0) : redArr.push(0);

    let cnt = 0;
    for (let i=0; i < arr.length - 1; i++) {
        cnt++;
        if (arr[i] != arr[i+1]) {
            arr[i] == "R" ? redArr.push(cnt) : blueArr.push(cnt);
            cnt = 0;
            if (i + 1 === arr.length - 1) arr[i + 1] == "R" ? redArr.push(1) : blueArr.push(1);
        } else if (i + 1 === arr.length - 1) {
            cnt++;
            arr[i + 1] == "R" ? redArr.push(cnt) : blueArr.push(cnt);
        }
    }

    arr[arr.length - 1] == "R" ? blueArr.push(0) : redArr.push(0);

    const getMinCnt = (arr) => {
        const skipIdx = arr[0] >= arr[arr.length - 1] ? 0 : arr.length - 1;
        let answer = 0;
        for (let i=0; i<arr.length; i++) {
            if (i != skipIdx) answer += arr[i];
        }
        return answer;
    }
    
    const redMin = getMinCnt(redArr);
    const blueMin = getMinCnt(blueArr);
    return Math.min(redMin, blueMin);
}


line.on("line",
    (v) => {
        args.push(v);
        cnt++;
        if (cnt >= 2) line.close();
    }
);

line.on("close", () => {
    console.log(answer(args[0], args[1]));
    process.exit();
});
