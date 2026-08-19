function solution(clothes) {
    let answer = 0;
    const categoryList = new Map();
    for (let [_, category] of clothes) {
        categoryList.set(category, (categoryList.get(category) || 0) + 1)
    }
    const list = [...categoryList.values()];
        
    const dfs = (start, cases) => {         
        for (let i = start; i < list.length; i++) {
            const newCases = cases * list[i];

            answer += newCases;
            
            dfs(i + 1, newCases);
        }
    }    
    
    dfs(0, 1);
    
    return answer;
}