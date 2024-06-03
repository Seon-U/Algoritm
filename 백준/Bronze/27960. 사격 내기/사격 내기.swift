 let number = readLine()!.split(separator: " ").map { Int($0)! }
    print(number[0] ^ number[1])