function solution(video_len, pos, op_start, op_end, commands) {
    const makeSc = (timeString) => {
        const [min, sc] = timeString.split(":").map(Number);
        return min * 60 + sc;
    }
    
    const makeTimeString = (sc) => {
        let min = Math.floor(sc / 60);
        min = min < 10 ? `0${min}` : min;
        sc = sc % 60;
        sc = sc < 10 ? `0${sc}` : sc;
        return `${min}:${sc}`;
    }
    
    const sc_videoEnd = makeSc(video_len);
    const sc_opStart = makeSc(op_start);
    const sc_opEnd = makeSc(op_end);
    let scPos = makeSc(pos);
    
    if (scPos >= sc_opStart && scPos < sc_opEnd) {
        scPos = sc_opEnd;
    };
    
    for (const cmd of commands) {
        if (cmd == "prev") {
            (scPos - 10) < 0 ? scPos = 0 : scPos -= 10;
        } else {
            scPos + 10 > sc_videoEnd ? scPos = sc_videoEnd : scPos += 10;
        }
        if (scPos >= sc_opStart && scPos < sc_opEnd) {
            scPos = sc_opEnd;
        }
    }
    return makeTimeString(scPos);
}