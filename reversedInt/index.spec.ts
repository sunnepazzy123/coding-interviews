import { reverseInt } from './index'

describe('reversed Int', ()=> {

    test('it should return reversed Int', ()=> {
        const answer = -5
        expect(reverseInt(-500)).toBe(answer)
    });
});