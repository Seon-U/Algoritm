 let n = Int(readLine()!)!
    var count = 0
    
    for A in 1...500 {
        for B in 1...500 {
            if (A + B) * (A - B) == n {
                count += 1
            }
        }
    }
    print(count)