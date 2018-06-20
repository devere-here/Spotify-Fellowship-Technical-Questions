/*
    Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

/*
    Space Complexity: O(n)
    Time Complexity: 0(n * m)
*/

const generateHashObj = string => {
    let hashObj = {}

    for (const idx in string){
        if (hashObj[string[idx]]) hashObj[string[idx]] += string[idx]
        else hashObj[string[idx]] = string[idx]
    }
    return hashObj
}

const sortByString = (string, letterOrder) => {
    let letterHashObj = generateHashObj(string),
        decodedString = ''

    for (const idx in letterOrder){
        decodedString += letterHashObj[letterOrder[idx]] || ''
    }

    return decodedString
}

/* Tests */
console.log(`sortByString('weather', 'therapyw')`, sortByString('weather', 'therapyw')) // returns  "theeraw"
console.log(`sortByString('good', 'odg')`, sortByString('good', 'odg')) // returns 'oodg'
console.log(`sortByString('', 'odg')`, sortByString('', 'odg')) // returns ""
console.log(`sortByString('eagle', 'wrep')`, sortByString('eagle', 'wrep')) // returns "ee"

