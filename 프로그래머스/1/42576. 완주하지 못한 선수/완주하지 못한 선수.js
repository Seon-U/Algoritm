function solution(participant, completion) {
    const pList = {};
    for (let p of participant) {
        if (!pList[p]) pList[p] = 1;
        else pList[p]++;
    }
    
    for (let c of completion) {
        pList[c]--;
    }
    
    for (let k in pList) {
       if (pList[k] !== 0) return k; 
    }
}