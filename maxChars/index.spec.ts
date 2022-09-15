
import { maxCharacter } from './index'

describe('maximum character test', ()=> {

    test('it should be return max character', ()=> {
        expect(maxCharacter('abbcccd')).toBe('c')
    });
});