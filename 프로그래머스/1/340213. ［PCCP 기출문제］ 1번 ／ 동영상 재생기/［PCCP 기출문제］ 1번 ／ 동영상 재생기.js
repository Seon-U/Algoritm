function solution(video_len, pos, op_start, op_end, commands) {
    const makeSc = (timeString) => {
        const [min, sc] = timeString.split(":").map(Number);
        return min * 60 + sc;
    }
    
    const sc_videoEnd = makeSc(video_len);
    const sc_opStart = makeSc(op_start);
    const sc_opEnd = makeSc(op_end);
    let scPos = makeSc(pos);
    
    const makeTimeString = (sc) => {
        const min = Math.floor(sc / 60).toString().padStart(2, "0");
        sc = (sc % 60).toString().padStart(2, "0");
        return `${min}:${sc}`;
    }
    
    const skipOp = () => {
        if (scPos >= sc_opStart && scPos < sc_opEnd) scPos = sc_opEnd;
    }
    
    skipOp();
    
    for (const cmd of commands) {
        if (cmd == "prev") {
            scPos = (scPos - 10) < 0 ? 0 : scPos - 10;
        } else {
            scPos = scPos + 10 > sc_videoEnd ? 
                sc_videoEnd : scPos + 10;
        }
        skipOp();
    }
    
    return makeTimeString(scPos);
}