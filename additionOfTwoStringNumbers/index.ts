export const addTwoNumbers = (num1: string, num2: string) => {
    const start = new Date().getTime();
    //@ts-ignore
    if(isNaN(num1) || isNaN(num2) ) {
        throw new Error('invalid data types | enter only string numbers');
    }

    if(!num1 || !num2) {
        throw new TypeError('invalid data types | enter only string numbers');
    }
    if(typeof num1 === 'number' || typeof num2 === 'number') {
        throw new TypeError('invalid data types | enter only string numbers');
    }

    if(!Math.sign(+num1[0]) ||  !Math.sign(+num2[0])) {
        throw new TypeError('invalid data types | enter only positive string numbers');
    }
  
    let highestChars = '';
    let lowestChars = '';

    const differences = num1.length - num2.length
    if(differences < 0) {
        highestChars = num2
        lowestChars = num1
    }else{
        highestChars = num1
        lowestChars = num2
    }

    let zeroes = ''
    if(differences != 0) {
        for(let index = 1; index <= Math.abs(differences); index++){
            zeroes = zeroes + '0'
        }
    }
   
    let carryOver = 0
    let finalResult = ''
    
    lowestChars = zeroes + lowestChars
    for(let index = lowestChars.length-1; index >= 0; index--){
        let currentIndex = carryOver * index;
        let sum = 0;
        if(currentIndex !== index){
            sum = +lowestChars[index] + +highestChars[index]
        }else {
            sum = +lowestChars[index] + +highestChars[index] + carryOver
            carryOver = 0
        }
        
       if(sum > 9) {
            sum = sum % 10
            carryOver = 1
       }

       if(index == 0) {
            sum = +lowestChars[index] + +highestChars[index] + carryOver
        }

        finalResult = sum + finalResult

    }

    const diff = new Date().getTime() - start;
    console.log(`estimated time: ${diff}ms`)
    return finalResult;
}


console.log(addTwoNumbers('12554657787890778879766577537473497865858775378435538435487534954593267587667966797988887326382555646465645653827327297839245567888888889687687687666876878798797898798899877988989779889798798779788799879878797459485793588784593875887786655665656565565665666655666666556656565656565655656656556566556565665665565688778978987988797879753457839575495375457557458545454545455545455458789809576878987934934739484934348478349343794343748938437938739080908909', '125546577878907788797665775374734954875349545932326382555646465645653827327297839245567888888889687687687666876878798797898798899877988989779889798798779788799879878797459485793588784593875887786655665656565565665666655666666556656565656565655656656556566556565665665565688778978987988797879753457839575495375457557458545454545455545455458789809576878987934934739484934348478349343794343748938437938739080908909'))