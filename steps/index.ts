export const steps = (n: number, row = 0, stair: string = '' ) : any=> {

    if(n === row) {
        return
    }

    if(n === stair.length){
        console.log(stair)
        return steps(n, row + 1)
    }
    
    const add = stair.length <= row ? '#' : ' '

    steps(n, row, stair+add)
}

// export const steps = (number: number) => {

//     for(let row = 0; row < number; row++) {
//         let stair = ''
//         for( let col = 0; col < number; col++) {
//             if(col <= row){
//                 stair += '#'
//             }else {
//                 stair += '-'
//             }
//         }
//         console.log(stair)
//     }
// }
steps(5)