/* Helper Functions*/

const addToNumberStack = (numberStack, number, lastElement) => {
    if (lastElement === 'added number'){
        let previousDigits = numberStack.pop()
        number = previousDigits.toString() + number.toString()
    }

    numberStack.push(number)

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

const decodeString = (string) => {
    let numberStack = [],
        stringStack = [],
        decodedString = '',
        previousAction

    string.split('').forEach(elem => {
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
