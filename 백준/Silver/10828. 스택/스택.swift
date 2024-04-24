let N = Int(readLine()!)!
    var stack = [String]()
    
    for _ in 0..<N {
        let command = readLine()!.split(separator: " ").map { String($0) }
        
        if command[0] == "push" {
            stack.append(command[1])
        }
        else if command[0] == "pop" {
            print(stack.isEmpty ? -1 : stack[stack.count - 1])
            if stack.isEmpty == false {
                stack.remove(at: stack.count - 1)
            }
        }
        else if command[0] == "size" {
            print(stack.count)
        }
        else if command[0] == "empty" {
            print(stack.isEmpty ? 1 : 0)
        }
        else if command[0] == "top" {
            print(stack.isEmpty ? -1 : stack[stack.count - 1])
        }
    }