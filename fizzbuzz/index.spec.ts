import { fizzbuzz } from './'

describe('reversed Int', ()=> {

    test('it should return reversed Int', ()=> {
        const answer = 'fizz'
        expect(fizzbuzz(3)).toBe(answer)
    });
});