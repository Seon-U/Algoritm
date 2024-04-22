//
//  1000.swift
//  Algorithm_Study
//
//  Created by seonu kim on 4/22/24.
//

import Foundation

func Q_1000 () {
    let result = readLine()!.split(separator: " ").map { Int(String($0))! }
    print(result[0] + result[1])
}
