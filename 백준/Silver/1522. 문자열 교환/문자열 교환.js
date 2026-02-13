const fs = require("fs");

const list = fs.readFileSync(0, "utf-8").trim();
const length = list.length;

let aCount = 0;
for (const i of list) {
	if (i == "a") ++aCount;
}

let miCount = aCount;
for (let i=0; i<length; i++) {
    let bCount = 0;
    for (let j=i; j< i + aCount; j++) {
        if (list[j % length] == "b") bCount++;
    };

    if (bCount < miCount) miCount = bCount; 
}

console.log(miCount);