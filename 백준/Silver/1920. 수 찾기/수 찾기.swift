let _ = Int(readLine()!)!
    let arrayN: [Int] = readLine()!.split(separator: " ").map { Int($0)! }
    let m = Int(readLine()!)!
    let arrayM : [Int] = readLine()!.split(separator: " ").map { Int ($0)! }
    var set : Set = Set(arrayN)

    for i in 0..<m {
        set.contains(arrayM[i]) ? print("1") : print("0")
    }