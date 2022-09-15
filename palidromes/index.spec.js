import { palidromes } from './index'

describe('palidrome test', ()=> {

    test('it should be return true', ()=> {
        expect(palidromes('sus')).toBe(true)
    });
});