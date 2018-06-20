const changePossibilities = (amount, denoms) => {

    let numberOfCombinations = new Array(amount + 1)
    numberOfCombinations.fill(0)
    numberOfCombinations[0] = 1
  
    denoms.forEach(denom => {
        for (let i = denom; i < numberOfCombinations.length; i++) {
            numberOfCombinations[i] += numberOfCombinations[i - denom]
        }
    })

    return numberOfCombinations.pop()
}
