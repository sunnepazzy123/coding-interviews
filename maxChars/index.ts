

export const maxCharacter = (chars: string)=> {
    // abbcccd return c
    const charMap = {} as any
    let max = 0
    let maxChar = ''
    for (const char of chars){
        charMap[char] = charMap[char] + 1 || 1
    }

    for(const char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}
