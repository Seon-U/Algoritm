function solution(video_len, pos, op_start, op_end, commands) {
    const makeSc = (timeString) => {
        const [min, sc] = timeString.split(":").map(Number);
        return min * 60 + sc;
    }
    
    const makeTimeString = (sc) => {
        const min = Math.floor(sc / 60).toString().padStart(2, "0");
        sc = (sc % 60).toString().padStart(2, "0");
        return `${min}:${sc}`;
    }
    
    const skipOp = () => {
        if (scPos >= sc_opStart && scPos < sc_opEnd) scPos = sc_opEnd;
    }
    
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    
    const sc_videoEnd = makeSc(video_len);
    const sc_opStart = makeSc(op_start);
    const sc_opEnd = makeSc(op_end);
    let scPos = makeSc(pos);
    
    skipOp();
    
    for (const cmd of commands) {
        const diff = cmd == "prev" ? -10 : 10;
        scPos = clamp(scPos + diff, 0, sc_videoEnd);
        skipOp();
    }
    
    return makeTimeString(scPos);
}