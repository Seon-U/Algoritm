function solution(tickets) {
    const answer = [];
    
    const startLink = {};
    
    const N = tickets.length;
    
    // s -> e
    for (const [s, e] of tickets) {
        if (!startLink[s]) startLink[s] = [e];
        else startLink[s].push(e);
    }
    
    // 문자열 역순 정리
    for (const k in startLink) {
        startLink[k].sort((a, b) => b.localeCompare(a))
    }
    
    
    function dfs(currAirport) {
        while (startLink[currAirport] && startLink[currAirport].length > 0) {
            const next = startLink[currAirport].pop();
            dfs(next);
        }
        
        answer.push(currAirport);
    }
    
    dfs("ICN");
    
    return answer.reverse();        
}