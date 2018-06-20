/*
    Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

    The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

    For s = "4[ab]", the output should be decodeString(s) = "abababab" 
    For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/


/* Helper Functions*/

const addToNumberStack = (numberStack, number, previousAction) => {
    if (previousAction === 'added number'){
        let previousDigits = numberStack.pop()
        number = previousDigits.toString() + number.toString()
    }

    numberStack.push(+number)

    return numberStack
}

const getNewString = (stringStack) => {
    let tempValue = '',
        newString = ''

    while (tempValue !== '[' && stringStack.length !== 0){
        tempValue = stringStack.pop()
        if (tempValue !== '[') newString = tempValue + newString
    }

    return newString
}

const positionNewString = (decodedString, newString, previousAction) => {
    if (previousAction === 'updated decodedString'){
        decodedString = newString + decodedString
    } else {
        decodedString = decodedString + newString
    }

    return decodedString
}

const updateDecodedString = (stringStack, decodedString, previousAction, numberStack) => {
    let newString = getNewString(stringStack)

    decodedString = positionNewString(decodedString, newString, previousAction)
    decodedString = decodedString.repeat(numberStack.pop())

    return decodedString
}

const isNumber = elem => !isNaN(+elem)

const isLetter = elem => elem  !== ']'

/* Main Decode String Function*/

/*
    Space Complexity: O(n)
    Time Complexity: 0(n)
*/

const decodeString = (string) => {
    let numberStack = [],
        stringStack = [],
        decodedString = '',
        stringArr = string.split(''),
        previousAction

    stringArr.forEach(elem => {
        if (isNumber(elem)){
            numberStack = addToNumberStack(numberStack, +elem, previousAction)
            previousAction = 'added number'
        } else if (isLetter(elem)) {
            stringStack.push(elem)
            previousAction = 'added letter'
        } else {
            decodedString = updateDecodedString(stringStack, decodedString, previousAction, numberStack)  
            previousAction = 'updated decodedString'
        }
    })

    return decodedString
}


/* Correct Tests */
console.log(`decodeString('4[ab]')`, decodeString('4[ab]')) // returns  'abababab'
console.log(`decodeString('2[b3[a]]')`, decodeString('2[b3[a]]')) // returns  'baaabaaa'
console.log(`decodeString('2[3[a]b]')`, decodeString('2[3[a]b]')) // returns  'aaabaaab'
console.log(`decodeString('10[ab]')`, decodeString('10[ab]')) // returns  'abababababababababab'

/* Incorrect Test */
console.log(`decodeString('2[a]2[b]')`, decodeString('2[a]2[b]')) // returns  'aabaab' expected 'aabb'

/*
Comments on Question:
    I was able to get the correct answer for the given test cases and few edge cases. However, I wasn't able
    to correctly implemented the algorithm for all possible scenarios. I'm running low on time so I feel that it
    would be better if I spent more time on other parts of the application. If you guys have the chance, I'd appreciate it
    if you could send me the solution to this problem so I could compare it to my code
*/
