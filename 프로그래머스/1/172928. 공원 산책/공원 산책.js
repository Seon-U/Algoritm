function solution(park, routes) {
    let x = 0;
    let y = 0;
    const mxRow = park.length;
    const mxCol = park[0].length;
    
    const isAvailable = (x, y) => {
        if (x < 0 || y < 0 || x >= mxRow || y >= mxCol) return false;
        if (park[x][y] === "X") return false;
        return true;
    }
    
    
    for (let row = 0; row< mxRow; row++) {
        for (let col=0; col<mxCol; col++) {
            if (park[row][col] == "S") { 
                x = row;
                y = col;
                break;
            }
        }
    }
    
    
    for (const route of routes) {
        let [direction, howfar] = route.split(" ");
        howfar = Number(howfar);
        
        let flag = 1;
        switch (direction) {
            case "E":
                for (let i=1; i <= howfar; i++) {
                    if (!isAvailable(x, y + i)) { 
                        flag = 0;
                        break;
                    } 
                }
                y = flag ? y + howfar : y;
                break;
            
            case "W":
                for (let i=y - howfar; i < y; i++) {
                    if (!isAvailable(x, i)) { 
                        flag = 0;
                        break;
                    } 
                }
                y = flag ? y - howfar : y;
                break;
            
            case "N":
                for (let i=x - howfar; i < x; i++) {
                    if (!isAvailable(i, y)) { 
                        flag = 0;
                        break;
                    } 
                }
                x = flag ? x - howfar : x;
                break;
            case "S":
                for (let i=1; i <= howfar; i++) {
                    if (!isAvailable(x + i, y)) { 
                        flag = 0;
                        break;
                    } 
                }
                x = flag ? x + howfar : x;
                break;
        }
    }
    
    return [x, y];
}