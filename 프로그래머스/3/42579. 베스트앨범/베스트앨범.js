// 10 ^ 4, n2 로직 허용
function solution(genres, plays) {
    const genreList = {};
    const album = [];
    
    for (let i=0; i < genres.length; i++) {
        const genre = genres[i];
        if (genreList[genre] === undefined) {
            genreList[genre] = {
                total: plays[i],
                firstBest: i,
                secondBest: null,
            }
        } else {
            const { firstBest, secondBest } = genreList[genre];
            genreList[genre].total += plays[i];
            
            if (plays[i] > plays[firstBest]) {
                genreList[genre].firstBest = i;
                genreList[genre].secondBest = firstBest;
            } else if (secondBest === null || plays[i] > plays[secondBest]) {
                genreList[genre].secondBest = i;
            }
        }
    }
    
    const List = Object.entries(genreList).sort((a, b) => b[1].total - a[1].total); 
    
    List.forEach((v) => {
        album.push(v[1].firstBest);
        if (v[1].secondBest !== null) album.push(v[1].secondBest);
    })
        
    return album;
}