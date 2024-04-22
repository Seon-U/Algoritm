//
//  main.swift
//  Algorithm_Study
//
//  Created by seonu kim on 4/22/24.
//

import Foundation

let questionDict: [Int: (() -> Void)] = [
    2798: Q_2798,
    1000: Q_1000
]

func question(_ number: Int) {
    print("======== Question \(number) ========")
    questionDict[number]!()
}

let targetQuestion = 1000

question(targetQuestion)
