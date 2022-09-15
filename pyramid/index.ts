// export const pyramid = (n: number, row = 0, stair: string = '' ) : any=> {

//     if(n === row) {
//         return
//     }

//     if(n === stair.length){
//         console.log(stair)
//         return pyramid(n, row + 1)
//     }
    
//     const add = stair.length <= row ? '# ' : ' '


//     pyramid(n, row, stair+add)
// }

export const pyramid = (n: number) => {

        const midpoint = Math.floor((2 * n - 1) / 2);

        for(let row = 0; row < n; row++) {
            let level = ''
            for( let col = 0; col < 2 * n - 1; col++) {
                if(midpoint - row <= col && midpoint + row >= col){
                    level += '#'
                }else {
                    level += '-'
                }
            }
            console.log(level)
        }
    }

pyramid(5)