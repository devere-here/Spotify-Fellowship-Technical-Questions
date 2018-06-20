/*
    Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

    Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

    Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

    1¢, 1¢, 1¢, 1¢
    1¢, 1¢, 2¢
    1¢, 3¢
    2¢, 2¢
*/

/*
    Space Complexity: O(n)
    Time Complexity: 0(n * m)
*/

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

/* Test Examples */
console.log(`changePossibilities(4, [1, 2, 3])`, changePossibilities(4, [1, 2, 3])) // returns  4
console.log(`changePossibilities(13, [1, 3, 5])`, changePossibilities(13, [1, 3, 5])) // returns  10
console.log(`changePossibilities(0, [1, 3, 5])`, changePossibilities(0, [1, 3, 5])) // returns  1
console.log(`changePossibilities(2, [3, 5])`, changePossibilities(2, [3, 5])) // returns  0

