import { reverseString } from './index'

describe('palidrome test', ()=> {

    test('it should be return true', ()=> {
        expect(reverseString('sunny')).toBe('ynnus')
    });
});