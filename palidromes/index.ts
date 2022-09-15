

export const palidromes = (words: string) => {
    const reverse =  words.split('').reverse().join('');
    return reverse === words;
}

