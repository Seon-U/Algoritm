function solution(clothes) {
    let answer = 1;
    const categoryList = new Map();
    for (let [_, category] of clothes) {
        categoryList.set(category, (categoryList.get(category) || 0) + 1)
    }
        
    for (let i of categoryList.values()) {
        answer *= (i + 1);
    }
    
    return answer - 1;
}