export const chunk = (array: Array<number>, size: number)=>{

    let subArray = [] as Array<number>
    let counter = 0
    const bucket: Array<number[]> = []
    
    for (let arr of array){
        counter++
        if(counter <= size){
            subArray.push(arr)
            if(subArray.length === size && counter === size){
                bucket.push(subArray)
                counter = 0
                subArray = []
            }
        }
    }
    if(subArray.length) {
        bucket.push(subArray)
    }
    return bucket
}

export const chunkArray = (array: Array<string>, size: number)=>{

    const chunked = [] as string[][];    
    for (let element of array){
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size){
            chunked.push([element])
        }else {
            last.push(element)
        }
        
    }
    return chunked
}

