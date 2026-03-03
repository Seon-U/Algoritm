function solution(park, routes) {
    let x = 0;
    let y = 0;
    const mxRow = park.length;
    const mxCol = park[0].length;
    
    const isAvailable = (x, y) => {
        if (x >= 0 && 
            y >= 0 && 
            x < mxRow && 
            y < mxCol && 
            park[x][y] != "X") return true;
        return false; 
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
    
    const move = {
        "E": [0, 1],
        "W": [0, -1],
        "N": [-1, 0],
        "S": [1, 0]
    }

    for (const route of routes) {
        let nx = x;
        let ny = y;
        let [direction, howfar] = route.split(" ");
        howfar = Number(howfar);
        
        let flag = 1;
        for (let i = 1; i <= howfar; i++) {
            nx = x + move[direction][0] * i;
            ny = y + move[direction][1] * i;
        
            if (!isAvailable(nx, ny)) {
                flag = 0;
                console.log(nx, ny, flag, i);
                break;
            } 
        }   
        if (!!flag) [x, y] = [nx, ny];
    }
    
    return [x, y];
}