

export const reverseString = (words: string) => {
    const reverse = words.split('').reverse().join('');
    return reverse;
}


export const reverse = (str: string) => {
    let reversed = '';
  
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
