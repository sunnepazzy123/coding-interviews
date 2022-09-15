import { chunk, chunkArray } from "."

describe('it should return chunk of array size', ()=>{

    test('it should return chunk of array size', ()=>{
        const array = [1, 2, 3, 4, 5]
        const chunkResult = [[1,2], [3,4], [5]]
        expect(chunk(array, 2)).toStrictEqual(chunkResult)
    })

    test('it should return chunk of array size', ()=>{
        const array = [1, 2, 3, 4, 5]
        const chunkResult = [[1,2], [3,4], [5]]
        expect(chunkArray(array, 2)).toStrictEqual(chunkResult)
    })
})