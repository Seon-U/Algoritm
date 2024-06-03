 let input: [Int] = readLine()!.split(separator: " ").map { Int(String($0))! }
    var passwordList : [String: String] = [:]
    for _ in 0..<input[0] {
        let site_password = readLine()!.split(separator: " ").map { String($0) }
        passwordList["\(site_password[0])"] = site_password[1]
    }
    for _ in 0..<input[1] {
        let site = readLine()!
        print(passwordList["\(site)"] ?? 0)
    }