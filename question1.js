const generateHashObj = string => {
    let hashObj = {}

    for (const idx in string){
        if (hashObj[string[idx]]) hashObj[string[idx]] += string[idx]
        else hashObj[string[idx]] = string[idx]
    }
    return hashObj
}

const sortByStrings = (string, letterOrder) => {
    let letterHashObj = generateHashObj(string),
        decodedString = ''

    for (const idx in letterOrder){
        if (letterOrder[idx]){
            decodedString += letterHashObj[letterOrder[idx]]
        }
    }

    return decodedString
}
