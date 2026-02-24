function solution(id_list, report, k) {
    const n = id_list.length;
    
    //1. indexOf(n)생략 용 Obj
    const idToIndex = {};
    id_list.forEach((id, i) => {
        idToIndex[id] = i;
    });
    
    const suedIdx_sue = Array.from({length: n}, () => new Set());
    const mailedCnt = new Array(n).fill(0);
    
    for (const rep of report) {
        const [sue, sued] = rep.split(" ");
        suedIdx_sue[idToIndex[sued]].add(sue);
    }
    
    for (let i=0; i<n ;i++) {
        if (suedIdx_sue[i].size >= k) {
            for (const suer of suedIdx_sue[i]) {
                mailedCnt[id_list.indexOf(suer)]++;
            }
        }
    }
    return mailedCnt;
}