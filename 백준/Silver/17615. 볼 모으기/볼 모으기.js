const rl = require('readline');
const line = rl.createInterface(process.stdin, process.stdout);
let args = [];

const answer = (n, str) => {
    let rCount = 0, bCount = 0;
    for (const c of str) c === 'R' ? rCount++ : bCount++;

    let startLen = 0, endLen = 0;
    const startColor = str[0];
    const endColor = str[str.length - 1];

    for (let i = 0; i < str.length && str[i] === startColor; i++) startLen++;
    for (let i = str.length - 1; i >= 0 && str[i] === endColor; i--) endLen++;

    let ans = Infinity;

    if (startColor === 'R') {
        ans = Math.min(ans, rCount - startLen);
        ans = Math.min(ans, bCount - 0);       
    } else {
        ans = Math.min(ans, bCount - startLen);
        ans = Math.min(ans, rCount - 0);
    }

    if (endColor === 'R') {
        ans = Math.min(ans, rCount - endLen);
        ans = Math.min(ans, bCount - 0);
    } else {
        ans = Math.min(ans, bCount - endLen);
        ans = Math.min(ans, rCount - 0);
    }

    if (startColor === endColor) {
        const skipLen = Math.max(startLen, endLen);
        const targetCount = startColor === 'R' ? rCount : bCount;
        ans = Math.min(ans, targetCount - skipLen);
    }

    return ans;
};

line.on("line", (v) => {
    args.push(v.trim());
    if (args.length >= 2) line.close();
});

line.on("close", () => {
    console.log(answer(+args[0], args[1]));
    process.exit();
});