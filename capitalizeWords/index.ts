
export const capitalize = (sentence: string) => {
    const finalResult: string[] = []
    for(const word of sentence.split(" ")) {
        finalResult.push(word.charAt(0).toUpperCase() + word.slice(1))
    }
    return finalResult.join(' ')
}



export const capitalizes = (sentence: string) => {
    let finalResult = sentence[0].toUpperCase()
    for(let i = 1; i < sentence.length; i++) {

        if(sentence[i-1] === ' '){
            finalResult += sentence[i].toUpperCase()
        }else{
            finalResult += sentence[i]
        }
    }
    return finalResult
}


console.log(capitalizes("i, want"))