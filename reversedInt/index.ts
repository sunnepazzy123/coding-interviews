

export const reverseInt = (number: number) => {
    const reverseInt = number.toString().split('').reverse().join('');
    return parseInt(reverseInt) * Math.sign(number);
}

