let n = Int(readLine()!)!
var students : [[String]] = Array(repeating: Array(repeating: "A", count: 4), count: n)
    
for i in 0..<n {
    students[i] = (readLine()!.split(separator: " ").map { String($0) })
}
students.sort(by: {
    if $0[1] != $1[1] {
        return Int($0[1])! > Int($1[1])!
    } else if $0[2] != $1[2] {
        return Int($0[2])! < Int($1[2])!
    } else if $0[3] != $1[3] {
        return Int($0[3])! > Int($1[3])!
    }
    return $0[0] < $1[0]
 })
for i in 0..<n {
    print(students[i][0])
}