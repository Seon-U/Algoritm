function solution(answers) {
    const N = answers.length;
    const scores = [0, 0, 0];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const answerIdx = [];
    
    // 10 ^ 4
    for (let i=0; i< N; i++) {
        const answer = answers[i];
        if (first[i % first.length] === answer) scores[0]++;
        if (second[i % second.length] === answer) scores[1]++;
        if (third[i % third.length] === answer) scores[2]++;
    }
    
    // 3
    const scoresIdx = scores.map((v, i) => [v, i + 1]).sort((a, b) => b[0] - a[0]);
    
    // Max 3
    let i = 0;
    while (i < 3 && scoresIdx[0][0] === scoresIdx[i][0]) {
        answerIdx.push(scoresIdx[i][1]);
        i++;
    }
    
    return answerIdx;
    
}